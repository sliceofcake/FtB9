moonlight.bin["16"] = function(){
	var oo = {
		nameInformalS : "URL To Resource & Data",
		importEO : {
			fileUrlS    : {cleanFxn : v=>v,},
			rawF        : {cleanFxn : v=>v,},
			timeoutDltT : {cleanFxn : v=>v,},
		},
		exportEO : {
			fileR     : {eqFxn : (a,b)=>a===b},
			fileTxtS  : {eqFxn : (a,b)=>a===b},
			progressP : {eqFxn : (a,b)=>a===b},
		},
		dat : {
			xhr         : N           ,
			fileR       : N           ,
			fileTxtS    : U           ,
			fileTypeS   : "text/plain",
			progressP   :            0,
			rawF        : F           , // Whether to parse as ASCII Bytes, otherwise the browser will do some squishy stuff and probably decide on UTF-8.
			timeoutDltT :     60000000,
		},
		ctr : async function(){
			this.dat.xhr = new XMLHttpRequest();
			this.dat.xhr.timeout = this.dat.timeoutDltT / 1000;
			this.dat.xhr.ontimeout = function(){};
			this.dat.xhr.upload.addEventListener("progress",(function(that){return function(ev){
				that.dat.progressP = (ev.total === 0) ? 0 : ev.loaded / ev.total;};})(this));
			this.dat.xhr.onreadystatechange = (function(that){return function(ev){
				if (this.readyState === 4){
					if (this.status === 200){
						that.dat.fileR    = new Blob([this.responseText],{type:that.dat.fileTypeS});
						that.dat.fileTxtS = this.responseText;
						//ll(this.responseText);
						//ll("M16 Bit Helper2 : "+(this.responseText.charCodeAt(0) & 0xFF));
						//ll(this.responseText.split("").map(s=>s.charCodeAt(0) & 0xFF));
						that.chain();}
					else{
						that.dat.fileR    = N;
						that.dat.fileTxtS = U;
						that.chain();}}};})(this);
		},
		import : function(prpSA=[]){
			if (π.vInA("rawF",prpSA)){
				this.dat.fileTypeS = this.dat.rawF ? "text/plain; charset=x-user-defined" : "text/plain";
				this.dat.xhr.overrideMimeType(this.dat.fileTypeS);}
			if (π.vInA("fileUrlS",prpSA) && isS(this.dat.fileUrlS)){
				// readyState
				// 0 : UNSENT           - Client has been created. open() not called yet.
				// 1 : OPENED           - open() has been called.
				// 2 : HEADERS_RECEIVED - send() has been called, and headers and status are available.
				// 3 : LOADING          - Downloading; responseText holds partial data.
				// 4 : DONE             - No description.
				if (1 <= this.dat.xhr.readyState && this.dat.xhr.readyState <= 3){
					this.dat.xhr.abort();}
				this.dat.xhr.open("GET",this.dat.fileUrlS,T);
				this.dat.xhr.send();}},
	};
	return oo;
};