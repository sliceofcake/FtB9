moonlight.bin["19"] = function(){
	var oo = {
		nameInformalS : "2:1 Mux",
		importEO : {
			i0 : {cleanFxn : v=>v,},
			i1 : {cleanFxn : v=>v,},
			s0 : {cleanFxn : v=>int(v),},
		},
		exportEO : {
			o0 : {eqFxn : (a,b)=>a===b,},
		},
		dat : {
			i0 : U,
			i1 : U,
			s0 : 0,
			o0 : U,},
		import : function(prpSA=[]){
			if (π.vInA("s0",prpSA) || π.vInA("i"+this.dat.s0,prpSA)){
				this.dat.o0 = this.dat["i"+this.dat.s0];}},
	};
	return oo;
};