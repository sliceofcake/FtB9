moonlight.bin["1"] = function(){
	var oo = {
		nameInformalS : "Micromanaged Audio",
		importEO : {
			intentionPlayingF : {cleanFxn : v=>flg(v),},
			leewayN           : {cleanFxn : v=>π.rangeRestrict(num(v,0),0,U),},
			loopF             : {cleanFxn : v=>flg(v),},
			playbackRateN     : {cleanFxn : v=>num(v,0),},
			syncSignal        : {cleanFxn : v=>v,},
			tAnchorAudio      : {cleanFxn : v=>int(v,0),},
			tAnchorGlobal     : {cleanFxn : v=>int(v,0),},
			urlS              : {cleanFxn : v=>v,},
			volumeN           : {cleanFxn : v=>π.rangeRestrict(num(v,0),0,1),},
		},
		exportEO : {
			intentionPlayingF   : {eqFxn : (a,b)=>a===b,},
			stateReportedAudioF : {eqFxn : (a,b)=>a===b,},
			leewayN             : {eqFxn : (a,b)=>a===b,},
			loopF               : {eqFxn : (a,b)=>a===b,},
			playbackRateN       : {eqFxn : (a,b)=>a===b,},
			tAnchorAudio        : {eqFxn : (a,b)=>a===b,},
			tAnchorGlobal       : {eqFxn : (a,b)=>a===b,},
			tReportedAudioN     : {eqFxn : (a,b)=>a===b,},
			tMaxAudioN          : {eqFxn : (a,b)=>a===b,},
			urlS                : {eqFxn : (a,b)=>a===b,},
			volumeN             : {eqFxn : (a,b)=>a===b,},
		},
		dat : {
			t                   :      0,
			intentionPlayingF   : F     ,
			stateReportedAudioF : F     ,
			leewayN             : 100000,
			loopF               : F     ,
			playbackRateN       :      1,
			syncSignal          : N     ,
			tAnchorAudio        : U     ,
			tAnchorGlobal       : U     ,
			tReportedAudioN     :      0,
			tMaxAudioN          :      0,
			urlS                : ""    ,
			volumeN             :      1,
			audio               : N     ,
			
			seekStrictFxn : function(){
				if (!this.calcIsAudioStableF()){return;} // fail-fast : not yet stable
				this.audio.currentTime = this.t/1000000;
				this.restrictRangeTFxn();},
			seekLenientFxn : function(){
				if (!this.calcIsAudioStableF()){return;} // fail-fast : not yet stable
				if (Math.abs(this.audio.currentTime - this.t/1000000) <= this.leewayN/1000000){return;} // fail-fast : close enough
				this.seekStrictFxn();},
			restrictRangeTFxn : function(){
				if (!this.calcIsAudioStableF()){return;} // fail-fast : not yet stable
				if      (this.calcIsBeforeF()){this.audio.pause();this.audio.currentTime =                   0;this.t = this.audio.currentTime*1000000;}
				else if (this.calcIsBeyondF()){this.audio.pause();this.audio.currentTime = this.audio.duration;this.t = this.audio.currentTime*1000000;}},
			
			calcIsAudioStableF : function(){
				return !Number.isNaN(this.audio.duration);
				return (this.audio.readyState >= 4);},
			calcHeadT : function(){
				if (!this.calcIsAudioStableF()){return 0;}
				return 0 * 1000000;},
			calcCurrT : function(){
				if (!this.calcIsAudioStableF()){return 0;}
				return this.audio.currentTime * 1000000;},
			calcTailT : function(){
				if (!this.calcIsAudioStableF()){return 0;}
				return this.audio.duration * 1000000;},
			calcIsBeforeF : function(){
				return (this.t < this.calcHeadT());},
			calcIsBeyondF : function(){
				return (this.t > this.calcTailT());},
		},
		ctr   :function(){
			this.dat.audio = new Audio();
			this.dat.audio.addEventListener("canplaythrough",e=>{});
			this.dat.audio.addEventListener("ratechange"    ,e=>{});
			this.dat.audio.addEventListener("ended"         ,e=>{});
		},
		import:function(prpSA=[]){
			this.dat.t = ((this.dat.tAnchorAudio === U || this.dat.tAnchorGlobal === U) ? (0) : (this.dat.tAnchorAudio + (π.now() - this.dat.tAnchorGlobal)));
			
			var seekIntentionNEnum = {"none":0,"lenient":1,"strict":2};
			var seekIntentionN     = seekIntentionNEnum.none;
			
			if (π.vInA("urlS",prpSA)){
				this.dat.audio.pause();
				this.dat.audio.src = this.dat.urlS;
				this.dat.audio.load();}
			
			if (π.vInA("tAnchorAudio",prpSA) || π.vInA("tAnchorGlobal",prpSA) || π.vInA("leeway",prpSA)){
				if (seekIntentionN < seekIntentionNEnum.lenient){
					seekIntentionN = seekIntentionNEnum.lenient;}}
			
			if (π.vInA("syncSignal",prpSA)){
				if (seekIntentionN < seekIntentionNEnum.strict){
					seekIntentionN = seekIntentionNEnum.strict;}}
			
			// on src swap, params get reset
			if (π.vInA("urlS",prpSA) || π.vInA("playbackRateN",prpSA)){
				this.dat.audio.playbackRate        = this.dat.playbackRateN;
				this.dat.audio.defaultPlaybackRate = this.dat.playbackRateN;}
			if (π.vInA("urlS",prpSA) || π.vInA("volumeN",prpSA)){
				this.dat.audio.volume = this.dat.volumeN;}
			if (π.vInA("urlS",prpSA) || π.vInA("loopF",prpSA)){
				this.dat.audio.loop = this.dat.loopF;}
			
			// always attempt to assert this
			if (this.dat.intentionPlayingF){
				if (this.dat.audio.paused && this.dat.audio.readyState >= 4 && !this.dat.calcIsBeforeF() && !this.dat.calcIsBeyondF()){
					this.dat.audio.play();}}
			else{
				if (!this.dat.audio.paused){
					this.dat.audio.pause();}}
			
			this.dat.stateReportedAudioF = !this.dat.audio.paused;
			
			// tick
			if (this.dat.intentionPlayingF){
				if (seekIntentionN < seekIntentionNEnum.lenient){
					seekIntentionN = seekIntentionNEnum.lenient;}}
			if (this.dat.calcIsAudioStableF()){
				this.dat.tReportedAudioN = int(this.dat.calcCurrT());
				this.dat.tMaxAudioN      = int(this.dat.calcTailT());}
			
			// assert intention
			switch (seekIntentionN){default:;
				break;case seekIntentionNEnum.strict  : this.dat.seekStrictFxn ();
				break;case seekIntentionNEnum.lenient : this.dat.seekLenientFxn();
				break;case seekIntentionNEnum.none    :                          ;}
		},
	};
	return oo;
};
