moonlight.bin["99"] = function(){
	var oo = {
		nameInformalS : "URL To Data",
		importEO : {
			urlS : {},},
		exportEO : {
			datBlb : {},
			lodBC  : {},
			lodF   : {},},
		dat : {},
		import : function(){
			if (this.chk("urlS")){
				
				// Reset these values until we get correct data in.
				this.dat.lodBC = 0;
				this.dat.lodF = F;
				
				var xhr = new XMLHttpRequest();
				xhr.open("GET",this.dat.urlS);
				xhr.responseType = "blob";
				//xhr.overrideMimeType("audio/mpeg"); // [!] Typically comes in as "text/xml", but looks like we don't care, which is nice because there are multiple audio formats.
				xhr.addEventListener("progress",(function(that,urlS_FRZ){return function(evtM){
					// If this is now an unwanted request, abort and break out of this function.
					if (that.dat.urlS !== urlS_FRZ){
						this.abort();
						return;}
					// [!] We can't calculate a Prt here ... event.total is always 0 during testing. [28 Nov 2020]
					that.dat.lodBC = evtM.loaded;
					that.chain();};})(this,this.dat.urlS));
				xhr.addEventListener("load",(function(that,urlS_FRZ){return function(oEvent){
					// If this is now an unwanted request, break out of this function.
					if (that.dat.urlS !== urlS_FRZ){
						return;}
					var blb = this.response;
					that.dat.datBlb = blb;
					that.dat.lodBC = blb.size;
					that.dat.lodF = T;
					that.chain();};})(this,this.dat.urlS));
				xhr.send();}},
	};
	return oo;
};