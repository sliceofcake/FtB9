moonlight.bin["53"] = function(){
	var oo = {
		nameInformalS : "[]->",
		importEO : {
			datML  : {},
			datMLK : {},},
		exportEO : {
			datM : {},},
		dat : {
			datM   : U,
			datML  : U,
			datMLK : U,},
		ctr : function(){;},
		import : function(){
			if ((this.chk("datML") || this.chk("datMLK"))
			&&  (nun(this.dat.datML) && nun(this.dat.datMLK))){
				this.dat.datM = this.dat.datML[this.dat.datMLK];}},
	};
	return oo;
};