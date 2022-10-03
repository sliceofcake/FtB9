moonlight.bin["56"] = function(){
	var oo = {
		nameInformalS : "Canvas Renderer",
		importEO : {
			dspG   : {},
			tgtElm : {},
			trgZ   : {},},
		exportEO : {},
		dat : {
			dspG    : U ,
			hgtMemN : U ,
			tgtElm  : U ,
			trgZ    : U ,
			wdtMemN : U ,
			//....
			drwFxn : function(){//ll("M56 draw",this.tgtElm);
				if (!nun(this.tgtElm)){
					this.wdtMemN = U;
					this.hgtMemN = U;
					return;}
				this.wdtMemN = this.tgtElm.clientWidth;
				this.hgtMemN = this.tgtElm.clientHeight;
				var cvs = this.tgtElm;if (!(cvs instanceof HTMLCanvasElement)){lle("cannot draw to this non-canvas element:",this.tgtElm);return;} // Not a canvas.
				var ctx = cvs.getContext("2d");
				ctx.clearRect(0,0,cvs.width,cvs.height);
				//ll("M56",[cvs.width,cvs.height]);
				if (!nun(this.dspG)){return;}
				if (this.dspG.elCanvas.width  === 0){return;} //llw("Manually blocked a 0-"+"width" +" canvas draw because Chrome is stupid.");
				if (this.dspG.elCanvas.height === 0){return;} //llw("Manually blocked a 0-"+"height"+" canvas draw because Chrome is stupid.");
				//// !!! DBG
				//if (this.parent.nmeS === "Canvas Renderer #B"){
				//	ll("go");}
				ctx.drawImage(this.dspG.elCanvas,0,0,this.dspG.wdtN*this.dspG.pxdN,this.dspG.hgtN*this.dspG.pxdN,0,0,cvs.width,cvs.height);
				//ll(0+","+0+","+this.dspG.wdtN*this.dspG.pxdN+","+this.dspG.hgtN*this.dspG.pxdN+","+0+","+0+","+cvs.width+","+cvs.height);
				;},
		},
		ctr : function(){
			this.dat.drwFxn();},
		import : function(){
			// One-time check so we don't spam the log.
			if (this.chg("tgtElm")){
				if (nun(this.tgtElm) === false){return;}
				if (!(this.tgtElm instanceof HTMLCanvasElement)){llw("M56 : the supplied DOM element is not a canvas.",this.tgtElm);return;}}
			if (this.chg("dspG") || this.chg("tgtElm") || this.chg("trgZ")){
				this.dat.drwFxn();}},
		drawFrame : function(curT){
			// Even if we aren't pumping, make sure to repaint on resize (for some reason, forgot).
			if (nun(this.dat.tgtElm) && ((this.dat.wdtMemN !== this.dat.tgtElm.clientWidth) || (this.dat.hgtMemN !== this.dat.tgtElm.clientHeight))){
				this.dat.drwFxn();}},
	};
	return oo;
};