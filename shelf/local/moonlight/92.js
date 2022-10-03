moonlight.bin["92"] = function(){
	var oo = {
		nameInformalS : "->[] Signaled",
		importEO : {
			datM   : {},
			datML  : {},
			datMLK : {},
			trgZ   : {},},
		exportEO : {},
		dat : {},
		import : function(){
			if (this.chg("trgZ") && (this.chg("datMLK") || this.chg("datML") || this.chg("datM")) && (nun(this.dat.datMLK) && nun(this.dat.datML))){
				this.dat.datML[this.dat.datMLK] = this.dat.datM;}},
	};
	return oo;
};