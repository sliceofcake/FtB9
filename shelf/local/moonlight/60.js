moonlight.bin["60"] = function(){
	var oo = {
		nameInformalS : "===",
		importEO : {
			datM_0 : {},
			datM_1 : {},},
		exportEO : {
			staF : {eqFxn : (a,b)=>a===b,},},
		dat : {
			datM_0 : U ,
			datM_1 : U ,
			staF   : U ,},
		import : function(){
			if (this.chk("datM_0") || this.chk("datM_1")){
				if      (!nun(this.dat.datM_0)){this.dat.staF = U;}
				else if (!nun(this.dat.datM_1)){this.dat.staF = U;}
				else                           {this.dat.staF = (this.dat.datM_0 === this.dat.datM_1);}}},
	};
	return oo;
};