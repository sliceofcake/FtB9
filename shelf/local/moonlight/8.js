moonlight.bin["8"] = function(){
	var oo = {
		nameInformalS : "Text Display",
		importEO : {
			txtS : {cleanFxn : v=>str(v),},
		},
		exportEO : {
			elRoot : {eqFxn : (a,b)=>F,},
		},
		dat : {
			txtS             : "",
			elO              : {},
			ctxO             : {},
			fpsN             : 10, // !!!
			elDirtyF         : F,
			pixelsPerFrame   : 2, // the maximum number of pixels we can transition each frame without it looking skippy
			elRootHashN      : 0,
			elRootHashN_PREV : 0,
			
			preclFPS : function(){
				//this.fpsN = (Math.PI*(this.elO.switch.width/2)/30)/this.pixelsPerFrame;
				this.fpsN = 10;},
			assertCSS : function(){
				µ.maCSS(document.head,this.parent.selectorRootS,µ.cssCompile({
					[this.parent.selectorRootS                  ] : "box-sizing:border-box;¥w:1000‰;¥h:1000‰;",
					[this.parent.selectorRootS+">*"             ] : "box-sizing:border-box;",
					[this.parent.selectorRootS+">canvas.display"] : "", //"¥bo:1px solid orange;",
				}));},
			assertCanvasSizeAll : function(){
				anipnt.assertSize(this.elO.display,this.elO.root.clientWidth,this.elO.root.clientHeight,Ω.pxd);
			},
			
			calcW : function(){
				return this.elO.display.width / Ω.pxd;},
			calcH : function(){
				return this.elO.display.height / Ω.pxd;},
		},
		ctr   :function(){
			this.dat.elRootHashN_PREV = this.dat.elRootHashN;
			this.dat.elRoot = this.dat.elO.root = µ.m(
				[this.selectorRootS,[
					["canvas.display"],
				]]
			);
			this.dat.elRootHashN++;
			this.dat.assertCSS();
			
			this.dat.elO.display  = this.dat.elO.root.querySelector("canvas.display");
			this.dat.ctxO.display = this.dat.elO.display.getContext("2d");
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
			
			anipnt.clearRect(this.dat.ctxO.display,0,0,w,h,Ω.pxd);
			this.dat.ctxO.display.font = "12px Arial";
			anipnt.fillText(this.dat.ctxO.display,this.dat.txtS,0,0,"pink",Ω.pxd);},
	};
	return oo;
};