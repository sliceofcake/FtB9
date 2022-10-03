moonlight.bin["11"] = function(){
	var oo = {
		nameInformalS : "Key State",
		importEO : {
			keyE : {cleanFxn : v=>v,},
			keyS : {cleanFxn : v=>str(v),},
		},
		exportEO : {
			staF  : {eqFxn : (a,b)=>a===b},
			staFT : {eqFxn : (a,b)=>a===b},
		},
		dat : {
			keyS          : U  ,
			keySxkeyStaEO : {} ,
			staF          : F  ,
			staFT         : U  ,},
		import : function(prpSA=[]){
			// Keep track of key events. Be prepared to report on any key.
			var recalcF = F;
			if (π.vInA("keyE",prpSA) && this.dat.keyE !== N && this.dat.keyE !== U){
				//ll("M11 ping, "+this.dat.keyS);
				
				if (typeof this.dat.keySxkeyStaEO[this.dat.keyE.keyS] === US){
					this.dat.keySxkeyStaEO[this.dat.keyE.keyS] = {};}
				this.dat.keySxkeyStaEO[this.dat.keyE.keyS].staF  = this.dat.keyE.staF;
				this.dat.keySxkeyStaEO[this.dat.keyE.keyS].staFT = this.dat.keyE.staT;
				if (this.dat.keyS === this.dat.keyE.keyS){
					recalcF = T;}}
			if (π.vInA("keyS",prpSA)){
				recalcF = T;}
			if (recalcF === T){
				this.dat.staF  = jjj([this.dat.keySxkeyStaEO,this.dat.keyS,"staF"],F);
				this.dat.staFT = jjj([this.dat.keySxkeyStaEO,this.dat.keyS,"staT"],U);}},
	};
	return oo;
};