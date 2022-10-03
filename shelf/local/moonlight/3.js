moonlight.bin["3"] = function(){
	var oo = {
		nameInformalS : "Bar (deprecated)",
		importEO : {
			minN : {cleanFxn : v=>num(v),},
			oriN : {cleanFxn : v=>num(v),},
			maxN : {cleanFxn : v=>num(v),},
			curN : {cleanFxn : v=>num(v),},
			dsrN : {cleanFxn : v=>num(v),},
			dsrT : {cleanFxn : v=>num(v),},
		},
		exportEO : {
			minN   : {eqFxn : (a,b    )=>a===b,},
			oriN   : {eqFxn : (a,b    )=>a===b,},
			maxN   : {eqFxn : (a,b    )=>a===b,},
			curN   : {eqFxn : (a,b    )=>a===b,},
			dsrN   : {eqFxn : (a,b    )=>a===b,withholdInitialF:T,},
			dsrT   : {eqFxn : (a,b    )=>a===b,withholdInitialF:T,},
		},
		dat : {
			minN           : 0,
			oriN           : 0,
			maxN           : 0,
			curN           : 0,
			dsrN           : 0,
			dsrT           : 0,
		},
	};
	return oo;
};