moonlight.bin["93"] = function(){
	var oo = {
		nameInformalS : "Gate Pass-3x",
		importEO : {
			I0 : {},
			I1 : {},
			I2 : {},
			Z  : {},},
		exportEO : {
			O0 : {},
			O1 : {},
			O2 : {},},
		dat : {},
		import : function(){
			if (this.chk("Z")){
				//ll("[M93] passing");
				this.dat.O0 = this.dat.I0;
				this.dat.O1 = this.dat.I1;
				this.dat.O2 = this.dat.I2;}},
	};
	return oo;};