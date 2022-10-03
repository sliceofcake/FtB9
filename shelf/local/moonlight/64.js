moonlight.bin["64"] = function(){
	var oo = {
		nameInformalS : "Continually Extract Dimensions",
		importEO : {
			tgtElm : {},},
		exportEO : {
			dspHgtN : {},
			dspWdtN : {},},
		dat : {
			dspHgtN : U ,
			obsRszM : U ,
			tgtElm  : N ,
			dspWdtN : U ,
			//....
			pmpFxn : function(){
				this.dspHgtN = this.tgtElm.clientHeight ;
				this.dspWdtN = this.tgtElm.clientWidth  ;
				this.parent.chain();},},
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
					this.dat.obsRszM.observe(this.dat.tgtElm);}
				else{
					this.dat.dspHgtN = U ;
					this.dat.dspWdtN = U ;}}},
	};
	return oo;
};