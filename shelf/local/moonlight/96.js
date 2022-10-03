moonlight.bin["96"] = function(){
	var oo = {
		nameInformalS : "Chart Encoder (ftb)",
		importEO : {
			bpmEA       : {},
			lneNxnteEAA : {},
			trgZ        : {},},
		exportEO : {
			datS : {},},
		dat : {
			ecdFxn : function(){
				this.datS
				= "###FILE ALREADY PARSED###"
				+ "\n"
				+ this.bpmEA.map(bpmE=>"BPM "+str(π.round(bpmE.hedU*1000,3))+" "+str(π.round(60/bpmE.dltU,3))).join("\n")
				+ "\n"
				+ this.lneNxnteEAA.map((nteEA,lneN)=>nteEA.map(nteE=>({lneN,hedU:nteE.hedU,talU:nteE.talU}))).flat(Infinity).sort((a,b)=>{var h = a.hedU - b.hedU;if (h !== 0){return h;}var t = a.talU - b.talU;if (t !== 0){return t;}return a.lneN - b.lneN;}).map(nteAltE=>str(π.round(nteAltE.hedU*1000,3))+((nteAltE.hedU===nteAltE.talU)?(""):("-"+str(π.round(nteAltE.talU*1000,3))))+" 0 "+str(nteAltE.lneN+1)).join("\n")
				+ "";
				;},
		},
		import : function(){//this.dbgPthFxn();
			if ((this.chg("trgZ")) && (nun(this.dat.bpmEA) && nun(this.dat.lneNxnteEAA))){
				this.dat.ecdFxn();}},
	};
	return oo;
};