// !!! This really shouldn't exist.
// It's truly just a bunch of smaller S to Z conversion chips.
moonlight.bin["87"] = function(){
	var oo = {
		nameInformalS : "Key Binding Trigger Handler",
		importEO : {
			keyPauS       : {},
			keyPlyS       : {},
			keyS          : {},
			keyScrBarDecS : {},
			keyScrBarIncS : {},
			keyScrSnpDecS : {},
			keyScrSnpIncS : {},
			keySnpDecS    : {},
			keySnpIncS    : {},
			resS          : {},
			staF          : {},
			staU          : {},
			trgZ          : {},
			
			keyCpsHghS    : {},
			keyCpsLowS    : {},
			keyVelScrIncS : {},
			keyVelScrDecS : {},
			keyVelClkIncS : {},
			keyVelClkDecS : {},
			keyVlmIncS    : {},
			keyVlmDecS    : {},
			
			keyCpsBpmHghS    : {},
			keyCpsBpmLowS    : {},
			keyCpsBpmIncS    : {},
			keyCpsBpmDecS    : {},
			keyCpsBpmIncBigS : {},
			keyCpsBpmDecBigS : {},
			
			keyScrHedS   : {},
			keyScrTalS   : {},
			keyScrMrkS_0 : {},
			keyScrMrkS_1 : {},
			keyScrMrkS_2 : {},
			keyScrMrkS_3 : {},
			keyScrMrkS_4 : {},
			keyScrMrkS_5 : {},
			keyScrMrkS_6 : {},
			keyScrMrkS_7 : {},
			keyScrMrkS_8 : {},
			keyScrMrkS_9 : {},
			
			},
		exportEO : {
			pauZ       : {},
			plyZ       : {},
			scrBarDecZ : {},
			scrBarIncZ : {},
			scrSnpDecZ : {},
			scrSnpIncZ : {},
			snpDecZ    : {},
			snpIncZ    : {},
			
			cpsHghZ    : {},
			cpsLowZ    : {},
			velScrIncZ : {},
			velScrDecZ : {},
			velClkIncZ : {},
			velClkDecZ : {},
			vlmIncZ    : {},
			vlmDecZ    : {},
			
			cpsBpmHghZ    : {},
			cpsBpmLowZ    : {},
			cpsBpmIncZ    : {},
			cpsBpmDecZ    : {},
			cpsBpmIncBigZ : {},
			cpsBpmDecBigZ : {},
			
			scrHedZ   : {},
			scrTalZ   : {},
			scrMrkZ_0 : {},
			scrMrkZ_1 : {},
			scrMrkZ_2 : {},
			scrMrkZ_3 : {},
			scrMrkZ_4 : {},
			scrMrkZ_5 : {},
			scrMrkZ_6 : {},
			scrMrkZ_7 : {},
			scrMrkZ_8 : {},
			scrMrkZ_9 : {},
			
			},
		dat : {},
		import : function(){
			if (!this.chg("trgZ")){return;}
			//....
			if (this.dat.staF === T){
				//ll(this.dat.keyS);
				var resWrpS = "(" + this.dat.resS + ")";
				// [!] Must process each line independently in case there are multiple functions bound to a single key.
				if (this.dat.keyS === this.dat.keyPauS          || resWrpS === this.dat.keyPauS         ){this.dat.pauZ          = ??.signalFlip(this.dat.pauZ         );}
				if (this.dat.keyS === this.dat.keyPlyS          || resWrpS === this.dat.keyPlyS         ){this.dat.plyZ          = ??.signalFlip(this.dat.plyZ         );}
				if (this.dat.keyS === this.dat.keyScrBarDecS    || resWrpS === this.dat.keyScrBarDecS   ){this.dat.scrBarDecZ    = ??.signalFlip(this.dat.scrBarDecZ   );}
				if (this.dat.keyS === this.dat.keyScrBarIncS    || resWrpS === this.dat.keyScrBarIncS   ){this.dat.scrBarIncZ    = ??.signalFlip(this.dat.scrBarIncZ   );}
				if (this.dat.keyS === this.dat.keyScrSnpDecS    || resWrpS === this.dat.keyScrSnpDecS   ){this.dat.scrSnpDecZ    = ??.signalFlip(this.dat.scrSnpDecZ   );}
				if (this.dat.keyS === this.dat.keyScrSnpIncS    || resWrpS === this.dat.keyScrSnpIncS   ){this.dat.scrSnpIncZ    = ??.signalFlip(this.dat.scrSnpIncZ   );}
				if (this.dat.keyS === this.dat.keySnpDecS       || resWrpS === this.dat.keySnpDecS      ){this.dat.snpDecZ       = ??.signalFlip(this.dat.snpDecZ      );}
				if (this.dat.keyS === this.dat.keySnpIncS       || resWrpS === this.dat.keySnpIncS      ){this.dat.snpIncZ       = ??.signalFlip(this.dat.snpIncZ      );}
				if (this.dat.keyS === this.dat.keyCpsHghS       || resWrpS === this.dat.keyCpsHghS      ){this.dat.cpsHghZ       = ??.signalFlip(this.dat.cpsHghZ      );}
				if (this.dat.keyS === this.dat.keyCpsLowS       || resWrpS === this.dat.keyCpsLowS      ){this.dat.cpsLowZ       = ??.signalFlip(this.dat.cpsLowZ      );}
				if (this.dat.keyS === this.dat.keyVelScrIncS    || resWrpS === this.dat.keyVelScrIncS   ){this.dat.velScrIncZ    = ??.signalFlip(this.dat.velScrIncZ   );}
				if (this.dat.keyS === this.dat.keyVelScrDecS    || resWrpS === this.dat.keyVelScrDecS   ){this.dat.velScrDecZ    = ??.signalFlip(this.dat.velScrDecZ   );}
				if (this.dat.keyS === this.dat.keyVelClkIncS    || resWrpS === this.dat.keyVelClkIncS   ){this.dat.velClkIncZ    = ??.signalFlip(this.dat.velClkIncZ   );}
				if (this.dat.keyS === this.dat.keyVelClkDecS    || resWrpS === this.dat.keyVelClkDecS   ){this.dat.velClkDecZ    = ??.signalFlip(this.dat.velClkDecZ   );}
				if (this.dat.keyS === this.dat.keyVlmIncS       || resWrpS === this.dat.keyVlmIncS      ){this.dat.vlmIncZ       = ??.signalFlip(this.dat.vlmIncZ      );}
				if (this.dat.keyS === this.dat.keyVlmDecS       || resWrpS === this.dat.keyVlmDecS      ){this.dat.vlmDecZ       = ??.signalFlip(this.dat.vlmDecZ      );}
				
				if (this.dat.keyS === this.dat.keyCpsBpmHghS    || resWrpS === this.dat.keyCpsBpmHghS   ){this.dat.cpsBpmHghZ    = ??.signalFlip(this.dat.cpsBpmHghZ   );}
				if (this.dat.keyS === this.dat.keyCpsBpmLowS    || resWrpS === this.dat.keyCpsBpmLowS   ){this.dat.cpsBpmLowZ    = ??.signalFlip(this.dat.cpsBpmLowZ   );}
				if (this.dat.keyS === this.dat.keyCpsBpmIncS    || resWrpS === this.dat.keyCpsBpmIncS   ){this.dat.cpsBpmIncZ    = ??.signalFlip(this.dat.cpsBpmIncZ   );}
				if (this.dat.keyS === this.dat.keyCpsBpmDecS    || resWrpS === this.dat.keyCpsBpmDecS   ){this.dat.cpsBpmDecZ    = ??.signalFlip(this.dat.cpsBpmDecZ   );}
				if (this.dat.keyS === this.dat.keyCpsBpmIncBigS || resWrpS === this.dat.keyCpsBpmIncBigS){this.dat.cpsBpmIncBigZ = ??.signalFlip(this.dat.cpsBpmIncBigZ);}
				if (this.dat.keyS === this.dat.keyCpsBpmDecBigS || resWrpS === this.dat.keyCpsBpmDecBigS){this.dat.cpsBpmDecBigZ = ??.signalFlip(this.dat.cpsBpmDecBigZ);}
				
				if (this.dat.keyS === this.dat.keyScrHedS       || resWrpS === this.dat.keyScrHedS      ){this.dat.scrHedZ       = ??.signalFlip(this.dat.scrHedZ      );}
				if (this.dat.keyS === this.dat.keyScrTalS       || resWrpS === this.dat.keyScrTalS      ){this.dat.scrTalZ       = ??.signalFlip(this.dat.scrTalZ      );}
				if (this.dat.keyS === this.dat.keyScrMrkS_0     || resWrpS === this.dat.keyScrMrkS_0    ){this.dat.scrMrkZ_0     = ??.signalFlip(this.dat.scrMrkZ_0    );}
				if (this.dat.keyS === this.dat.keyScrMrkS_1     || resWrpS === this.dat.keyScrMrkS_1    ){this.dat.scrMrkZ_1     = ??.signalFlip(this.dat.scrMrkZ_1    );}
				if (this.dat.keyS === this.dat.keyScrMrkS_2     || resWrpS === this.dat.keyScrMrkS_2    ){this.dat.scrMrkZ_2     = ??.signalFlip(this.dat.scrMrkZ_2    );}
				if (this.dat.keyS === this.dat.keyScrMrkS_3     || resWrpS === this.dat.keyScrMrkS_3    ){this.dat.scrMrkZ_3     = ??.signalFlip(this.dat.scrMrkZ_3    );}
				if (this.dat.keyS === this.dat.keyScrMrkS_4     || resWrpS === this.dat.keyScrMrkS_4    ){this.dat.scrMrkZ_4     = ??.signalFlip(this.dat.scrMrkZ_4    );}
				if (this.dat.keyS === this.dat.keyScrMrkS_5     || resWrpS === this.dat.keyScrMrkS_5    ){this.dat.scrMrkZ_5     = ??.signalFlip(this.dat.scrMrkZ_5    );}
				if (this.dat.keyS === this.dat.keyScrMrkS_6     || resWrpS === this.dat.keyScrMrkS_6    ){this.dat.scrMrkZ_6     = ??.signalFlip(this.dat.scrMrkZ_6    );}
				if (this.dat.keyS === this.dat.keyScrMrkS_7     || resWrpS === this.dat.keyScrMrkS_7    ){this.dat.scrMrkZ_7     = ??.signalFlip(this.dat.scrMrkZ_7    );}
				if (this.dat.keyS === this.dat.keyScrMrkS_8     || resWrpS === this.dat.keyScrMrkS_8    ){this.dat.scrMrkZ_8     = ??.signalFlip(this.dat.scrMrkZ_8    );}
				if (this.dat.keyS === this.dat.keyScrMrkS_9     || resWrpS === this.dat.keyScrMrkS_9    ){this.dat.scrMrkZ_9     = ??.signalFlip(this.dat.scrMrkZ_9    );}
				
				;}
			;},
	};
	return oo;};