// DEAD, but a dummy plug was inserted to get index.html to load temporarily.
moonlight.bin["9"] = function(){
	var sltSA = π.a(1,128).concat([
		"reset" ,
		"hi"    ,
		"lo"    ,
		"hopUp" ,
		"hopDn" ,
		"jumpUp",
		"jumpDn",]);
	var oo = {
		nameInformalS : "DUMMY",
		importEO : ({
			laneDividerCo         : {cleanFxn : v=>v,},
			laneDividerW          : {cleanFxn : v=>v,},
			chartP                : {cleanFxn : v=>v,},
			staF                  : {cleanFxn : v=>v,},
			introWaitTime         : {cleanFxn : v=>v,},
			playbackRate          : {cleanFxn : v=>v,},
			volume                : {cleanFxn : v=>v,},
			snapMultiplier        : {cleanFxn : v=>v,},
			judgeLineRaise        : {cleanFxn : v=>v,},
			snapH                 : {cleanFxn : v=>v,},
			noteW                 : {cleanFxn : v=>v,},
			noteH                 : {cleanFxn : v=>v,},
			warningPreH           : {cleanFxn : v=>v,},
			warningPostH          : {cleanFxn : v=>v,},
			noteOffset            : {cleanFxn : v=>v,},
			speedMultiplier       : {cleanFxn : v=>v,},
			modO_hannanos_ver1    : {cleanFxn : v=>v,},
			modO_Decon082_ver1    : {cleanFxn : v=>v,},
			modO_nejuer_ver1      : {cleanFxn : v=>v,},
			modO_sliceofcake_ver1 : {cleanFxn : v=>v,},
			tTentativeSignal      : {cleanFxn : v=>v,},
			tTentative            : {cleanFxn : v=>v,},
			
			keyC  : {},
			bpmA  : {},
			noteA : {},
			
			sltSA : {},
			trgEO : {},
			wdtDspN   : {cleanFxn : v=>v,},
			hgtDspN   : {cleanFxn : v=>v,},
			
			// NEW
			cloE : {},
		})
		.concat(sltSA.mapO(sltS=>({
			["keySta"+sltS+"F" ] : {},
			["keySta"+sltS+"FT"] : {},})))
		.concat(sltSA.mapO(sltS=>({
			["keyStatePlyF_"+sltS] : {},
			["keyStatePlyF_"+sltS] : {},})))
		.concat(π.a(1,128).mapO(laneN=>({
			["laneColorPadHead"+"_"+laneN] : {},
			["laneColorPadTail"+"_"+laneN] : {},
			["laneColorNoteLo" +"_"+laneN] : {},
			["laneColorNoteMd" +"_"+laneN] : {},
			["laneColorNoteHi" +"_"+laneN] : {},
			["laneColorBgMd"   +"_"+laneN] : {},
			["laneColorBgHi"   +"_"+laneN] : {},
			["laneColorJudgeMd"+"_"+laneN] : {},
			["laneColorJudgeHi"+"_"+laneN] : {},}))),
		exportEO : {
			noteInstantStatA : {eqFxn : (a,b)=>a===b,},
			score            : {eqFxn : (a,b)=>a===b,},
			scoreMaxSoFar    : {eqFxn : (a,b)=>a===b,},
			playbackRate     : {eqFxn : (a,b)=>a===b,},
			staF            : {eqFxn : (a,b)=>a===b,},
			chartP           : {eqFxn : (a,b)=>a===b,},
			chartT           : {eqFxn : (a,b)=>a===b,},
			volume           : {eqFxn : (a,b)=>a===b,},
			elRoot           : {eqFxn : (a,b)=>a===b,},
			g     : {eqFxn : (a,b,dat)=>F,},
			
			"state" : {eqFxn : (a,b)=>a===b,},
			
		},
		dat : {
			datM_0 : U ,},
	};
	return oo;
};
/*
moonlight.bin["9"] = function(){
	var sltSA = π.a(1,128).concat([
		"reset" ,
		"hi"    ,
		"lo"    ,
		"hopUp" ,
		"hopDn" ,
		"jumpUp",
		"jumpDn",]);
	var oo = {
		nameInformalS : "Game Frame",
		importEO : ({
			laneDividerCo         : {cleanFxn : v=>v,},
			laneDividerW          : {cleanFxn : v=>v,},
			chartP                : {cleanFxn : v=>v,},
			staF                  : {cleanFxn : v=>v,},
			introWaitTime         : {cleanFxn : v=>v,},
			playbackRate          : {cleanFxn : v=>v,},
			volume                : {cleanFxn : v=>v,},
			snapMultiplier        : {cleanFxn : v=>v,},
			judgeLineRaise        : {cleanFxn : v=>v,},
			snapH                 : {cleanFxn : v=>v,},
			noteW                 : {cleanFxn : v=>v,},
			noteH                 : {cleanFxn : v=>v,},
			warningPreH           : {cleanFxn : v=>v,},
			warningPostH          : {cleanFxn : v=>v,},
			noteOffset            : {cleanFxn : v=>v,},
			speedMultiplier       : {cleanFxn : v=>v,},
			modO_hannanos_ver1    : {cleanFxn : v=>v,},
			modO_Decon082_ver1    : {cleanFxn : v=>v,},
			modO_nejuer_ver1      : {cleanFxn : v=>v,},
			modO_sliceofcake_ver1 : {cleanFxn : v=>v,},
			tTentativeSignal      : {cleanFxn : v=>v,},
			tTentative            : {cleanFxn : v=>v,},
			
			keyC  : {},
			bpmA  : {},
			noteA : {},
			
			sltSA : {},
			trgEO : {},
			wdtDspN   : {cleanFxn : v=>v,},
			hgtDspN   : {cleanFxn : v=>v,},
			
			// NEW
			cloE : {},
		})
		
		// !!! HERE
		// !!! PLAN
		//     Split gf into visual part and non-visual part.
		
		// VARIABLES
		lneNxtrgE          : ???,
		lneDivWdtPrt       : 0.01,
		lneDivClo          : [0,0,0.2,1],
		lneNxlneBkgHghCloA : [[0,0,0.4,1],[0,0,0.4,1]],
		lneNxlneBkgMdmCloA : [[0,0,0.0,1],[0,0,0.0,1]],
		clcPxlFrmPrtXxxFxn : function(xxxPrt){;},
		clcPxlFrmPrtYyyFxn : function(yyyPrt){;},
		
		
		
		.concat(sltSA.mapO(sltS=>({
			["keySta"+sltS+"F" ] : {},
			["keySta"+sltS+"FT"] : {},})))
		.concat(π.a(1,128).mapO(laneN=>({
			["laneColorPadHead"+"_"+laneN] : {},
			["laneColorPadTail"+"_"+laneN] : {},
			["laneColorNoteLo" +"_"+laneN] : {},
			["laneColorNoteMd" +"_"+laneN] : {},
			["laneColorNoteHi" +"_"+laneN] : {},
			["laneColorBgMd"   +"_"+laneN] : {},
			["laneColorBgHi"   +"_"+laneN] : {},
			["laneColorJudgeMd"+"_"+laneN] : {},
			["laneColorJudgeHi"+"_"+laneN] : {},}))),
		exportEO : {
			noteInstantStatA : {eqFxn : (a,b)=>a===b,},
			score            : {eqFxn : (a,b)=>a===b,},
			scoreMaxSoFar    : {eqFxn : (a,b)=>a===b,},
			playbackRate     : {eqFxn : (a,b)=>a===b,},
			staF            : {eqFxn : (a,b)=>a===b,},
			chartP           : {eqFxn : (a,b)=>a===b,},
			chartT           : {eqFxn : (a,b)=>a===b,},
			volume           : {eqFxn : (a,b)=>a===b,},
			elRoot           : {eqFxn : (a,b)=>a===b,},
			g     : {eqFxn : (a,b,dat)=>F,},
		},
		dat : ({
			// VARIABLES
			lneNxtrgE          : ???,
			lneDivWdtPrt       : 0.01,
			lneDivClo          : [0,0,0.2,1],
			lneNxlneBkgHghCloA : [[0,0,0.4,1],[0,0,0.4,1]],
			lneNxlneBkgMdmCloA : [[0,0,0.0,1],[0,0,0.0,1]],
			clcPxlFrmPrtXxxFxn : function(xxxPrt){;},
			clcPxlFrmPrtYyyFxn : function(yyyPrt){;},
			
			// Generate Note.
			genNte : function(){
				var oo = {
					// Assert Function.
					asrFxn : function(){;},
					// Calculate Bounds Entity Function.
					clcBndEFxn : function(){;},
				};
				return oo;},
			// Generate Note-Collection.
			genNtc : function(){
				var oo = {
					// Assert Function.
					asrFxn : function({g,_0NteA}){
						//this.lneNA.forEach(lneN=>{
						//this._0Ntc.render();
						//
						//
						//// Extract the notes that are visible.
						//var cap0P    = this.clcTmeFrmPrtFxn(0);
						//var cap1P    = this.clcTmeFrmPrtFxn(1);
						//var nteEA    = this.lneNxNteAO[lneN];
						//var nteVisEA = nteEA.filterRangeSorted(nteEA=>nteEA.hedP,cap0P,T,cap1P,T);
						//nteVisEA.forEach(nteE=>{
						//	switch (nteE.typS){default : SHOULDNT_HAPPEN();
						//		break;case "hit":
						//		;case "hld":
						//			var bndE = this.clcNteBndE(nteE);
						//			var clo;switch (nteE.staTri){default : SHOULDNT_HAPPEN();
						//				break;case -1 : clo = this["laneColorSNoteLo"+"_"+lneN];
						//				break;case  0 : clo = this["laneColorSNoteMd"+"_"+lneN];
						//				break;case  1 : clo = this["laneColorSNoteHi"+"_"+lneN];}
						//			g.quadFill(bndE.xxx0N,bndE.xxx1N,bndE.yyy0N,bndE.yyy1N,{colorE:clo});}
						//});
						//
						//this.clcPrtFrmTmeFxn();
						//;});
						;},
					// Render Function.
					rndFxn : function(){;},
				};
				return oo;
			},
			
			
			elO  : {},
			ctxO : {},
			
			playbackRate       : 1,
			width              : 0,
			height             : 0,
			widthField         : 0, // width of the field, regardless of view-rectangle size
			
			// time keeping mechanisms
			// ex : started/unpaused at anchorP:2000000,anchorT:1467262923902510
			//      chartT : π.now() ... which is 1467262924902510
			//      chartP : anchorP+(chartT-anchorT) ... which is 3000000
			chartP  : 0, // current microsecond-timestamp, chart time
			chartT  : 0, // current microsecond-timestamp, real-world time
			anchorP : 0, // anchor point microsecond-timestamp, chart time
			anchorT : 0, // anchor point microsecond-timestamp, real-world time
			
			// time to jump to, tentatively, this is filled by another KERN element
			// only pay attention to this value if the signal has been flipped [or initially set]
			tTentativeSignal : N,
			tTentative : 0,
			
			lyrNmeS : [],
			lyrDrtSA    : [],
			missBoundary       : 125000,
			staF              : F,
			
			lneNxNteEAO         : [],
			duration           : 0,
			snapA              : [],
			nSnapErrorTolerance : 0.001, // amount of error in complex snap math - example value of 0.001 means that if a time is 1‰ deviant from a snap to the distance to the next snap, it counts as being exactly on that first snap
			keyC               : 9,
			score              : 0,
			stat               : [],
			introWaitTime      : 2000000       ,
			playbackRate       :       1       ,
			volume             :       0.5     ,
			laneDividerW       :       1       ,
			noteW              :      40       ,
			noteH              :      16       ,
			snapH              :       1       ,
			snapMultiplier     :       4       ,
			warningPreH        :       4       ,
			warningPostH       :       4       ,
			noteOffset         :       0       ,
			errorOffset        :       0       , // error from not being able to play the audio within 1ms of chart starting
			syncOffset         :       0       , // error from audio video desync
			speedMultiplier    :       0.00055 ,
			speedMultiplierAdjusted :  0.00055 , // adjusted to work with playbackRate to keep at constant speed (_.speedMultiplier/_.playbackRate)
			judgeLineRaise     :       0       ,
			noteShape          : "rectangle"   ,
			noteInstantStatA   : [], // for sending raw score-ish data to an external element
			passedHeadC : 0,
			passedTailC : 0,
			earnedHeadC : 0,
			earnedTailC : 0,
			scoreResetSignal : F, // outbound signal to the score computer
			
			dontBeLazy : F, // while in the "lo" state, certain things [such as [re]drawing notes] will not be done in drawFrame, normally
			
			keyC  : 0,
			bpmA  : [],
			noteA : [],
			
			// NEW
			g       : U  ,
			gO      : U  ,
			hgtDspN :  0 ,
			pntReqF : T  ,
			sltSA        , // Slot String Array
			trgEO   : {} , // Trigger Entity Object
			wdtDspN :  0 ,
			
			layernameSA : ["S","hannanos_ver1","J","Decon082_ver1","N","L"],
			modO_Decon082_ver1  : {overlayA:[]},
			modO_hannanos_ver1 : {bubbleF:1,textF:1,language:"english",durationT:1000000,lanexpaintEA:[],counter:0}, // bubbleF and textF should be booleans, but KERN3 sliders don't support that
			modO_nejuer_ver1 : {mode:0,hueRoot:0,tLoop:3000000,yLoop:8000}, // mode:{0:off,1:temporal,2:physical}
			modO_sliceofcake_ver1 : {op:1},
		})
		.concat(sltSA.mapO(sltS=>({
			["keySta"+sltS+"F" ] : {},
			["keySta"+sltS+"FT"] : {},})))
		.concat(π.a(1,128).mapO(laneN=>({
			["laneColorPadHead"+"_"+laneN] : [0.0,0.0,0.0,1],["laneColorSPadHead"+"_"+laneN] : "transparent",
			["laneColorPadTail"+"_"+laneN] : [0.0,0.0,0.0,1],["laneColorSPadTail"+"_"+laneN] : "transparent",
			["laneColorNoteLo" +"_"+laneN] : [0.0,0.0,0.8,1],["laneColorSNoteLo" +"_"+laneN] : "transparent",
			["laneColorNoteMd" +"_"+laneN] : [0.0,0.0,0.9,1],["laneColorSNoteMd" +"_"+laneN] : "transparent",
			["laneColorNoteHi" +"_"+laneN] : [0.0,0.0,1.0,1],["laneColorSNoteHi" +"_"+laneN] : "transparent",
			["laneColorBgMd"   +"_"+laneN] : [0.0,0.0,0.0,1],["laneColorSBgMd"   +"_"+laneN] : "transparent",
			["laneColorBgHi"   +"_"+laneN] : [0.0,0.0,0.2,1],["laneColorSBgHi"   +"_"+laneN] : "transparent",
			["laneColorJudgeMd"+"_"+laneN] : [0.0,0.0,0.9,1],["laneColorSJudgeMd"+"_"+laneN] : "transparent",
			["laneColorJudgeHi"+"_"+laneN] : [0.0,0.0,1.0,1],["laneColorSJudgeHi"+"_"+laneN] : "transparent",})))
		.concat({
			// utilities [optimizations]
			errorToScore : function(error,boundary=this.missBoundary){return (error>boundary)?0:Math.cos(Math.PI*error/(2*boundary))*boundary;},
			jumpRelative : function(delta){this.jump(this.chartP+delta);},
			jump         : function(location){
				this.anchorP = Math.round(location);
				this.anchorT = this.chartT;
				this.chartP  = ((this.chartT-this.anchorT)*this.playbackRate)+this.anchorP;
				this.score   = 0;
				this.stat    = [];
				this.resetNoteA();
				this.earnedHeadC = 0;
				this.earnedTailC = 0;
				this.renderRegister(["N"]);
				this.scoreResetSignal = !this.scoreResetSignal;
				//moonlight.forget(this.parent.ID,"chartP");
				//moonlight.forget(this.parent.ID,"scoreResetSignal");
				moonlight.chain(this.parent.ID);},
			
			
			//------------------------------------------------------------------------------------------------------------------------
			
			// !!! DIRTY
			calcScoreMaxSoFar : function(){
				// !!! not currently used and was taking forever
				//return this.missBoundary*π.flat(this.lneNxNteEAO).filter(note=>this.chartP>=this.timeAdjust(note.head)).reduce(((p,note)=>p+((typeof note.tail==="undefined"||this.chartP<this.timeAdjust(note.tail))?1:2)),0);
				return;},
			
			rstNteAllFxn : function(){
				this.lneNxNteEAO.forEach(noteA=>noteA.forEach(note=>{π.ooas(note,{started:F,ended:F});}));},
			
			// Edit functions written lazily. They're slow, but super correct.
			edtNteAddHitFxn : function({lneN,hedP}){
				this.lneNxNteEAO[lneN].push({typS:"hit",lneN,hedN,talN:U,hedP:U,talP:U,hedPF:F,talPF:F});
				this.lneNxNteEAOSrtFxn();},
			edtNteAddHldFxn : function({lneN,hedP,talP}){
				this.lneNxNteEAO[lneN].push({typS:"hld",lneN,hedN,talN,hedP:U,talP:U,hedPF:F,talPF:F});
				this.lneNxNteEAOSrtFxn();},
			edtNteRmvFxn : function({lneN,hedP}){
				this.lneNxNteEAO[lneN] = this.lneNxNteEAO[lneN].filter(note=>this.timeAdjust(note.hedP) !== hedP);
				this.lneNxNteEAOSrtFxn();},
			
			lneNxNteEAOSrtFxn : function(){
				this.lneNxNteEAO.forEach((nteEA,lneN)=>{nteEA.sort((a,b)=>{var h=a.head-b.head;return (h!==0)?h:a.tail-b.tail;});});
				//var sortCompareFxn   = (a,b)=>a.head-b.head;
				//var searchCompareFxn = (a,b)=>a     -b.head;
				//this.lanexnoteIndexHeadPairP = this.lneNxNteEAO.map(nteEA=>new SortedArray({arr:nteEA.map((note,index)=>({index,head:note.head})),sortCompareFxn,searchCompareFxn}));
				//var sortCompareFxn   = (a,b)=>a.tail-b.tail;
				//var searchCompareFxn = (a,b)=>a     -b.tail;
				//this.lanexnoteIndexTailPairP = this.lneNxNteEAO.map(nteEA=>new SortedArray({arr:nteEA.map((note,index)=>({index,tail:(typeof note.tail === "undefined"?note.head:note.tail)})),sortCompareFxn,searchCompareFxn}));
				;},
			
			calcFinalTime    : function(){
				// Calculate ending based on snaps.
				var snpP = 0;
				this.lneNxRteEAO.forEach((rteEA,lneN)=>{
					rteEA.forEach(rteE=>{
						if (rteE.hedP > snpP){snpP = rteE.hedP;}});});
				if (this.snpEA.length > 0){var finalHeadSnap = this.snapA[this.snapA.length-1].head;}
				// Calculate ending based on notes.
				var nteP = 0;
				this.lneNxNteEAO.forEach((nteEA,lneN)=>{
					nteEA.forEach(nteE=>{
						switch (nteE.typS){default : SHOULDNT_HAPPEN();
							break;case "hit":if (nteE.hedP > nteP){nteP = nteE.hedP;}
							break;case "hld":if (nteE.talP > nteP){nteP = nteE.talP;};}});});
				return Math.max(snpP,nteP);},
			
			// !!! DIRTY
			clcPxlFrmTmeFxn : function(t){return this.const1 - t*this.speedMultiplierAdjusted;},
			// !!! DIRTY
			clcTmeFrmPxlFxn : function(p){return (this.speedMultiplierAdjusted === 0) ? -1 : (this.const1 - p)/this.speedMultiplierAdjusted;},
			
			// !!! DIRTY
			nearestSnapGroup : function(majorOnlyF=F){
				if (this.snapMultiplier === 0 || this.snapA.length === 0){return {prev:null,curr:null,next:null};}
				
				var chartP = this.timeDejust(this.chartP);
				
				// t = snap.head + (snap.value * n)
				// therefore, n = (t - snap.head) / snap.value
				var snapCurrI = 0;for (var snapI = this.snapA.length-1; snapI >= 0; snapI--){var snap = this.snapA[snapI];if (snap.head <= chartP){snapCurrI = snapI;break;}}
				var snapCurr = this.snapA[snapCurrI];
				var valueCurr = (snapCurr.value/(majorOnlyF?1:this.snapMultiplier)); // as in snap.value
				var nCurr = (chartP - snapCurr.head) / valueCurr;
				var prevTentative,nextTentative; // values if they existed within the same snap group as curr
				// exactly [nCurr is deemed close enough to a whole number]
				//ll("---------------------------------------");
				//ll("snapCurr : "+π.jsonE(snapCurr));
				//ll("valueCurr : "+valueCurr);
				//ll("nCurr : "+nCurr);
				var exactF = F; // whether we are current on top of a snap, by design or by chance
				if (Math.abs(Math.round(nCurr)-nCurr) < this.nSnapErrorTolerance){
					nCurr = Math.round(nCurr);
					curr = chartP;
					exactF = T;}
				else{
					curr = N;}
				
				prevTentative = snapCurr.head + (valueCurr * (exactF?(nCurr-1):Math.floor(nCurr)));
				if (snapCurrI === 0 || prevTentative >= snapCurr.head){prev = prevTentative;}
				else{
					// this will be the final snap of the previous snap group
					var snapPrev = this.snapA[snapCurrI-1];
					var valuePrev = (snapPrev.value/(majorOnlyF?1:this.snapMultiplier)); // as in snap.value
					var nPrev = (chartP - snapPrev.head) / valuePrev;
					if (Math.abs(Math.round(nPrev)-nPrev) < this.nSnapErrorTolerance){nPrev = Math.round(nPrev);nPrev--;} // if we're at an overlapping valid line, nope, go back one more
					var prev = snapPrev.head + (valuePrev * Math.floor(nPrev));}
				
				nextTentative = snapCurr.head + (valueCurr * (exactF?(nCurr+1):Math.ceil(nCurr)));
				if (snapCurrI === this.snapA.length-1 || nextTentative < snapCurr.tail){next = nextTentative;}
				else{
					// this will be the head snap of the next snap group
					var snapNext = this.snapA[snapCurrI+1];
					next = snapNext.head;}
				ll(chartP+" "+π.jsonE({prev,curr,next}));
				return {prev,curr,next};},
			nearestSnapUp        : function(){return this.nearestSnapGroup().next;},
			nearestSnapDown      : function(){return this.nearestSnapGroup().prev;},
			nearestSnapMajorUp   : function(){return this.nearestSnapGroup(T).next;},
			nearestSnapMajorDown : function(){return this.nearestSnapGroup(T).prev;},
			nearestSnapAny       : function(){
				var snapGroup = this.nearestSnapGroup();
				if (snapGroup.curr !== N){return snapGroup.curr;}
				return (this.chartP - snapGroup.prev < snapGroup.next - this.chartP)
					? snapGroup.prev
					: snapGroup.next;},
			
			// !!! DIRTY
			timeAdjust           : function(n){return n+this.noteOffset+this.errorOffset+this.syncOffset;},
			timeDejust           : function(n){return n-this.noteOffset-this.errorOffset-this.syncOffset;},
			
			// Render Register Function.
			rndRegFxn : function(lyrNewSA){
				lyrDrtSA.pushUniqueA(lyrNewSA);},
			
			//----JUNGLE BELOW----
			
			render : function(){var _ = this;
				//this.preclConst1();
				//var {tx,co,bg} = this;
				//var a = bg[3];
				//var w = this.cachedW();
				//var h = this.cachedH();
				//var noteH_actual = Math.sign(_.speedMultiplier)*_.noteH;
				// !!! Change to this.lyrDrtSA.forEach(lyrDrtS=>{
				for (var lyrDrtS of this.lyrDrtSA){
					var ctx = this.ctxO[lyrDrtS];
					var g = this.gO[lyrDrtS];
					switch (lyrDrtS){default:
						
						// [s] shield
						break;case "S":
						
						// !!! DIRTY
						// mod : hannanos_ver1
						break;case "hannanos_ver1":
							anipnt.clearRect(ctx,0,0,w,h,Ω.pxd);
							if (_.modO_hannanos_ver1.bubbleF || _.modO_hannanos_ver1.textF){
								for (var l = 1; l <= this.keyC; l++){
									if (typeof _.modO_hannanos_ver1.lanexpaintEA[l] === "undefined"){_.modO_hannanos_ver1.lanexpaintEA[l] = [];}
									_.modO_hannanos_ver1.lanexpaintEA[l].forEach((paintE,paintEAI,paintEA)=>{
										if (typeof paintE.ID === "undefined"){paintE.ID = _.modO_hannanos_ver1.counter++;}
										var x = ((l-1)*this.noteW)+(l*this.laneDividerW);
										
										// FtB4 : Perfect:≤50ms Great:≤75ms Good:≤100ms Bad:≤125ms Miss
										var co = this["laneColorSJudgeHi"+"_"+l];
										var tx = this["laneColorSJudgeHi"+"_"+l];
										var s = (paintE.type==="down"?"↓":"↑");
										var errMagN = Math.abs(paintE.err);
										if      (errMagN <=  50000){s += "PERFECT";}
										else if (errMagN <=  75000){s += "GREAT"  ;}
										else if (errMagN <= 100000){s += "GOOD"   ;}
										else if (errMagN <= 125000){s += "BAD"    ;}
										else                       {s += "MISS"   ;}
										
										if (_.modO_hannanos_ver1.bubbleF){
											anipnt.traceRect(ctx,x,this.timeToPixel(this.chartP+paintE.err),this.noteW,this.noteH,co,Ω.pxd);}
										if (_.modO_hannanos_ver1.textF){
											if (_.modO_hannanos_ver1.language === "english"){
												anipnt.fillText(ctx,s,x,this.timeToPixel(this.chartP+paintE.err),tx,Ω.pxd);}}
										if (typeof paintE.destroyTimeout === "undefined"){
											paintE.destroyTimeout = setTimeout((function(_,paintEA,ID){return function(){
												paintEA.splice(paintEA.findIndex(paintE=>paintE.ID===ID),1);
												_.renderRegister(["hannanos_ver1"]);
											};})(_,paintEA,paintE.ID),_.modO_hannanos_ver1.durationT/1000);}
									});}
							}
						// Origin of any object is its actual center (in new world).
						// Lane divider is fat rounded.
						// Note width is skinny rounded.
						// Note height is skinny rounded.
						//
						// |D|D| | | | |D|D| | | | |
						//
						// |D| | | | |D| | | | |
						
						// [j] judgement line, with key hitboxes
						break;case "J":
							g.clear();
							this.lneNA.forEach(lneN=>{
								// !!! Assert that px inputs are whole numbers
								// !!! Try to not round, see how bad it looks
								var xxx0N = Math.ceil((lneN * (this.lneDivWdtN + this.nteWdtN)) + (this.lneDivWdtN / 2));
								var xxx1N = Math.floor(xxx0N + this.nteWdtN);
								var yyy0N = Math.ceil(this.clcPxlFrmTmeFxn(this.curP));
								var yyy1N = Math.floor(yyy0N + this.nteHgtN);
								var clo   = (this.dat.trgEO[lneN]._0F === T) ? this["laneColorSJudgeHi"+"_"+lneN] : this["laneColorSJudgeMd"+"_"+lneN];
								g.quadFill(xxx0N,xxx1N,yyy0N,yyy1N,{colorE:clo});});
						
						// [n] notes
						break;case "N":
							g.clear();
							this.brc.render(g);
							this.ntc.render(g);
							this.chain();
						
						// [l] Draw lane backgrounds and dividers.
						break;case "L":
							g.clear();
							var rngPrt = (1 - this.lneDivWdtPrt);
							var snpPrt = rngPrt / (this.lneNA.length - 1);
							var yyy0N  = this.clcPxlFrmPrtYyyFxn(0);
							var yyy1N  = this.clcPxlFrmPrtYyyFxn(1);
							this.lneNA.forEach(lneN=>{
								// Draw lane backgrounds.
								var xxx0Prt = lneDivWdtPrt + (lneN * snpPrt);
								var xxx0N   = this.clcPxlFrmPrtXxxFxn(xxx0Prt);
								var xxx1N   = this.clcPxlFrmPrtXxxFxn(xxx0Prt + (snpPrt - this.lneDivWdtPrt));
								var clo     = (lneNxtrgE._0F ? this.lneNxlneBkgHghCloA[lneN] : this.lneNxlneBkgMdmCloA[lneN]);
								g.quadFill(xxx0N,xxx1N,yyy0N,yyy1N,{colorE:clo});
								// Draw lane dividers.
								var xxx0Prt = 0 + (lneN * snpPrt);
								var xxx0N   = this.clcPxlFrmPrtXxxFxn(xxx0Prt);
								var xxx1N   = this.clcPxlFrmPrtXxxFxn(xxx0Prt + lneDivWdtPrt);
								var clo     = this.lneDivClo;
								g.quadFill(xxx0N,xxx1N,yyy0N,yyy1N,{colorE:clo});});
						;}}
				this.lyrDrtSA = [];},
		}),
		
		ctr : function(){
			this.dat.g = anipnt.genG({elCanvas : document.createElement("canvas")}).g;
			this.dat.g.ctx.imageSmoothingEnabled = F;
			this.dat.lyrNmeSA.forEach(lyrNmeS=>{
				this.dat.gO[lyrNmeS] = anipnt.genG({elCanvas : document.createElement("canvas")}).g;
				this.dat.gO[lyrNmeS].ctx.imageSmoothingEnabled = F;});},
		
		import : function(prpSA=[]){
			//π.vInA("",prpSA)
			var _ = this.dat;
			
			// Handle sizing.
			if ((π.vInA("wdtDspN",prpSA) || π.vInA("hgtDspN",prpSA)) && this.dat.wdtDspN !== U && this.dat.wdtDspN !== N && this.dat.hgtDspN !== U && this.dat.hgtDspN !== N){
				this.dat.g.assert({wdtN:this.dat.wdtDspN,hgtN:this.dat.hgtDspN});
				this.dat.pntReqF = T;}
			
			// Fill internal convenience variable trgEO.
			// If some key data changed, refresh "L" layer.
			{
				var heyF = F;
				this.dat.sltSA.forEach(sltS=>{
					this.dat.trgEO[sltS].heyF = π.vInA("keyStatePlyF" +"_"+sltS,prpSA);
					if (this.dat.trgEO[sltS].heyF){
						this.dat.trgEO[sltS]._0F  = this.dat["keyStatePlyF" +"_"+sltS];
						this.dat.trgEO[sltS]._0FT = this.dat["keyStatePlyFT"+"_"+sltS];
						heyF = T;}});
				if (heyF === T){
					this.dat.renderRegister(["J","L"]);}
			}
			//// Handle key signals.
			//if (π.vInA("keyStatePlyF"+"_"+"rst"   ,prpSA) && this.dat["keyStatePlyF"+"_"+"rst"   ] === T){this.dat.jmpFxn(-this.dat.preDltT);}
			//if (π.vInA("keyStatePlyF"+"_"+"hi"    ,prpSA) && this.dat["keyStatePlyF"+"_"+"hi"    ] === T){this.dat.staF = T;}
			//if (π.vInA("keyStatePlyF"+"_"+"lo"    ,prpSA) && this.dat["keyStatePlyF"+"_"+"lo"    ] === T){this.dat.staF = F;}
			//if (π.vInA("keyStatePlyF"+"_"+"hopBck",prpSA) && this.dat["keyStatePlyF"+"_"+"hopBck"] === T){;} // !!!
			//if (π.vInA("keyStatePlyF"+"_"+"hopFrw",prpSA) && this.dat["keyStatePlyF"+"_"+"hopFrw"] === T){;} // !!!
			//if (π.vInA("keyStatePlyF"+"_"+"jmpBck",prpSA) && this.dat["keyStatePlyF"+"_"+"jmpBck"] === T){;} // !!!
			//if (π.vInA("keyStatePlyF"+"_"+"jmpFrw",prpSA) && this.dat["keyStatePlyF"+"_"+"jmpFrw"] === T){;} // !!!
			
			// !!! HERE. Just keep randomly fixing up sections.
			
			// compile colors ahead of time
			π.a(1,128).forEach(laneN=>{
				if (π.vInA("laneColorPadHead"+"_"+laneN,prpSA)){this.dat["laneColorSPadHead"+"_"+laneN] = ç.p(this.dat["laneColorPadHead"+"_"+laneN]);}
				if (π.vInA("laneColorPadTail"+"_"+laneN,prpSA)){this.dat["laneColorSPadTail"+"_"+laneN] = ç.p(this.dat["laneColorPadTail"+"_"+laneN]);}
				if (π.vInA("laneColorNoteLo" +"_"+laneN,prpSA)){this.dat["laneColorSNoteLo" +"_"+laneN] = ç.p(this.dat["laneColorNoteLo" +"_"+laneN]);}
				if (π.vInA("laneColorNoteMd" +"_"+laneN,prpSA)){this.dat["laneColorSNoteMd" +"_"+laneN] = ç.p(this.dat["laneColorNoteMd" +"_"+laneN]);}
				if (π.vInA("laneColorNoteHi" +"_"+laneN,prpSA)){this.dat["laneColorSNoteHi" +"_"+laneN] = ç.p(this.dat["laneColorNoteHi" +"_"+laneN]);}
				if (π.vInA("laneColorBgMd"   +"_"+laneN,prpSA)){this.dat["laneColorSBgMd"   +"_"+laneN] = ç.p(this.dat["laneColorBgMd"   +"_"+laneN]);}
				if (π.vInA("laneColorBgHi"   +"_"+laneN,prpSA)){this.dat["laneColorSBgHi"   +"_"+laneN] = ç.p(this.dat["laneColorBgHi"   +"_"+laneN]);}
				if (π.vInA("laneColorJudgeMd"+"_"+laneN,prpSA)){this.dat["laneColorSJudgeMd"+"_"+laneN] = ç.p(this.dat["laneColorJudgeMd"+"_"+laneN]);}
				if (π.vInA("laneColorJudgeHi"+"_"+laneN,prpSA)){this.dat["laneColorSJudgeHi"+"_"+laneN] = ç.p(this.dat["laneColorJudgeHi"+"_"+laneN]);}
			});
			if (typeof this.dat.lneDivCor === US){this.dat.lneDivCor = ç.p(this.dat.tx,this.dat.bg,0.2);}
			if (typeof this.dat.snpMjrCor === US){this.dat.snpMjrCor = ç.p(this.dat.tx,this.dat.bg,0.8);}
			if (typeof this.dat.snpMnrCor === US){this.dat.snpMnrCor = ç.p(this.dat.tx,this.dat.bg,0.4);}
			
			if (π.vInA("keyC",prpSA) || π.vInA("bpmA",prpSA) || π.vInA("noteA",prpSA)){
				this.dat.keyC       = this.dat.keyC;
				this.dat.hitC       = this.dat.noteA.reduceSum(note=>typeof note.tail === "undefined");
				this.dat.holdC      = this.dat.noteA.reduceSum(note=>typeof note.tail !== "undefined");
				this.dat.scoreMax   = (this.dat.hitC * this.dat.missBoundary) + (this.dat.holdC * this.dat.missBoundary * 2);
				this.dat.lneNxNteEAO = this.dat.noteA.map(note=>π.ooas(note,{started:F,ended:F})).distribute(note=>note.lane);
				this.dat.lneNxNteEAOSrtFxn();
				this.dat.duration   = this.dat.calcFinalTime();
				var tail = this.dat.duration;
				this.dat.snapA      = π.cc(this.dat.bpmA).sort((a,b)=>a.head-b.head).filter(snap=>snap.value>0).forEachReverse(snap=>{snap.tail = tail;tail = snap.head;});
				_.widthField = _.noteW*_.keyC + _.laneDividerW*(_.keyC+1);
				_.renderRegister(["J","N","L"]);
				for (var lane = 1; lane <= _.keyC; lane++){
					if (typeof _.lneNxNteEAO[lane] === "undefined"){
						_.lneNxNteEAO[lane] = [];}}
				
				// !!! HEAD
				this.dat._0Ntc.asr(???);
				
				
				// !!! Don't start immediately. Should prompt for keypress to start chart.
				// The kludgy reason for this is to make this a pseudo-smartFPS chip. The fake but better reason is that this should be correct behavior anyway.
				//_.staF = T;
				
				_.jump(-_.introWaitTime);}
			
			if (π.vInA("missBoundary",prpSA)){
				_.hitC     = _.noteA.reduceSum(note=>typeof note.tail === "undefined");
				_.holdC    = _.noteA.reduceSum(note=>typeof note.tail !== "undefined");
				_.scoreMax = (_.hitC*_.missBoundary) + (_.holdC*_.missBoundary*2);}
			if (π.vInA("laneDividerCo"  ,prpSA) || π.vInA("laneDividerW",prpSA)){_.renderRegister(["J","L"]);_.widthField = _.noteW*_.keyC + _.laneDividerW*(_.keyC+1);}
			if (π.vInA("laneDividerW"   ,prpSA)                                ){_.renderRegister(["N"]);}
			if (π.vInA("chartP"         ,prpSA)                                ){_.renderRegister(["N"]);}
			if (π.vInA("introWaitTime"  ,prpSA)                                ){_.renderRegister(["N"]);}
			if (π.vInA("snapMultiplier" ,prpSA)                                ){_.renderRegister(["N"]);}
			if (π.vInA("judgeLineRaise" ,prpSA)                                ){_.renderRegister(["J","N"]);}
			if (π.vInA("snapH"          ,prpSA)                                ){_.renderRegister(["N"]);}
			if (π.vInA("noteW"          ,prpSA) || π.vInA("noteH"       ,prpSA)){_.renderRegister(["J","N","L"]);}
			if (π.vInA("noteW"          ,prpSA)                                ){_.widthField = _.noteW*_.keyC + _.laneDividerW*(_.keyC+1);}
			if (π.vInA("warningPreH"    ,prpSA) || π.vInA("warningPostH",prpSA)){_.renderRegister(["N"]);}
			if (π.vInA("noteOffset"     ,prpSA)                                ){_.renderRegister(["N"]);}
			if (π.vInA("speedMultiplier",prpSA) || π.vInA("playbackRate",prpSA)){
				_.speedMultiplierAdjusted = (_.playbackRate === 0 ? Infinity : _.speedMultiplier/_.playbackRate);
				_.anchorT = _.chartT;
				_.anchorP = _.chartP;
				_.renderRegister(["N"]);}
			
			_.renderRegister(["J","L"]);
			// key handling
			var t = _.chartP;
			var tDejusted = _.timeDejust(t); // instead of wasting time Adjusting every note t, just Dejust our one comparison t
			var noteRenderF = F;
			if (_.hitC > 0 || _.holdC > 0){
				_.noteInstantStatA.length = 0;
				var noteChangeF = F;
				
				// !!! TODO - Make this by change ~mode~, reinterpret Ply as Edt
				//// keyStateEdtF && keyStateEdtFT
				//π.a(1,this.dat.keyC)
				//	.filter(laneN=>π.vInA(this.dat.calcKeyStateEdtFNameS(laneN),prpSA))
				//	.forEach(laneN=>{
				//		// keydown
				//		if (this.dat.calcKeyStateEdtF(laneN)){
				//			noteRenderF = T;
				//			var snapN = _.nearestSnapAny();
				//			if (_.lneNxNteEAO[laneN].some(note=>note.head === snapN)){
				//				_.removeNote({lane:laneN,head:snapN});}
				//			else{
				//				_.addNteHitFxn({lane:laneN,head:snapN});}}});
				
				// keyStatePlyF && keyStatePlyFT
				π.a(1,this.dat.keyC)
					.filter(laneN=>this.dat.trgEO[lneS].heyF)
					.forEach(laneN=>{
						// keydown
						if (this.dat.trgEO[laneN.toString()]._0F === T){
							noteRenderF = T;
							// this will land us approximately around our closest notes, but it may land us a little farther away than expected
							// really treat this as just a vague suggestion-search-starting-point
							var recommendedHeadPairI = _.lanexnoteIndexHeadPairP[laneN].indexOf(tDejusted,100);
							var recommendedNoteI     = _.lanexnoteIndexHeadPairP[laneN].get(recommendedHeadPairI).index;
							var noteBestI            = -1;
							var distanceBest         = N;
							var noteFinalI           = _.lanexnoteIndexHeadPairP[laneN].length-1;
							// look down
							for (var noteI = recommendedNoteI; noteI >= 0; noteI--){var note = _.lneNxNteEAO[laneN][noteI];
								if (note.started){continue;} // ignore notes that have already been triggered
								var distance = Math.abs(tDejusted-note.head);
								if (tDejusted-note.head > _.missBoundary){break;} // ! NOT absolute valued, our SortedArray Lazy Recommendation algorithm may land us somewhere strange
								if (distanceBest === N || distance < distanceBest){distanceBest = distance;noteBestI = noteI;}}
							// look up
							for (var noteI = recommendedNoteI+1; noteI <= noteFinalI; noteI++){var note = _.lneNxNteEAO[laneN][noteI];
								if (note.started){continue;} // ignore notes that have already been triggered
								var distance = Math.abs(tDejusted-note.head);
								if (note.head-tDejusted > _.missBoundary){break;} // ! NOT absolute valued, our SortedArray Lazy Recommendation algorithm may land us somewhere strange
								if (distanceBest === N || distance < distanceBest){distanceBest = distance;noteBestI = noteI;}}
							// use the closest note for the comparison
							if (noteBestI !== -1 && distanceBest <= _.missBoundary){var note = _.lneNxNteEAO[laneN][noteBestI];
								// code regression somehow
								if (typeof _.modO_hannanos_ver1.lanexpaintEA[laneN] === "undefined"){
									_.modO_hannanos_ver1.lanexpaintEA[laneN] = [];}
								
								_.modO_hannanos_ver1.lanexpaintEA[laneN].push({type:"down",err:note.head-tDejusted});
								_.renderRegister(["hannanos_ver1"]);
								//ll("distanceBest : "+distanceBest);
								//ll("noteBestI : "+noteBestI);
								//ll(note);
								//var err = Math.abs(note.head-tDejusted);
								//lld(err);
								//this.score += this.errorToScore(err);
								//this.stat.push([noteI,0,err]);
								note.started = T;
								_.noteInstantStatA.push({whichEnd:"head",note:π.cc(note),t:tDejusted,timeUntilExact:note.head-tDejusted,missBoundary:_.missBoundary});
								_.earnedHeadC++;
								//moonlight.forget(this.parent.ID,"earnedHeadC");
								note.ended = (typeof note.tail === "undefined");
								if (typeof note.tail === "undefined"){
									_.noteInstantStatA.push({whichEnd:"tail",note:π.cc(note),t:tDejusted,timeUntilExact:note.head-tDejusted,missBoundary:_.missBoundary});
									_.earnedTailC++;
									//moonlight.forget(this.parent.ID,"earnedTailC");
									;}
								noteChangeF = T;}}
						// keyup
						else{
							noteRenderF = T;
							// close all open notes
							var noteFinalI = _.lneNxNteEAO[laneN].length-1;
							for (var noteI = 0; noteI <= noteFinalI; noteI++){var note = _.lneNxNteEAO[laneN][noteI];
								if (note.started === T && note.ended === F){
									_.modO_hannanos_ver1.lanexpaintEA[laneN].push({type:"up",err:note.tail-tDejusted});
									_.renderRegister(["hannanos_ver1"]);
									note.ended = T;
									_.noteInstantStatA.push({whichEnd:"tail",note:π.cc(note),t:tDejusted,timeUntilExact:note.tail-tDejusted,missBoundary:_.missBoundary});
									_.earnedTailC++;
									//moonlight.forget(this.parent.ID,"earnedTailC");
									noteChangeF = T;}}}});
				if (noteChangeF){
					//moonlight.forget(this.parent.ID,"noteInstantStatA");
					;}
				if (noteRenderF){
					_.renderRegister(["N"]);}
				_.renderRegister(["J","L"]);}
			//// keydown
			//// if note is close by, trigger it, cap out at 1 note maximum
			//this.lneNxNteEAO[lane].some(note=>{
			//	if (note.started || note.ended){return F;} // ignore notes that have already been triggered
			//	var err = Math.abs(this.timeAdjust(note.head)-instantT);
			//	var breakF = F;
			//	if (err <= this.missBoundary){
			//		this.score += this.errorToScore(err);
			//		this.stat.push([noteI,0,err]);
			//		note.started = T;
			//		note.ended = (typeof note.tail === "undefined");
			//		breakF = T;}
			//	return breakF;});
			//// keyup
			//// if hold-note is close by, untrigger it, cap out at 1 note maximum
			//this.lneNxNteEAO[lane].some(note=>{
			//	if (!note.started || note.ended || typeof note.tail === "undefined"){return F;} // ignore these notes
			//	var errEarly = this.timeAdjust(note.tail)-instantT;
			//	var errLate = -1*errEarly;
			//	var early = (errEarly > 0);
			//	var exact = (errEarly === 0);
			//	var late  = (errLate > 0);
			//	var breakF = F;
			//	if (exact){this.score+=this.errorToScore(                                                             0);this.stat.push([noteI,1,       0]);breakF=T;}
			//	if (late ){this.score+=this.errorToScore(errLate ,this.timeAdjust(note.tail)-this.timeAdjust(note.head));this.stat.push([noteI,1,errLate ]);breakF=T;}
			//	if (early){this.score+=this.errorToScore(errEarly,this.timeAdjust(note.tail)-this.timeAdjust(note.head));this.stat.push([noteI,1,errEarly]);breakF=T;}
			//	note.ended = T;
			//	return breakF;});
			if (π.vInA("modO_hannanos_ver1"   ,prpSA)){_.renderRegister(["hannanos_ver1"]);}
			if (π.vInA("modO_Decon082_ver1"   ,prpSA)){_.renderRegister(["Decon082_ver1"]);}
			if (π.vInA("modO_nejuer_ver1"     ,prpSA)){_.renderRegister(["N"]);}
			if (π.vInA("modO_sliceofcake_ver1",prpSA)){_.renderRegister(["N"]);}
			if (π.vInA("tTentativeSignal"     ,prpSA) && _.tTentativeSignal !== N){_.jump(_.tTentative*_.duration);}
			if (π.vInA("staF",prpSA)){
				//moonlight.forget(this.parent.ID,"chartP");
				//moonlight.forget(this.parent.ID,"staF");
				;}
			; // we don't need to to call outbound here, because the end of a stabilize() fxn always trails into an outbound() call, because we're within the inbound() fxn
			; // additionally, calling outbound() here would be incorrect, since outbound wipes the if() array, which currently serves a dual inbound/outbound purpose
			},
		
		drawFrame : function(){
			
			// Update anchor and time as needed.
			this.dat.chartT = π.now();
			switch (this.dat.staF){default:{;}
				// When paused, drag the anchor.
				break;case F:{
					this.dat.anchorT = this.dat.chartT;
					this.dat.anchorP = this.dat.chartP;}
				// When playing, reference the anchor.
				break;case T:{
					this.dat.chartP = this.dat.anchorP+((this.dat.chartT-this.dat.anchorT)*this.dat.playbackRate);
					moonlight.chain(this.ID);};}
			
			// Delegate rendering per dirty layer.
			this.dat.render();
			
			// Layer squash and send out "g".
			if (this.dat.pntReqF){
				this.dat.g.clear();
				this.lyrNmeSA.forEach(lyrNmeS=>{
					var cns = this.cnsO[lyrNmeS];
					var ctx = this.ctxO[lyrNmeS];
					var g   = this.gO  [lyrNmeS];
					this.dat.ctx.drawImage(cns,0,0,g.wdtN*g.pxdN,g.hgtN*g.pxdN,0,0,this.dat.g.wdtN*this.dat.g.pxd,this.dat.g.hgtN*this.dat.g.pxd);});
				this.chain();
				this.dat.pntReqF = F;}},
	};
	oo.dat.parent = oo;
	return oo;
};*/