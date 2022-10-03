moonlight.bin["20"] = function(){
	var oo = {
		nameInformalS : "Resource To Data URL",
		importEO : {
			fileR : {cleanFxn : v=>v,},
		},
		exportEO : {
			fileDataUrlS : {eqFxn : (a,b)=>a===b},
			progressP    : {eqFxn : (a,b)=>a===b},
		},
		dat : {
			fileReader : new FileReader(),
			encodingS  : "UTF-8",
			fileR      : N,
		},
		ctr : async function(){
			this.dat.fileReader.onloadstart = ev=>{this.dat.progressP =                                           0;this.chain();};
			this.dat.fileReader.onprogress  = ev=>{this.dat.progressP = (ev.total === 0) ? 0 : ev.loaded / ev.total;this.chain();};
			this.dat.fileReader.onloadend   = ev=>{this.dat.progressP =                                           1;this.chain();};
			this.dat.fileReader.onload      = ev=>{this.dat.fileDataUrlS = ev.target.result;this.chain();ll(1);};
			this.dat.fileReader.onerror     = ev=>{this.dat.fileDataUrlS = ""              ;this.chain();};
			this.dat.fileReader.onabort     = ev=>{;};
		},
		import : function(prpSA=[]){
			if (π.vInA("fileR",prpSA)){
				if (this.dat.fileR === N){
					this.dat.fileDataUrlS = "";}
				else{
					if (this.dat.fileReader.readyState === 1){ // enum{EMPTY:0,LOADING:1,DONE:2}
						this.dat.fileReader.abort();}
					this.dat.fileReader.readAsDataURL(this.dat.fileR,this.dat.encodingS);}}},
	};
	return oo;
};