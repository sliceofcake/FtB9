moonlight.bin["74"] = function(){
	var oo = {
		nameInformalS : "Assert Lane Sizing",
		importEO : {
			lneC    : {},
			lneElm  : {},},
		exportEO : {},
		dat : {
			lneC    : U ,
			lneElm  : N ,},
		import : function(){
			if ((this.chg("lneElm") || this.chg("lneC")) && nun(this.dat.lneElm) && nun(this.dat.lneC) && this.dat.lneC > 0){
				this.dat.lneElm.style.width  = "calc(100% / "+this.dat.lneC+")";
				this.dat.lneElm.style.height = "100%";}},
	};
	return oo;
};