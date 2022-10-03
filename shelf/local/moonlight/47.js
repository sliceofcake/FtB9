moonlight.bin["47"] = function(){
	var oo = {
		nameInformalS : "Audio Volume Controller",
		importEO : {
			audM   : {},
			vlmPrt : {},},
		exportEO : {},
		dat : {
			audM   : U ,
			vlmPrt : U ,},
		ctr : async function(){;},
		import : function(){
			if ((this.chk("audM") || this.chk("vlmPrt"))
			&&  (nun(this.dat.audM) && nun(this.dat.vlmPrt))){
				this.dat.audM.volume = this.dat.vlmPrt;}},
	};
	return oo;
};