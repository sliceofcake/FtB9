moonlight.bin["45"] = function(){
	var oo = {
		nameInformalS : "Audio Object Source",
		importEO : {
			audBlb : {},},
		exportEO : {
			audM    : {},
			lenDltT : {},},
		dat : {},
		ctr : async function(){
			this.dat.audM;{
				this.dat.audM          = new Audio() ;
				this.dat.audM.autoplay = F           ;
				this.dat.audM.loop     = F           ;
				// The "duration" field is apparently unpopulated until some loading has happened.
				// "loadeddata" is a misnomer - it apparently means whenever the first chunk of data has been loaded.
				this.dat.audM.addEventListener("loadeddata",(function(that){return function(){
					that.dat.lenDltT = that.dat.audM.duration;
					that.chain();};})(this));}},
		import : function(){
			if (this.chk("audBlb")){
				this.dat.lenDltT = 0;
				var urlBlbS = URL.createObjectURL(this.dat.audBlb);
				this.dat.audM.pause();
				this.dat.audM.src = urlBlbS;
				this.dat.audM.load();
				this.chain();}},
	};
	return oo;
};