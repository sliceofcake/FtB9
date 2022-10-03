moonlight.bin["100"] = function(){
	var oo = {
		nameInformalS : "Data Alter",
		importEO : {
			datAltFxnS : {},
			datBlb     : {},},
		exportEO : {
			datAltBlb : {},},
		dat : {},
		import : function(){
			if ((this.chg("datBlb") || this.chg("datAltFxnS")) && (nun(this.dat.datBlb) && nun(this.dat.datAltFxnS))){
				ll("M100 decode function : [[["+this.dat.datAltFxnS+"]]]");
				if (this.dat.datAltFxnS === ""){
					this.dat.datAltBlb = this.dat.datBlb;}
				else{
					this.dat.datBlb.arrayBuffer().then(arrayBuffer=>{
						switch (this.dat.datAltFxnS){default : {llw("Unsupported/Unexpected decode function name.");}
							break;case "reverse" : {
								var bufM = new Uint8Array(arrayBuffer);
								bufM.reverse();
								this.dat.datAltBlb = new Blob([bufM]);
								this.chain();}
							break;case "" : {;};}
						;});}}},
	};
	return oo;
};