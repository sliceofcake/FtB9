moonlight.bin["65"] = function(){
	var oo = {
		nameInformalS : "Continually Assert Canvas-Dimensions",
		importEO : {
			tgtElm : {},},
		exportEO : {},
		dat : {
			obsRszM : U ,
			tgtElm  : N ,
			//....
			pmpFxn : function(){
				this.tgtElm.height = this.tgtElm.clientHeight * Ω.pxd ;
				this.tgtElm.width  = this.tgtElm.clientWidth  * Ω.pxd ;
				//ll("M65("+this.tgtElm.clientWidth+","+this.tgtElm.clientHeight+",x"+Ω.pxd+" -> "+this.tgtElm.width+","+this.tgtElm.height+")",this.tgtElm);
				;},},
		ctr : async function(){
			this.dat.obsRszM = new ResizeObserver((function(dat){return function(){
				dat.pmpFxn();
			};})(this.dat));},
		dtr : function(){
			this.dat.obsRszM.disconnect();},
		import : function(){
			if (this.chg("tgtElm")){
				this.dat.obsRszM.disconnect();
				if (nun(this.dat.tgtElm)){
					this.dat.pmpFxn();
					this.dat.obsRszM.observe(this.dat.tgtElm);}}},
	};
	return oo;
};