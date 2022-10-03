moonlight.bin["6"] = function(){
	var oo = {
		nameInformalS : "2-State Switch",
		importEO : {
			curF : {cleanFxn : v=>flg(v),},
			dsrF : {cleanFxn : v=>flg(v),},
			dsrT : {cleanFxn : v=>num(v),},
		},
		exportEO : {
			curF : {eqFxn : (a,b)=>a===b,},
			dsrF : {eqFxn : (a,b)=>a===b,withholdInitialF:T,},
			dsrT : {eqFxn : (a,b)=>a===b,withholdInitialF:T,},
		},
		dat : {
			curF : F,
			dsrF : F,
			dsrT : 0,
		},
	};
	return oo;
};