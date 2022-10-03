// Trigger Interface - NOT OVERWRITTEN YET
moonlight.bin["10"] = function(){
	var oo = {
		nameInformalS : "???",
		importEO : {
			curF           : {cleanFxn : v=>flg(v),},
			dsrF           : {cleanFxn : v=>flg(v),},
			dsrT           : {cleanFxn : v=>num(v),},
		},
		exportEO : {
			curF   : {eqFxn : (a,b)=>a===b,},
			dsrF   : {eqFxn : (a,b)=>a===b,withholdInitialF:T,},
			dsrT   : {eqFxn : (a,b)=>a===b,withholdInitialF:T,},
			elRoot : {eqFxn : (a,b)=>F,},
		},
		dat : {
			orientationDir : "E",
			curF           : F,
			dsrF           : F,
			dsrT           : 0,
			elO            : {},
			ctxO           : {},
			fpsN           : 10, // !!!
			elDirtyF       : F,
			pixelsPerFrame : 2, // the maximum number of pixels we can transition each frame without it looking skippy
			elRootHashN    : 0,
			
			preclFPS : function(){
				//this.fpsN = (Math.PI*(this.elO.switch.width/2)/30)/this.pixelsPerFrame;
				this.fpsN = 10;},
			assertCSS : function(){
				µ.maCSS(document.head,this.parent.selectorRootS,µ.cssCompile({
					[this.parent.selectorRootS                 ] : "box-sizing:border-box;¥w:1000‰;¥h:1000‰;",
					[this.parent.selectorRootS+">*"            ] : "box-sizing:border-box;",
					[this.parent.selectorRootS+">canvas.switch"] : "¥bo:1px solid blue;",
				}));},
			assertCanvasSizeAll : function(){
				anipnt.assertSize(this.elO.switch,this.elO.root.clientWidth,this.elO.root.clientHeight,Ω.pxd);
			},
			
			pointerFxn : function(ev,that){
				if (Ω.mousedownF){
					var w = this.calcW();
					var h = this.calcH();
					switch (this.orientationDir){default:;
						break;case "N":this.dsrF = (ev.offsetY < h / 2);
						break;case "E":this.dsrF = (ev.offsetX > w / 2);
						break;case "S":this.dsrF = (ev.offsetY > h / 2);
						break;case "W":this.dsrF = (ev.offsetX < w / 2);}
					this.dsrT = π.now();
					moonlight.chain(this.parent.ID);}},
			calcW : function(){
				return this.elO.switch.width / Ω.pxd;},
			calcH : function(){
				return this.elO.switch.height / Ω.pxd;},
		},
		ctr   :function(){
			var pointerFxnWrapper = (function(that){return function(ev){that.dat.pointerFxn(ev,that.dat);};})(this);
			this.dat.elRoot = this.dat.elO.root = µ.m(
				[this.selectorRootS,[
					["canvas.switch",{mousedown:pointerFxnWrapper,mousemove:pointerFxnWrapper,mouseup:pointerFxnWrapper}],
				]]
			);
			this.dat.elRootHashN++;
			this.dat.assertCSS();
			
			this.dat.elO.switch  = this.dat.elO.root.querySelector("canvas.switch");
			this.dat.ctxO.switch = this.dat.elO.switch.getContext("2d");
			this.dat.preclFPS();
			this.dat.assertCanvasSizeAll();},
		import:function(prpSA=[]){
			if (π.vInA("tx",prpSA) || π.vInA("co",prpSA) || π.vInA("bg",prpSA)){
				this.dat.assertCSS();}},
		drawFrame:function(){
			this.dat.assertCanvasSizeAll();
			
			// assumes East, adjusts afterward
			var w = this.dat.calcW();
			var h = this.dat.calcH();
			var x0 = 0;var x1 = w / 2;
			if (this.dat.curF){
				x0 += w / 2;
				x1 += w / 2;}
			var y0 = 0;var y1 = h;
			switch (this.dat.orientationDir){default:;
				break;case "N":
					x0 *= (h/w);
					x1 *= (h/w);
					y0 *= (w/h);
					y1 *= (w/h);
					[x0,y0] = [y0,x0];
					[x1,y1] = [y1,x1];
					//....
					x0 = w - x0;
					x1 = w - x1;
					[x0,x1] = [x1,x0];
				break;case "E":;
				break;case "S":
					x0 *= (h/w);
					x1 *= (h/w);
					y0 *= (w/h);
					y1 *= (w/h);
					[x0,y0] = [y0,x0];
					[x1,y1] = [y1,x1];
				break;case "W":
					x0 = w - x0;
					x1 = w - x1;
					[x0,x1] = [x1,x0];}
			
			anipnt.clearRect(this.dat.ctxO.switch,0,0,w,h,Ω.pxd);
			anipnt.drawRect(
				this.dat.ctxO.switch,
				x0,y0,
				x1,y1,
				"purple",Ω.pxd);},
	};
	return oo;
};