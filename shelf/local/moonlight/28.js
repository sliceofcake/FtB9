moonlight.bin["28"] = function(){
	var oo = {
		nameInformalS : "String To Byte Array",
		importEO : {
			txtS : {cleanFxn : v=>v,},
		},
		exportEO : {
			byteA : {eqFxn : (a,b)=>a===b},
		},
		dat : {
			txtS : U ,
			byteA : [],
		},
		import : function(prpSA=[]){
			if (π.vInA("txtS",prpSA) && this.dat.txtS !== U){
				//this.dat.bitA = this.dat.txtS.split("").map(s=>s.charCodeAt(0)&0xFF).map(n=>n.toString(2)).map(s=>π.padLMin(s,8,"0")).join("").split("").map(s=>int(s));
				this.dat.byteA = this.dat.txtS.split("").map(s=>s.charCodeAt(0)&0xFF);}},
	};
	return oo;
};