moonlight.bin["83"] = function(){
	var prpSA = [
		"ancT"       ,
		"ancU"       ,
		"clkSetZ"    ,
		"cpsF"       ,
		"posJdgPrt"  ,
		"snpDmrN"    ,
		"velClkBseN" ,
		"velClkPrfN" ,
		"velLinN"    ,
		"vlmPrt"     ,];
	var oo = {
		nameInformalS : "Game Frame Preference Gate",
		importEO : prpSA.mapO(prpS=>({[prpS]:{}})),
		exportEO : prpSA.mapO(prpS=>({[prpS]:{}})),};
	return oo;};