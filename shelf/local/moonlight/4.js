moonlight.bin["4"] = function(){
	var oo = {
		nameInformalS : "2i1o",
		importEO : {
			i0  : {cleanFxn : v=>v,},
			i1  : {cleanFxn : v=>v,},
			fxn : {cleanFxn : v=>v,},
		},
		exportEO : {
			o0 : {eqFxn : (a,b)=>a===b,},
		},
		dat : {
			i0  : U,
			i1  : U,
			fxn : (i0,i1)=>U,
			o0  : U,
		},
		import:function(prpSA=[]){
			if (π.vInA("i0",prpSA) || π.vInA("i1",prpSA) || π.vInA("fxn",prpSA)){
				this.dat.o0 = this.dat.fxn(this.dat.i0,this.dat.i1);}},
	};
	return oo;
};