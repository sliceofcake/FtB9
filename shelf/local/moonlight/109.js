moonlight.bin["109"] = function(){
	var wreC = 3;
	var oo = {
		nameInformalS : "Pass-" + wreC + "x",
		importEO : π.awt(0,wreC).mapO(wreN=>({["I"+wreN]:{}})).concat({F0:{}}),
		exportEO : π.awt(0,wreC).mapO(wreN=>({["O"+wreN]:{}})),
		dat : {},
		import : function(){
			// [!] Only pass just-updated lines.
			//     If you do it the other way (passing all lines), lines that were stuck during F will suddenly be passed.
			//     ...which is not desirable.
			if (this.dat.F0 === T){
				this.importEO.forEach((_,prpS)=>{
					if (prpS === "F0"){return;}
					if (this.chg(prpS)){
						this.dat["O"+prpS.substr(1)] = this.dat[prpS];}});}
			//if (this.dat.F0 === T && this.importEO.any((_,prpS)=>this.chg(prpS))){
			//	this.exportEO.forEach((_,prpS)=>{
			//		this.dat[prpS] = this.dat["I"+prpS.substr(1)];});}
			;},
	};
	return oo;};