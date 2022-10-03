moonlight.bin["39"] = function(){
	var oo = {
		nameInformalS : "Grame Frame Lane Internal",
		importEO : {
			clkIdtS       : {},
			hitErrDltMaxT : {},
			nteEA         : {},
			tmeDrgEA      : {trgF : F,},
			trgZ_tmeDrgEA : {trgF : F,},},
		exportEO : {
			nteAltEA      : {},
			scrCurMaxN    : {},
			scrN          : {},
			trgZ_nteAltEA : {},},
		dat : {
			clkIdtS       : U  ,
			hitErrDltMaxT :  0 ,
			nteEA         : [] , // Discouraged from using this besides immediately cc()ing it into nteAltEA.
			nteAltEA      : [] , // Altered copy of nteEA with per-row additions.
			scrCurMaxN    :  0 ,
			scrN          :  0 ,
			tmeDrgEA      : [] ,
			trgZ_nteAltEA : U  ,
			trgZ_tmeDrgEA : U  ,
			//....
			clcScrNteNFxn : function(nteHedU,actHedU,pclN_0){
				var dltU = Math.abs(nteHedU - actHedU);
				if (dltU > this.hitErrDltMaxT){return 0;}
				
				// Cosine method. Brutal.
				//return Math.cos(dltU * ((Math.PI / 2) / this.hitErrDltMaxT));
				
				// Cubic method. More-forgiving.
				//return 1 - (pclN_0 * Math.pow(dltU,3));
				
				// Baby method. Ehh? Seriously? Easy mode?
				return 1;
				
				;},
			},
		ctr : async function(){;},
		import : function(){
			if (this.chg("nteEA")){
				this.dat.nteAltEA = π.cc(this.dat.nteEA);}
			
			if (this.chk("clkIdtS"      )
			||  this.chk("hitErrDltMaxT")
			||  this.chk("nteEA"        )
			||  this.chk("tmeDrgEA"     )
			||  this.chk("trgZ_tmeDrgEA")){
				; // We used to calculate score here before realizing that this only needs to be done visually per-frame, at least for now.
				;}
			;},
		drawFrame : function(curT){
			
			// !!! HERE - Consider adding a time-stop cycle limiter here, like M38 uses in its drawFrame() function.
			;
			
			if (this.dat.clkIdtS !== U){
				
				// curU is squishily used to give an indication of progressive points during a hold note.
				var curU = π.clcClkCurU(this.dat.clkIdtS,curT);
				
				// Reset in preparation for stateless scoring calculation.
				this.dat.nteAltEA.forEach(nteAltE=>{
					nteAltE.trgHedF = F;});
				this.dat.scrN = 0;
				var pclN_0 = (1 / Math.pow(this.dat.hitErrDltMaxT,3)); // Pre-calculated value used heavily by the score calculation function.
				
				// Parallel monkey-bar approach.
				// Hit-part note calculation.
				for (var tmeDrgEAI = 0,nteAltEAI = 0,tmeDrgEAC = this.dat.tmeDrgEA.length,nteAltEAC = this.dat.nteAltEA.length; tmeDrgEAI < tmeDrgEAC && nteAltEAI < nteAltEAC;){
					var tmeDrgE = this.dat.tmeDrgEA[tmeDrgEAI];
					var tmeDrgAltE = {hedU:tmeDrgE.hedU,talU:tmeDrgE.talU!==U?tmeDrgE.talU:curU};
					var nteAltE = this.dat.nteAltEA[nteAltEAI];
					// If drag is before note, increment drag pointer and continue.
					if (tmeDrgAltE.talU < nteAltE.hedU - this.dat.hitErrDltMaxT){
						tmeDrgEAI++;
						continue;}
					// If drag is after note, increment note pointer and continue.
					else if (tmeDrgAltE.hedU > nteAltE.talU + this.dat.hitErrDltMaxT){
						nteAltEAI++;
						continue;}
					// If drag is during note, give points and increment drag pointer and continue (multiple drags can apply to a sufficiently long hold note).
					else{
						// If signal high edge is near note head, give note head points and mark the head of note as triggered.
						if (nteAltE.trgHedF === F && nteAltE.hedU - this.dat.hitErrDltMaxT <= tmeDrgAltE.hedU && tmeDrgAltE.hedU <= nteAltE.hedU + this.dat.hitErrDltMaxT){
							var scrNteN = this.dat.clcScrNteNFxn(nteAltE.hedU,tmeDrgAltE.hedU,pclN_0);
							this.dat.scrN += scrNteN;
							nteAltE.trgHedF = T;}
						tmeDrgEAI++;
						continue;}
					lle("can't happen");
					break;}
				// Trickle-part note calculation.
				// The is a separate block in order to ensure that the [[[hitErrDltMaxT]]] difference between hit-part and trickle-part doesn't lead to calculation inaccuravies.
				for (var tmeDrgEAI = 0,nteAltEAI = 0,tmeDrgEAC = this.dat.tmeDrgEA.length,nteAltEAC = this.dat.nteAltEA.length; tmeDrgEAI < tmeDrgEAC && nteAltEAI < nteAltEAC;){
					var tmeDrgE = this.dat.tmeDrgEA[tmeDrgEAI];
					var tmeDrgAltE = {hedU:tmeDrgE.hedU,talU:tmeDrgE.talU!==U?tmeDrgE.talU:curU};
					var nteAltE = this.dat.nteAltEA[nteAltEAI];
					var nteAltE_talAltE = nteAltE.talU - this.dat.hitErrDltMaxT;if (nteAltE_talAltE < nteAltE.hedU){nteAltE_talAltE = nteAltE.hedU;} // The altered tail, allowing the player to let go early without score penalty.
					// If drag is before note, increment drag pointer and continue.
					if (tmeDrgAltE.talU < nteAltE.hedU){
						tmeDrgEAI++;
						continue;}
					// If drag is after note, increment note pointer and continue.
					else if (tmeDrgAltE.hedU > nteAltE_talAltE){
						nteAltEAI++;
						continue;}
					// If drag is during note, give points and increment drag pointer and continue (multiple drags can apply to a sufficiently long hold note).
					else{
						// If signal is high for any duration of note body, give trickle points. (trickle deliberately ignores this.dat.hitErrDltMaxT)
						if (tmeDrgAltE.hedU < nteAltE_talAltE && tmeDrgAltE.talU > nteAltE.hedU){
							var scrNteN = Math.min(tmeDrgAltE.talU,nteAltE_talAltE) - Math.max(tmeDrgAltE.hedU,nteAltE.hedU);
							// Score can be negative because the area near the tail is omitted.
							if (scrNteN >= 0){
								this.dat.scrN += scrNteN;}}
						// Uncertain logic to allow a single drag to count toward multiple hold notes, but also allow a single hold note to have multiple drags count toward it.
						if (tmeDrgAltE.talU > nteAltE_talAltE){
							nteAltEAI++;}
						else{
							tmeDrgEAI++;}
						continue;}
					lle("can't happen");
					break;}
				
				// Naive approach.
				//this.dat.tmeDrgEA.forEach(tmeDrgE=>{
				//	this.dat.nteAltEA.forEach(nteAltE=>{
				//		// If signal high edge is near note head, give note head points and mark the head of note as triggered.
				//		if (nteAltE.trgHedF === F && nteAltE.hedU - this.dat.hitErrDltMaxT <= tmeDrgE.hedU && tmeDrgE.hedU <= nteAltE.hedU + this.dat.hitErrDltMaxT){
				//			var scrNteN = this.dat.clcScrNteNFxn(nteAltE.hedU,tmeDrgE.hedU);
				//			this.dat.scrN += scrNteN;
				//			nteAltE.trgHedF = T;}
				//		// If signal is high for any duration of note body, give trickle points.
				//		if (tmeDrgE.hedU < nteAltE.talU && ((tmeDrgE.talU === U && curU > nteAltE.hedU) || tmeDrgE.talU > nteAltE.hedU)){
				//			var scrNteN = ((tmeDrgE.talU === U) ? (curU) : (Math.min(tmeDrgE.talU,nteAltE.talU))) - Math.max(tmeDrgE.hedU,nteAltE.hedU);
				//			this.dat.scrN += scrNteN;}
				//		;});
				//	//curU;
				//	//tmeDrgE.hedU;
				//	//tmeDrgE.talU;
				//	//nteAltE.hedU;
				//	//nteAltE.talU;
				//	//this.dat.hitErrDltMaxT;
				//	});
				
				
				
				// Calculate current maximum score at this point in time.
				this.dat.scrCurMaxN = 0;
				this.dat.nteAltEA.forEach(nteAltE=>{
					var nteAltE_talAltE = nteAltE.talU - this.dat.hitErrDltMaxT;if (nteAltE_talAltE < nteAltE.hedU){nteAltE_talAltE = nteAltE.hedU;} // The altered tail, allowing the player to let go early without score penalty.
					// Hit-part note calculation.
					// If note has been triggered or if hit-part has passed
					if ((nteAltE.trgHedF === T) || (curU > nteAltE.hedU + this.dat.hitErrDltMaxT)){
						// Give perfect hit-part score.
						var scrNteN = this.dat.clcScrNteNFxn(nteAltE.hedU,nteAltE.hedU,pclN_0);
						this.dat.scrCurMaxN += scrNteN;}
					// Trickle-part note calculation.
					// If trickle-part is within range,
					if (curU >= nteAltE.hedU){
						// Give incremental trickle-part score.
						var scrNteN = Math.min(curU,nteAltE_talAltE) - nteAltE.hedU;
						this.dat.scrCurMaxN += scrNteN;}});
				
				
				
				// !!! HERE - how to only trigger if change was made, when we reset per frame...
				//            L> worth it?
				this.dat.trgZ_nteAltEA = π.signalFlip(this.dat.trgZ_nteAltEA);
				//ll("score:" + this.dat.scrN);
				this.chain();
				;}
			;},
	};
	return oo;
};



//// This code was just sort of left here...
//// It looks like it was written before its chip's IO was spec'ed.
//// It'll probably be useful in the future, but right now it's just gibberish.
//moonlight.bin["39"] = function(){
//	var oo = {
//		nameInformalS : "Grame Frame Lane Internal",
//		importEO : {
//			keyF          : {}, // Key Flag.
//			keyFT         : {}, // Key Flag Timestamp.
//			keyFZ         : {}, // Key Flag Signal.
//			nteBseEA      : {}, // Note Base Entity Array.
//			nteBseEAZ     : {}, // Note Base Entity Array Signal.
//			tmeCurN       : {}, // Time Current Number.
//			tmeDltMagMaxN : {}, // Time Delta Magnitude Maximum Number.
//			},
//		exportEO : {
//			nteEA : {eqFxn : (a,b,dat)=>dat.nteEAZ,}, // Note Entity Array.
//			},
//		dat : {
//			nteBseEA  : [] , // Note Base Entity Array.
//			nteBseEAZ : U  , // Note Base Entity Array Signal.
//			keyF      : U  , // Key Flag.
//			keyFT     : U  , // Key Flag Timestamp.
//			keyFZ     : U  , // Key Flag Signal.
//			tmeCurN   : U  , // Time Current Number.
//			//...............//
//			//...............//
//			nteEA     : [] , // Note Entity Array.
//			nteEAZ    : U  , // Note Entity Array Signal.
//			},
//		ctr : async function(){;},
//		import : function(prpSA){
//			// Condition : Propagate nteBseEA -> nteEA. Sort.
//			if (π.vInA("nteBseEAZ",prpSA) && this.dat.nteBseEAZ !== U){
//				this.dat.nteEA = π.cc(this.dat.nteBseEA);
//				this.dat.nteEA.sort((nteE0,nteE1)=>{
//					var cmpN = nteE0.tmeHedN - nteE1.tmeHedN;if (cmpN !== 0){return cmpN;}
//					var cmpN = nteE0.tmeTalN - nteE1.tmeTalN;if (cmpN !== 0){return cmpN;}
//					return 0;});}
//			// Condition : Handle key event.
//			if (π.vInA("keyFZ",prpSA) && this.dat.keyFZ !== U){
//				if (nteEA.length !== 0){
//					switch (this.dat.keyF){default:;
//						break;case F:{
//							// Blindly release all drags.
//							nteEA.forEach(nteE=>{
//								nteE.tmeDrgEA.forEach(tmeDrgE=>{
//									tmeDrgE.tmeTalN = this.dat.tmeCurN;});});
//							;}
//						break;case T:{
//							// Condition : Can be spent on the head of a new note.
//							var ntePndEA = nteEA.filter(nteE=>nteE.trgHedN===F);
//							if (ntePndEA.length !== 0){
//								var ntePndEAI = ntePndEA
//									.map(nteE=>Math.abs(this.dat.tmeCurN - nteE.tmeHedN))
//									.findBestIndex((tmeDltMagN0,tmeDltMagN1)=>tmeDltMagN0<=tmeDltMagN1?0:1);
//								var ntePndE = ntePndEA[ntePndEAI];
//								var tmeDltMagN = Math.abs(this.dat.tmeCurN - ntePndE.tmeHedN);
//								if (tmeDltMagN <= tmeDltMagMaxN){
//									ntePndE.tmeDrgEA = this.dat.tmeCurN;}
//								break;}
//							// Condition : Can be spent on the hold of a note.
//							var ntePndEA = nteEA.filter(nteE=>nteE.tmeHedN<=this.dat.tmeCurN&&this.dat.tmeCurN<=nteE.tmeTalN);
//							if (ntePndEA.length !== 0){
//								ntePndE.tmeDrgEA.push({tmeHedN:this.dat.tmeCurN,tmeTalN:U});}
//							;};}
//					;}}
//			;},
//	};
//	return oo;
//};