moonlight.bin["18"] = function(){
	var oo = {
		nameInformalS : "Resource Interface",
		importEO : {
			clearSignal : {cleanFxn : v=>v,},
		},
		exportEO : {
			elRoot  : {eqFxn : (a,b)=>a===b},
			fileR   : {eqFxn : (a,b)=>a===b},
		},
		dat : {
			elRoot         : N ,
			elO            : {},
			ctxO           : {},
			fpsN           : 10, // !!!
			pixelsPerFrame :  2, // the maximum number of pixels we can transition each frame without it looking skippy
			fileR          : N ,
			
			preclFPS : function(){
				//this.fpsN = (Math.PI*(this.elO.switch.width/2)/30)/this.pixelsPerFrame;
				this.fpsN = 10;},
			assertCSS : function(){
				µ.maCSS(document.head,this.parent.selectorRootS,µ.cssCompile({
					[this.parent.selectorRootS                  ] : "¥:relative;box-sizing:border-box;¥w:1000‰;¥h:1000‰;",
					[this.parent.selectorRootS+">*"             ] : "box-sizing:border-box;",
					[this.parent.selectorRootS+">canvas.display"] : "¥bo:1px solid orange;",
				}));},
			assertCanvasSizeAll : function(){
				anipnt.assertSize(this.elO.display,this.elO.root.clientWidth,this.elO.root.clientHeight,Ω.pxd);
			},
			
			calcW : function(){
				return this.elO.display.width / Ω.pxd;},
			calcH : function(){
				return this.elO.display.height / Ω.pxd;},
			
			mouseDnFxn : function(ev,el){
				this.elInput.click();
				ev.preventDefault();},
			changeFxn : function(ev,el){
				var file = this.elInput.files[0];
				// !!! HERE - try out experimental π.var() variable wrapper
				this.fileR = (typeof file !== "undefined") ? file : N;
				this.parent.chain();
				ev.preventDefault();},
		},
		ctr : function(){
			this.dat.mouseDnBoundFxn = (function(that){return function(ev){that.dat.mouseDnFxn(ev,this);};})(this);
			this.dat.changeBoundFxn  = (function(that){return function(ev){that.dat.changeFxn (ev,this);};})(this);
			this.dat.elRoot = this.dat.elO.root = µ.m(
				[this.selectorRootS,[
					["canvas.display",{d:{tabindex:"0"},mousedown:this.dat.mouseDnBoundFxn}],
				]]
			);
			this.dat.assertCSS();
			
			this.dat.elInput = µ.m(["input",{d:{type:"file"},change:this.dat.changeBoundFxn}]);
			
			this.dat.elO.display  = this.dat.elO.root.querySelector("canvas.display");
			this.dat.ctxO.display = this.dat.elO.display.getContext("2d");
			this.dat.preclFPS();
			this.dat.assertCanvasSizeAll();},
		import : function(prpSA=[]){
			if (π.vInA("tx",prpSA) || π.vInA("co",prpSA) || π.vInA("bg",prpSA)){
				this.dat.assertCSS();}},
		drawFrame : function(){
			this.dat.assertCanvasSizeAll();
			
			var w = this.dat.calcW();
			var h = this.dat.calcH();
			
			anipnt.clearRect(this.dat.ctxO.display,0,0,w,h,Ω.pxd);
			if (this.dat.fileR !== N){
				this.dat.ctxO.display.font = "12px Arial";
				anipnt.fillText(this.dat.ctxO.display,this.dat.fileR.name,0,0,"pink",Ω.pxd);}},
	};
	return oo;
};