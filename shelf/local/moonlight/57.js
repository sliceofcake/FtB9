moonlight.bin["57"] = function(){
	var oo = {
		nameInformalS : "Clock Position Set",
		importEO : {
			clkIdtS : {},
			posU    : {},
			trgZ    : {},},
		exportEO : {},
		dat : {},
		import : function(){
			if ((this.chg("trgZ"))
			&&  (isStrCln(this.dat.clkIdtS) && isNumCln(this.dat.posU))){
				Ω.clk[this.dat.clkIdtS].ancU = this.dat.posU;
				Ω.clk[this.dat.clkIdtS].ancT = π.clcCurT();}},
	};
	return oo;
};