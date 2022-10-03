moonlight.bin["49"] = function(){
	var prpSA = [
		"bpmEA"              ,
		"lneNxnteEAA"        ,
		"keySA"              ,
		"clkIdtS"            ,
		"edgKeyS"            ,
		"edgResS"            ,
		"edgF"               ,
		"edgU"               ,
		"edgZ"               ,
		"staKeyS"            ,
		"staResS"            ,
		"staF"               ,
		"staU"               ,
		"staZ"               ,
		"rstZ"               ,
		"snpMjrHgtPrt"       ,
		"snpMnrHgtPrt"       ,
		"snpDmrN"            ,
		"divWdtPrt"          ,
		"nteHgtPrt"          ,
		"padPreHgtN"         ,
		"padPstHgtN"         ,
		"velLinN"            ,
		"posJdgPrt"          ,
		"lneBkgHghCor"       ,
		"lneBkgMdmCor"       ,
		"lneNxnteHitHghCorA" ,
		"lneNxnteHitMdmCorA" ,
		"lneNxnteHitLowCorA" ,
		"lneNxnteTklHghCorA" ,
		"lneNxnteTklMdmCorA" ,
		"lneNxnteTklLowCorA" ,
		"lneNxdivHghCorA"    ,
		"lneNxdivMdmCorA"    ,
		"lneNxdrgHghCorA"    ,
		"lneNxdrgLowCorA"    ,
		"lneNxdrgMdmCorA"    ,
		"lneNxjdgHghCorA"    ,
		"lneNxjdgMdmCorA"    ,
		"lneNxlneBkgHghCorA" ,
		"lneNxlneBkgMdmCorA" ,
		"lneNxsnpMjrHghCorA" ,
		"lneNxsnpMjrMdmCorA" ,
		"lneNxsnpMnrHghCorA" ,
		"lneNxsnpMnrMdmCorA" ,
		"drgHghCor"          ,
		"drgMdmCor"          ,
		"drgLowCor"          ,
		"snpHghCor"          ,
		"snpMdmCor"          ,
		"divHghCor"          ,
		"divMdmCor"          ,
		"jdgHghCor"          ,
		"jdgMdmCor"          ,
		"hitErrDltMaxT"      ,
		"nteOfsDltT"         ,
		"lneC"               ,
		"lneNxscrNA"         ,
		"lneNxscrCurMaxNA"   ,
		"nteAltDltT"         ,
		"keyCpsHedSA"        ,
		"keyCpsTalSA"        ,
		"lneNxnteAltEAA"     ,
		"lneNxcvsBndE"       ,
		"g"                  ,
		"dltMagMinU"         ,
		"snpUA"              ,
		"altZ_snpUA"         ,
		"cpsF"               ,];
	var oo = {
		nameInformalS : "Game Frame Lane Diagram Bridge Head",
		importEO : prpSA.mapO(prpS=>({[prpS]:{}})),
		exportEO : prpSA.mapO(prpS=>({[prpS]:{}})),
		dat : prpSA.mapO(prpS=>({[prpS]:U})),
	};
	return oo;
};