moonlight.bin["75"] = function(){
	var oo = {
		nameInformalS : "->[]",
		importEO : {
			datM   : {},
			datML  : {},
			datMLK : {},},
		exportEO : {},
		dat : {
			datM   : U  ,
			datML  : [] ,
			datMLK : U  ,},
		import : function(){
			if ((this.chg("datMLK") || this.chg("datML") || this.chg("datM")) && (nun(this.dat.datMLK) && nun(this.dat.datML) && nun(this.dat.datM))){
				this.dat.datML[this.dat.datMLK] = this.dat.datM;}},
	};
	return oo;
};