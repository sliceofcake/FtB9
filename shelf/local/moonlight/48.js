moonlight.bin["48"] = function(){
	var oo = {
		nameInformalS : "URL To Text",
		importEO : {
			urlS    : {cleanFxn : v=>v,},
			gvpDltT : {cleanFxn : v=>v,},},
		exportEO : {
			datS : {eqFxn : (a,b)=>a===b,},},
		dat : {
			datS    : U ,
			gvpDltT : U ,
			urlS    : U ,},
		ctr : async function(){
			this.dat.xhr = new XMLHttpRequest();
			this.dat.xhr.overrideMimeType("text/plain");
			this.dat.xhr.ontimeout = (function(that){return function(evt){
				that.dat.datS = U;
				that.chain();};})(this);
			this.dat.xhr.onreadystatechange = (function(that){return function(evt){
				if (this.readyState === 4){
					if (this.status === 200){
						that.dat.datS = this.responseText;
						that.chain();}
					else{
						that.dat.datS = U;
						that.chain();}}};})(this);
		},
		import : function(){
			if (this.chk("gvpDltT")){
				// !!! Is this value actually respected if set for an in-progress communication?
				this.dat.xhr.timeout = this.dat.gvpDltT * 1000;}
			if (this.chk("urlS")){
				// readyState | Source : [https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState].
				// 0 : UNSENT           - Client has been created. open() not called yet.
				// 1 : OPENED           - open() has been called.
				// 2 : HEADERS_RECEIVED - send() has been called, and headers and status are available.
				// 3 : LOADING          - Downloading; responseText holds partial data.
				// 4 : DONE             - No description.
				// !!! Does an abort while in state:1 actually do anything and is it actually necessary?
				if (1 <= this.dat.xhr.readyState && this.dat.xhr.readyState <= 3){
					this.dat.xhr.abort();}
				this.dat.xhr.open("GET",this.dat.urlS,T); // Third slot is async flag.
				this.dat.xhr.send();}},
	};
	return oo;
};