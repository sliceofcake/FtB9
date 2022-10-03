moonlight.bin["37"] = function(){
	var oo = {
		nameInformalS : "2:1 Auto Mux",
		importEO : {
			i0 : {cleanFxn : v=>v,},
			i1 : {cleanFxn : v=>v,},
		},
		exportEO : {
			o0 : {eqFxn : (a,b)=>a===b,},
		},
		dat : {
			i0 : U,
			i1 : U,
			o0 : U,},
		import : function(prpSA=[]){
			if (π.vInA("i0",prpSA) || π.vInA("i1",prpSA)){
				if (this.dat.i0 !== U && this.dat.i0 !== N){
					this.dat.o0 = this.dat.i0;}
				else if (this.dat.i1 !== U && this.dat.i1 !== N){
					this.dat.o0 = this.dat.i1;}
				else{
					this.dat.o0 = N;}}},
	};
	return oo;
};