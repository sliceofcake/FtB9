moonlight.bin["103"] = function(){
	var oo = {
		nameInformalS : "Match-2x Pass-3x",
		importEO : {
			I0 : {},
			I1 : {},
			I2 : {},
			M0 : {},
			M1 : {},},
		exportEO : {
			O0 : {},
			O1 : {},
			O2 : {},},
		dat : {},
		import : function(){
			if ((this.chg("M0") || this.chg("M1") || this.chg("I0") || this.chg("I1")) && (nun(this.dat.M0) && nun(this.dat.M1)) && (this.dat.M0 === this.dat.M1)){
				this.dat.O0 = this.dat.I0;
				this.dat.O1 = this.dat.I1;
				this.dat.O2 = this.dat.I2;}},
	};
	return oo;};