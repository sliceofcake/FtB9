// [!] In order for key events to be received by an element, that element must have a tabindex set. Least obtrusive would be -1.
moonlight.bin["54"] = function(){
	var oo = {
		nameInformalS : "Keyboard Interaction",
		importEO : {
			clkIdtS : {},
			rcvElm  : {},},
		exportEO : {
			edgF    : {},
			edgKeyS : {},
			edgResS : {},
			edgU    : {},
			edgZ    : {},
			staF    : {},
			staKeyS : {},
			staResS : {},
			staU    : {},
			staZ    : {},},
		dat : {
			rcvElm_PRV : U,
			//....
			keyFxn : function(that,evt,staF,staU){
				//if (evt.repeat){return;}
				var keyCdeE = µ.genKeyCdeEFxn(evt) ;
				var keyS    = keyCdeE.keyS         ;
				var resS    = keyCdeE.resS         ;
				if (evt.repeat === F){
					that.dat.edgKeyS = keyS                        ;
					that.dat.edgResS = resS                        ;
					that.dat.edgF    = staF                        ;
					that.dat.edgU    = staU                        ;
					that.dat.edgZ    = π.signalFlip(that.dat.edgZ) ;
					//ll("[M54] edge "+that.dat.edgKeyS+" "+that.dat.edgResS+" "+that.dat.edgF+" "+that.dat.edgU+" "+that.dat.edgZ);
					;}
				that.dat.staKeyS = keyS                        ;
				that.dat.staResS = resS                        ;
				that.dat.staF    = staF                        ;
				that.dat.staU    = staU                        ;
				that.dat.staZ    = π.signalFlip(that.dat.staZ) ;
				that.chain();},
			keyDwnWrpFxn : U, // Set later.
			keyUppWrpFxn : U, // Set later.
			rebindFxn : function(){
				// [!] Browser will block duplicates for us.
				if (nun(this.rcvElm_PRV)){
					this.rcvElm_PRV.removeEventListener("keydown",this.keyDwnWrpFxn,{passive:F});
					this.rcvElm_PRV.removeEventListener("keyup"  ,this.keyUppWrpFxn,{passive:F});}
				if (nun(this.rcvElm)){
					this.rcvElm.addEventListener("keydown",this.keyDwnWrpFxn,{passive:F});
					this.rcvElm.addEventListener("keyup"  ,this.keyUppWrpFxn,{passive:F});}
				this.rcvElm_PRV = this.rcvElm;},
		},
		ctr : function(){
			// removeEventListener needs the exact function instance in order to work, so we store it.
			this.dat.keyDwnWrpFxn = (function(that){return function(evt){var curT = (evt.timeStamp+performance.timeOrigin)/1000;var staU = π.clcClkCurU(that.dat.clkIdtS,curT);that.dat.keyFxn(that,evt,T,staU,that.dat);/*evt.preventDefault();*/};})(this);
			this.dat.keyUppWrpFxn = (function(that){return function(evt){var curT = (evt.timeStamp+performance.timeOrigin)/1000;var staU = π.clcClkCurU(that.dat.clkIdtS,curT);that.dat.keyFxn(that,evt,F,staU,that.dat);/*evt.preventDefault();*/};})(this);},
		import : function(){
			if (this.chk("rcvElm")){
				this.dat.rebindFxn();}},
	};
	return oo;
};