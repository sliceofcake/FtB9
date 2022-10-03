// [https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement]
moonlight.bin["44"] = function(){
	var oo = {
		nameInformalS : "Audio Time Controller",
		importEO : {
			audM       : {},
			clkIdtS    : {},
			errStbDltT : {}, // !!! Cut this variable out of this chip. It's not worth bending over backwards just to solve half of a horrible browser bug.
			lwyDltT    : {},
			nteAltDltT : {},
			posFrcZ    : {},
			tmeAltZ    : {},},
		exportEO : {},
		dat : {
			altT : U ,
			//....
			clcCurU : function(clkIdtS){
				var curU = π.clcClkCurU(clkIdtS);if (curU === U){return U;}
				if (this.nteAltDltT === U){return U;}
				return curU + this.nteAltDltT;},},
		ctr : async function(){;},
		import : function(){
			var curU = this.dat.clcCurU(this.dat.clkIdtS);if (curU === U){return;}
			//
			if (this.chk("audM")){
				//this.dat.audM.addEventListener("pause"     ,(function(that){return function(){;};})(this));
				//this.dat.audM.addEventListener("play"      ,(function(that){return function(){;};})(this));
				//this.dat.audM.addEventListener("ratechange",(function(that){return function(){;};})(this));
				;}
			// Respond to signal.
			if ((this.chk("posFrcZ"))
			&&  (nun(this.dat.audM) && nun(this.dat.clkIdtS))){
				this.dat.audM.currentTime = curU;}
			
			// Respond to a force signal.
			if (this.chg("tmeAltZ")){
				this.dat.audM.currentTime = curU + (-1 * this.dat.errStbDltT);
				this.dat.altT = π.clcCurT();}
			
			this.tick();},
		tickDltT : 0.1,
		tick : function(curT){
			if (!nun(this.dat.audM)){return;}
			if (this.dat.audM.src === ""){return;}
			if (!nun(this.dat.clkIdtS)){return;}
			if (!nun(this.dat.lwyDltT)){return;}
			
			//llc(0,"t:"+this.dat.audM.currentTime);
			
			var curU = this.dat.clcCurU(this.dat.clkIdtS,curT);if (curU === U){return;}
			//curU += -1 * this.dat.errStbDltT;
			
			// Pre-gate for "intro".
			if (curU < 0){
				this.dat.audM.pause();
				this.dat.audM.currentTime = 0;
				return;}
			
			// Post-gate for "beyond end".
			if (curU > this.dat.audM.duration){
				this.dat.audM.pause();
				this.dat.audM.currentTime = this.dat.audM.duration;
				return;}
			
			var errT = this.dat.audM.currentTime - curU;
			//ll("[M44] errT : "+str(errT));
			var velN = π.clcClkVelN(this.dat.clkIdtS);if (velN === U){return;}
			//llc(0.15,"audio error : "+errT+" | velN:"+velN);
			// Assert velocity.
			this.dat.audM.playbackRate = velN;
			//var pbrN;
			//if      (Math.abs(errT) > 0.020 && errT > 0){pbrN = this.dat.audM.playbackRate - (0.5 * (π.rangeRestrict(Math.abs(errT),0,0.100)/0.100));}
			//else if (Math.abs(errT) > 0.020 && errT < 0){pbrN = this.dat.audM.playbackRate + (0.5 * (π.rangeRestrict(Math.abs(errT),0,0.100)/0.100));}
			//else{pbrN = this.dat.audM.playbackRate;}
			//this.dat.audM.playbackRate = π.rangeRestrict(pbrN,0.25,4); // being nice to the JS error thrower, which inexplicably caps rates like so.
			//ll(this.dat.audM.playbackRate);
			if (velN === 0){
				this.dat.audM.pause();
				this.dat.audM.currentTime = curU;}
			else{
				if (this.dat.audM.paused && (0 <= curU && curU < this.dat.audM.duration)){
					this.dat.audM.currentTime = curU + (-1 * this.dat.errStbDltT);
					this.dat.altT = π.clcCurT();
					// [!] Until you click somewhere on the page, Chrome won't allow audio, and emits this message that we block here with .catch().
					this.dat.audM.play().catch(errM=>{});}
				// Respond to desync.
				// Dead range (HTML5 audio [Chrome] browser bug).
				// [!] But then I read this again, and I don't like it. Poof!
				//if ((this.dat.altT !== U) && (π.clcCurT() - this.dat.altT < 3)){
				//	;}
				//else
				if (Math.abs(errT) > this.dat.lwyDltT){
					llw("audio error : "+errT+" = .currentTime:"+this.dat.audM.currentTime+" - curU:"+curU);
					this.dat.audM.currentTime = curU + (-1 * this.dat.errStbDltT);
					this.dat.altT = π.clcCurT();
					;}
				;}
			
			//// Assert playingness.
			//if (this.dat.audM.paused && (0 <= curU && curU < this.dat.audM.duration)){
			//	// [!] Until you click somewhere on the page, Chrome won't allow audio, and emits this message that we block here with .catch().
			//	this.dat.audM.play().catch(errM=>{});}
			;},
	};
	return oo;
};