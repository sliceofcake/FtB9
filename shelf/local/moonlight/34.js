moonlight.bin["34"] = function(){
	var oo = {
		nameInformalS : "Signals To State",
		importEO : {
			hghSigF  : {cleanFxn : v=>v,},
			hghSigFT : {cleanFxn : v=>v,},
			lowSigF  : {cleanFxn : v=>v,},
			lowSigFT : {cleanFxn : v=>v,},
		},
		exportEO : {
			staF  : {eqFxn : (a,b,dat)=>a===b,},
			staFT : {eqFxn : (a,b,dat)=>a===b,},
		},
		dat : {
			hghSigF  : U ,
			hghSigFT : U ,
			lowSigF  : U ,
			lowSigFT : U ,
			staF     : F ,
			staFT    : F ,},
		ctr : async function(){;},
		import : function(prpSA=[]){
			// [!] Order matters.
			//     Low signal has priority over high signal.
			if (π.vInA("hghSigF",prpSA) && this.dat.hghSigF !== U && π.vInA("hghSigFT",prpSA) && this.dat.hghSigFT !== U){
				this.dat.staF  = T;
				this.dat.staFT = this.dat.hghSigFT;}
			if (π.vInA("lowSigF",prpSA) && this.dat.lowSigF !== U && π.vInA("lowSigFT",prpSA) && this.dat.lowSigFT !== U){
				this.dat.staF  = T;
				this.dat.staFT = this.dat.lowSigFT;}},
	};
	return oo;
};