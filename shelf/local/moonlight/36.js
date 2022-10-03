moonlight.bin["36"] = function(){
	var oo = {
		nameInformalS : "JJJ Accessor",
		importEO : {datE : {cleanFxn : v=>v}
		,           pthS : {cleanFxn : v=>v}},
		exportEO : {valM : {eqFxn : (a,b,dat)=>a===b}},
		dat : {
			datE : U ,
			pthS : U ,
			valM : U ,},
		import : function(prpSA=[]){
			if (π.vInA("pthS",prpSA) || π.vInA("datE",prpSA)){
				var datE = jjj([this.dat,"datE"],U);
				var pthS = jjj([this.dat,"pthS"],U);
				if (datE !== U && pthS !== U){ll("M36 " + JSON.stringify(pthS) + " : " + jjj([datE].concat(pthS),U));}
				this.dat.valM = jjj([datE].concat(pthS),U);}},
	};
	return oo;};