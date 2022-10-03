moonlight.bin["61"] = function(){
	var oo = {
		nameInformalS : "Calculate Array Count",
		importEO : {
			datMA : {},},
		exportEO : {
			datMAC : {eqFxn : (a,b)=>a===b,},},
		dat : {
			datMA  : U ,
			datMAC : U ,},
		import : function(){
			if (this.chg("datMA")){
				this.dat.datMAC = ((this.dat.datMA === U || !isA(this.dat.datMA)) ? (U) : (this.dat.datMA.length));}},
	};
	return oo;
};