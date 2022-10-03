moonlight.bin["31"] = function(){
	var oo = {
		nameInformalS : "Choose A Key",
		importEO : {
			keyE : {cleanFxn : v=>v,},
			ptrE : {cleanFxn : v=>v,},
		},
		exportEO : {
			keyS  : {eqFxn : (a,b)=>a===b},
			keyST : {eqFxn : (a,b)=>a===b},
		},
		dat : {
			keyE  : U ,
			keyS  : U ,
			keyST : U ,
			ptrE  : U ,},
		ctr : async function(){
			if (this.dat.keyS !== U){
				this.dat.keyST = π.now();}},
		import : function(prpSA=[]){
			// If pointer is depressed and a new key signal comes in depressed, set keyS.
			if (jjj([this.dat.ptrE,"staF"],F) === T && (π.vInA("keyE",prpSA) && jjj([this.dat.keyE,"staF"],F) === T)){
				this.dat.keyS  = this.dat.keyE.keyS;
				this.dat.keyST = this.dat.keyE.t;}},
	};
	return oo;
};