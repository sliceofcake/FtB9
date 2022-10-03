moonlight.bin["77"] = function(){
	var oo = {
		nameInformalS : "Assert CSS Dimensions",
		importEO : {
			hgtN   : {},
			tgtElm : {},
			wdtN   : {},},
		exportEO : {},
		dat : {
			hgtN   : U ,
			tgtElm : N ,
			wdtN   : U ,},
		import : function(){
			if ((this.chg("tgtElm") || this.chg("wdtN") || this.chg("hgtN")) && (nun(this.dat.tgtElm) && nun(this.dat.wdtN) && nun(this.dat.hgtN))){
				this.dat.tgtElm.style.width  = this.dat.wdtN + "px" ;
				this.dat.tgtElm.style.height = this.dat.hgtN + "px" ;}},
	};
	return oo;
};