moonlight.bin["42"] = function(){
	var oo = {
		nameInformalS : "Chart Format Detector",
		importEO : {
			datS : {},},
		exportEO : {
			fmtS : {eqFxn : (a,b)=>a===b,},},
		dat : {
			datS : "",
			fmtS : "",},
		ctr : async function(){;},
		import : function(){
			if (this.chk("datS")){
				if      (this.dat.datS.match(/\[HitObjects\]/             ) !== N){this.dat.fmtS = "o!m";}
				else if (this.dat.datS.match(/HEADER\sFIELD/              ) !== N){this.dat.fmtS = "bms";}
				else if (this.dat.datS.match(/###FILE\sALREADY\sPARSED###/) !== N){this.dat.fmtS = "ftb";}
				else                                                              {this.dat.fmtS = U    ;}}},
	};
	return oo;
};