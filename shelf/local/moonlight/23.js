moonlight.bin["23"] = function(){
	var oo = {
		nameInformalS : "Canvas Renderer",
		importEO : {
			g        : {cleanFxn : v=>v,},
			elTarget : {cleanFxn : v=>v,},
		},
		exportEO : {
			wdtDspN : {eqFxn : (a,b,dat)=>a===b,},
			hgtDspN : {eqFxn : (a,b,dat)=>a===b,},
		},
		dat : {
			g        : U,
			elTarget : N,
			
			renderFxn : function(){
				if (this.elTarget !== N && this.elTarget !== U && this.g !== N && this.g !== U){
					var canvas = this.elTarget;
					if (!(canvas instanceof HTMLCanvasElement)){llw("M23 the supplied el is not a canvas");return;}
					var ctx = canvas.getContext("2d");
					if (canvas.width  !== canvas.clientWidth  * Ω.pxd){canvas.width  = canvas.clientWidth  * Ω.pxd;}
					if (canvas.height !== canvas.clientHeight * Ω.pxd){canvas.height = canvas.clientHeight * Ω.pxd;}
					//if (canvas.width  === 0){llw("M23 target width  0");return;}
					//if (canvas.height === 0){llw("M23 target height 0");return;}
					ctx.clearRect(0,0,canvas.width,canvas.height);
					if (this.g.elCanvas.width  === 0){llw("M23 source width  0");return;}
					if (this.g.elCanvas.height === 0){llw("M23 source height 0");return;}
					ctx.drawImage(this.g.elCanvas,0,0,this.g.wdtN*this.g.pxdN,this.g.hgtN*this.g.pxdN,0,0,canvas.width,canvas.height);}},
		},
		ctr : function(){
			this.dat.renderFxn();},
		import : function(prpSA=[]){
			if (π.vInA("g",prpSA) || π.vInA("elTarget",prpSA)){
				this.dat.renderFxn();}},
		drawFrame : function(){
			if (this.dat.elTarget !== N){
				var altF = F;
				if (this.dat.wdtDspN !== this.dat.elTarget.clientWidth){
					this.dat.wdtDspN = this.dat.elTarget.clientWidth;
					altF = T;}
				if (this.dat.hgtDspN !== this.dat.elTarget.clientHeight){
					this.dat.hgtDspN = this.dat.elTarget.clientHeight;
					altF = T;}
				if (altF){
					this.chain();}}},
	};
	return oo;
};