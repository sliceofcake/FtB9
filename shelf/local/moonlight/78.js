moonlight.bin["78"] = function(){
	var oo = {
		nameInformalS : "Resize Observer",
		importEO : {
			tgtElm : {},},
		exportEO : {
			trgZ : {},},
		dat : {
			tgtElm : N ,
			trgZ   : U ,
			//....
			pmpFxn : function(){
				this.trgZ = π.signalFlip(this.trgZ);
				this.parent.chain();},},
		ctr : async function(){
			this.dat.obsRszM = new ResizeObserver((function(dat){return function(){
				dat.pmpFxn();};})(this.dat));},
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