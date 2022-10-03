moonlight.bin["101"] = function(){
	var oo = {
		nameInformalS : "Chart Decoder (idk)",
		importEO : {
			datS : {},},
		exportEO : {
			bpmEA       : {},
			lneC        : {},
			lneNxnteEAA : {},},
		dat : {
			bpmEA       : [] ,
			lneNxnteEAA : [] ,},
		import : function(){
			if (this.chk("datS")){
				this.dat.lneC = 0;
				this.dat.lneNxnteEAA = (new Array(this.dat.lneC)).map(_=>[]);}},
	};
	return oo;
};