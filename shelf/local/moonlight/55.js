moonlight.bin["55"] = function(){
	var oo = {
		nameInformalS : "Clock Velocity Set",
		importEO : {
			clkIdtS : {},
			velClkN : {},},
		exportEO : {},
		dat : {
			clkIdtS : U ,
			velClkN : U ,},
		import : function(){
			if ((this.chk("clkIdtS") || this.chk("velClkN"))
			&&  (isStrCln(this.dat.clkIdtS) && isNumCln(this.dat.velClkN))){
				// !!! Not great that changing velocity causes clock positional error, but doing things this way is much simpler.
				var curT = π.clcCurT();
				Ω.clk[this.dat.clkIdtS].ancU = π.clcClkCurU(this.dat.clkIdtS,curT);
				Ω.clk[this.dat.clkIdtS].ancT = curT;
				Ω.clk[this.dat.clkIdtS].velN = this.dat.velClkN;}},
	};
	return oo;
};