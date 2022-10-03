moonlight.bin["95"] = function(){
	var oo = {
		nameInformalS : "Save To File",
		importEO : {
			datS    : {},
			fleNmeS : {},
			jobZ    : {},},
		exportEO : {},
		dat : {},
		import : function(){
			if ((this.chg("datS") || this.chg("fleNmeS") || this.chg("jobZ")) && (nun(this.dat.datS) && nun(this.dat.fleNmeS) && nun(this.dat.jobZ))){
				//ll("[job#:"+this.dat.jobZ+"] fake save of [[["+this.dat.fleNmeS+"]]] containing [[["+this.dat.datS+"]]].");
				π.saveTextAsFile(this.dat.fleNmeS,this.dat.datS);
				;}},
	};
	return oo;};