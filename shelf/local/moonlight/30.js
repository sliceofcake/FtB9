moonlight.bin["30"] = function(){
	var oo = {
		nameInformalS : "Byte Array To Bit Array",
		importEO : {
			byteA : {cleanFxn : v=>v,},
		},
		exportEO : {
			bitA : {eqFxn : (a,b)=>a===b},
		},
		dat : {
			byteA : U ,
			bitA  : [],
		},
		import : function(prpSA=[]){
			if (π.vInA("byteA",prpSA) && this.dat.byteA !== U){
				this.dat.bitA = this.dat.byteA.map(n=>n.toString(2)).map(s=>π.padLMin(s,8,"0")).join("").split("").map(s=>int(s));}},
	};
	return oo;
};