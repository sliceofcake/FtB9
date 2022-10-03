// Micromanaged Audio
var moonlight = {
	aliveF : T,
	debugF : F,
	// Where other files will add unit types to.
	bin : {},
	// Counter for ID generation.
	IDCounterN : 0,
	// Holds units with some metadata.
	unitEO : {},
	//
	immortalRecord : [],
	// Generate a tracer - an eternally unique value used in tracing propagation.
	// !!! Improve even though this is an unrealistic ask taken literally.
	genTracer : function(){
		return π.clcCurT();},
	// Generate a unit of the specified type and return it.
	gen : async function(o={}){
		// [!] We have to immediately freeze IDCounterN because of the ansync nature of this function.
		const IDCounterN = this.IDCounterN++;
		π.p(o,{typeS:"",nmeS:"UnnamedUnit#"+IDCounterN,tagS:"",clockGapN:N,prpMO:{},iniMO:{},bindingEA:[]});
		await µ.loadScript(Ω.mainDirectory+"shelf/local/moonlight/"+o.typeS+".js");
		
		if (this.bin[o.typeS] === U){
			lle("chip:[[[" + o.typeS + "]]] not loaded upon construction. Forgot to fix the first line of a copy-pasted chip?");}
		var res = this.bin[o.typeS]();
		π.ooas(res,{
			ID            : IDCounterN,
			nmeS          : o.nmeS,
			tagS          : o.tagS,
			typeS         : o.typeS,
			selectorRootS : ".moonlight.n"+IDCounterN,
			datPrevO      : {},
			tickWrapper   : function(){
				clearTimeout(this.tmoE); // Guard against out-of-context call.
				var hedT = π.clcCurT();
				this.tick(hedT);
				var talT = π.clcCurT();
				var prcNxtDltT = (this.tickDltT) - (talT - hedT);if (prcNxtDltT < 0){prcNxtDltT = 0;}
				this.tmoE = setTimeout((function(that){return function(){that.tickWrapper();};})(this),prcNxtDltT*1000);},
			toString      : function(){
				return "["+this.nmeS+"(M"+this.typeS+" "+this.tagS+" #"+this.ID+")]";},});
		if (this.debugF){llc_d(0.6,"☾ | {gen    } "+res.toString());}
		π.ooaw(res,{
			nameInformalS : "",
			dependencySA  : [],
			importEO      : {},
			exportEO      : {},
			dat           : {},
			prpSA         : [], // Convenience variable auto-filled before an import call.
			frmS          : U, // Convenience variable auto-filled before an import call.
			chg           : function(prpS){return π.vInA(prpS,this.prpSA);}, // Convenience function for prpSA checks.
			chk           : function(prpS){return (π.vInA(prpS,this.prpSA) && nun(this.dat[prpS]));}, // Convenience function for prpSA checks.
			ctr           : ()=>{}, // Constructor.
			dtr           : ()=>{}, // Destructor, rarely needed; for cases where EventListeners are applied.
			import        : ()=>{},
			tick          : ()=>{},
			dbgPthFxn     : function(){llc(0,this.frmS+" -> "+this.toString()+":");ll(this.prpSA,"");},
			drawFrame     : U,
			bindingEA     : [],
			chain         : async function(){
				await moonlight.chain(this.ID);},
			// Binding looks like:
			// [
			//   {dstID : 77,bindingO:{"myprop" : ["theirprop"]}},
			//   {dstID : 88,bindingO:{"myprop" : ["theirprop"],"more" : ["stuff1","stuff2"]}},
			// ]
			// !!! consider rewriting this with deeper clash-avoiding, even though we currently don't expect src->dst entries to be multiply-bound
			bind          : async function(bindingEA){
				bindingEA.forEach(bindingE=>{
					var bindingEAI_this = this.bindingEA.findIndex(bindingE_find=>bindingE_find.dstID===bindingE.dstID);
					if (bindingEAI_this === -1){
						this.bindingEA.push({dstID:bindingE.dstID,bindingO:{}});
						bindingEAI_this = this.bindingEA.length - 1;}
					bindingE.bindingO.forEach((prpDstSA,prpSrcS)=>{
						prpDstSA.forEach(prpDstS=>{
							if (this.bindingEA[bindingEAI_this].bindingO[prpSrcS] === U){
								this.bindingEA[bindingEAI_this].bindingO[prpSrcS] = [];}
							this.bindingEA[bindingEAI_this].bindingO[prpSrcS].pushUnique(prpDstS);});});});
				
				// old
				//π.aaas(this.bindingOA,bindingOA);
				
				await moonlight.chain(this.ID);},
			unbind        : function(bindingEA){
				bindingEA.forEach(bindingE=>{
					var bindingEAI_this = this.bindingEA.findIndex(bindingE_find=>bindingE_find.dstID===bindingE.dstID);
					if (bindingEAI_this === -1){
						;}
					else{
						bindingE.bindingO.forEach((prpDstSA,prpSrcS)=>{
							if (this.bindingEA[bindingEAI_this].bindingO[prpSrcS] === U){return;}
							prpDstSA.forEach(prpDstS=>{
								this.bindingEA[bindingEAI_this].bindingO[prpSrcS].removeValueFirst(prpDstS);});
							if (this.bindingEA[bindingEAI_this].bindingO[prpSrcS].length === 0){
								delete this.bindingEA[bindingEAI_this].bindingO[prpSrcS];}});
						if (this.bindingEA[bindingEAI_this].bindingO.calcLength() === 0){
							this.bindingEA.removeIndex(bindingEAI_this);}}});
				
				// old
				//π.aaua(this.bindingOA,bindingOA);
				
				;},});
		
		// Auto-dat adder for IO.
		// Set to be explicit U.
		// Why not leave it at implicit U? I don't even remember anymore. It's just a reflex for me now.
		res.importEO.forEach((importE,importEOK)=>{
			if (Object.keys(res.dat).includes(importEOK) === F){
				res.dat[importEOK] = U;}});
		res.exportEO.forEach((exportE,exportEOK)=>{
			if (Object.keys(res.dat).includes(exportEOK) === F){
				res.dat[exportEOK] = U;}});
		
		// Add forced parameters.
		res.importEO.tracer = {};
		res.exportEO.tracer = {};
		
		res.importEO.forEach(importE=>{
			if (typeof importE.cleanFxn === "undefined"){importE.cleanFxn = v=>v;}
			if (typeof importE.trgF     === "undefined"){importE.trgF     = T   ;}});
		res.exportEO.forEach(exportE=>{
			if (typeof exportE.eqFxn === "undefined"){exportE.eqFxn = (a,b)=>a===b;}});
		await res.dependencySA.forEachAsync(async dependencyS=>{
			await µ.loadScript(Ω.mainDirectory+"shelf/local/moonlight/"+o.typeS+".js");});
		π.ooaw(res.dat,{
			parent : res ,
			tracer : U   ,});
		//π.ooaw(res.importEO,{
		//	tNow : {cleanFxn : v=>num(v),},});
		//π.ooaw(res.exportEO,{
		//	tNow : {eqFxn : (a,b)=>a===b,},});
		//π.ooaw(res.dat,{
		//	tx : [0,0,1  ,1   ],
		//	co : [0,1,0.5,1   ],
		//	bg : [0,0,0  ,0.85],});
		this.unitEO[res.ID] = res;
		await res.ctr();
		//ll(res.importEO.map((v,k)=>res.dat[k]));
		
		// [!] This used to be a part of the spec, but I no longer agree with this airdrop method of freakishly energizing circuits that exist behind gates. [8 Jan 2020]
		//await moonlight.import(res.ID,res.importEO.map((v,k)=>res.dat[k]));
		
		if (typeof res.drawFrame !== "undefined"){
			uniani.register(res.toString(),res);}
		if (typeof res.tick !== US && typeof res.tickDltT !== US){
			res.tickWrapper();}
		//if (o.clockGapN !== N){
		//	π.intervalCall(o.clockGapN,((ID)=>()=>{
		//		moonlight.import(ID,{tNow:π.clcCurT()});
		//	})(res.ID));}
		
		π.ooas(res.dat,o.iniMO);
		// [!] This used to be a part of the spec, but I no longer agree with this airdrop method of freakishly energizing circuits that exist behind gates. [8 Jan 2020]
		//await moonlight.import(res.ID,o.prpMO);
		
		res.bind(o.bindingEA);
		
		this.immortalRecord[res.ID] = res.toString();
		
		return res;},
	rip : function(m){
		// Support ID or unitE.
		var ID;{
			if (typeof m === "number"){ID = m;}
			else                      {ID = m.ID;}}
		// !!! Maybe in the future this should have a performant way of severing wires to the targeted unit.
		uniani.unregister(this.unitEO[ID].toString()); // OK to call even if never registered
		this.unitEO[ID].dtr();
		clearTimeout(this.unitEO[ID].tmoE);
		delete this.unitEO[ID];},
	get : function(nmeS,tagS){
		if (typeof tagS === US){tagS  = "";}
		//....
		// [!] Parse dirty hack for using "|" to delimit nmeS and tagS.
		//     The system was historically designed with only one ID string in mind.
		if (nmeS.includes("|")){
			var prtSA = nmeS.split("|");
			if (prtSA.length === 2){
				nmeS = prtSA[0];
				tagS = prtSA[1];}}
		//....
		var unitE = this.unitEO.find(unitE=>unitE.nmeS===nmeS&&unitE.tagS===tagS);
		if (unitE === U){return N;}
		return unitE;},
	
	clcDbgArwSFxn : function(chainLevelN){
		return (chainLevelN>=1?" ":"━")+("   ".repeat(chainLevelN-1))+(chainLevelN>=1?"┗━":"");},
	
	// Pump All Function.
	// Intended to be used after setting down all circuits while holding aliveF low.
	pmpAllFxn : async function(){
		await this.unitEO.forEachAsync(async (unitE,unitID)=>{
			await moonlight.chain(unitID);});},
	
	// moonlight.import(2,{tSeek:5,tNow:10})
	import : async function(unitDstID,prpMO,chainLevelN=0){
		if (!this.aliveF){return;}
		if (this.debugF){llc_d(0.6,"☾ | {imp-ext} ??? -> "+this.unitEO[unitDstID].toString()+" | "+π.jsonE(prpMO));}
		await this.importActual(unitDstID,prpMO,U,chainLevelN);},
	importInternal : async function(unitSrcID,unitDstID,prpMO,chainLevelN=0){
		if (!this.aliveF){return;}
		if (this.debugF){llc_d(0.6,"☾ | {imp-int} "+this.clcDbgArwSFxn(chainLevelN)+" "+this.unitEO[unitSrcID].toString()+" -> "+this.unitEO[unitDstID].toString()+" | "+(T?π.jsonE(prpMO):"[prpMO omitted for performance]"));}
		var dbg = F;
		if (this.unitEO[unitSrcID].ID === 32 && this.unitEO[unitDstID].ID === 34){
			dbg = T;}
		var hedT = π.clcCurT();
		await this.importActual(unitDstID,prpMO,unitSrcID,chainLevelN,dbg);
		var talT = π.clcCurT();
		if (this.debugF){llc_d(0.6,"☾ | {imp-int} "+this.clcDbgArwSFxn(chainLevelN)+" "+str(talT-hedT)+"s");} //(importInternal w/importActual w/chainInternal w/chainActual etc.)
		;},
	importActual : async function(unitID,prpMO,unitSrcID,chainLevelN=0,dbg=F){
		
		var hedT = π.clcCurT();
		
		// gate
		if (!this.aliveF){return;}
		
		// get unit in question
		var unitE = this.unitEO[unitID];
		if (unitE === U){
			llw("M unit:["+unitID+"] doesn't exist. (assumed to be an acceptable async destruction.)");return;}
		
		// remember old data
		//if (typeof unitE.datPrev === "undefined"){
		//	unitE.datPrev = π.krX(unitE.dat,Object.keys(unitE.exportEO.filter(exportE=>!exportE.withholdInitialF))).map(()=>U);
		//	ll(unitE.datPrev);}
		//else{
		//	unitE.datPrev = π.cc(π.krX(unitE.dat,Object.keys(unitE.exportEO)));}
		
		// feed in new data
		prpMO.forEach((prpM,prpOK)=>{
			if (typeof unitE.importEO[prpOK] === "undefined"){
				// [!] moved to build-time in [diagram.js].
				//if (prpOK.startsWith("moonlight-auto-gate-variable-")){
				//	// Add auto parameter.
				//	// !!! Have function for "cleaning" imp/exp additions (add default items).
				//	unitE.importEO[prpOK] = {cleanFxn : v=>v,trgF : T,};}
				//else{
				//	throw new Error("["+prpOK+"] not found in "+unitE.toString()+".importEO");}
				throw new Error("["+prpOK+"] not found in "+unitE.toString()+".importEO");}
			//ll("["+prpOK+"] assigned "+unitE.dat[prpOK]);
			unitE.dat[prpOK] = unitE.importEO[prpOK].cleanFxn(prpM);});
		
		// call unit-specific import()
		unitE.prpSA = [];
		unitE.frmS = ((this.unitEO[unitSrcID]===U)?(U):(this.unitEO[unitSrcID].toString()));
		// optimization feature - ignore non-trigger lines for performance
		prpMO.forEach((v,k)=>{
			if (unitE.importEO[k].trgF === F){
				;}
			else{
				unitE.prpSA.push(k);}});
		//if (prpMO.dspG === undefined){ll(prpMO,unitE,"");} // !!! DBG - see what is being piped around
		//if (moonlight.lol){ll(prpMO,unitE,"");} // !!! DBG - see what is being piped around
		if (unitE.prpSA.length > 0){
			await unitE.import(unitE.prpSA);}
		
		var talT = π.clcCurT();
		//ll("importActual "+str(talT-hedT)+"s");
		
		if (unitE.prpSA.length > 0){
			await this.chainInternal(unitID,chainLevelN);}
		
		;},
	
	chain : async function(unitID,chainLevelN=0){
		if (!this.aliveF){return;}
		if (this.debugF){llc_d(0.6,"☾ | {chn-ext} HED "+this.unitEO[unitID].toString());}
		var hedT = π.clcCurT();
		await this.chainActual(unitID,chainLevelN);
		var talT = π.clcCurT();
		//ll(talT - hedT);
		if (this.debugF){llc_d(0.6,"☾ | {chn-ext} END "+this.unitEO[unitID].toString()+" "+str(talT - hedT)+"s");}
		},
	chainInternal : async function(unitID,chainLevelN=0,dbg=F){
		if (!this.aliveF){return;}
		await this.chainActual(unitID,chainLevelN,dbg);},
	chainActual : async function(unitID,chainLevelN=0,dbg=F){
		
		var hedT = π.clcCurT();
		var talT;
		var bin0 = 0;
		var bin1 = 0;
		
		// gate
		if (!this.aliveF){return;}
		
		// get unit in question
		var unitE = this.unitEO[unitID];
		if (unitE === U){
			llw("M unit:["+unitID+"] doesn't exist. (assumed to be an acceptable async destruction.)");return;}
		
		// DBG
		//if (unitE.nmeS !== "Game Frame Lane External" && unitE.nmeS !== "Canvas Renderer"){
		//	ll("chainActual : "+unitE.toString());}
		
		//// awkward place, but oh well
		//// attempt to resolve and re-store squishy IDs into strict IDs for future cycle performance
		//var bindingOOKA = Object.keys(unitE.bindingOO);
		//bindingOOKA.forEach((bindingOOK)=>{
		//	if (isS(bindingOOK) === F){return;}
		//	var unitDstE = moonlight.get(bindingOOK);
		//	if (unitDstE === N){return;}
		//	unitE.bindingOO[str(unitDstE.ID)] = unitE.bindingOO[bindingOOK];
		//	delete unitE.bindingOO[bindingOOK];
		//	;});
		
		// Binding looks like:
		// [
		//   {dstID : 77,bindingO:{"myprop" : ["theirprop"]}},
		//   {dstID : 88,bindingO:{"myprop" : ["theirprop"],"more" : ["stuff1","stuff2"]}},
		// ]
		
		// chain into importing to other units
		await unitE.bindingEA.forEachAsync(async bindingE=>{
			
			hedT = π.clcCurT();
			
			var unitDstID = bindingE.dstID;
			//// speculative name just-in-time resolving to actual ID
			//// dirty solution, overlaps two data fields and results in ambiguity
			//if (isS(unitDstID) === T){ //if (!π.kInO(unitDstID,this.unitEO)){
			//	unitDstE = moonlight.get(unitDstID);
			//	if (unitDstE === N){return;} // fail-fast
			//	unitDstID = unitDstE.ID;}
			if (typeof unitE.datPrevO[unitDstID] === "undefined"){
				if (this.debugF){llc_d(0.6,"☾ | {first  } "+unitE.toString()+" -> "+this.unitEO[unitDstID].toString());}
				unitE.datPrevO[unitDstID] = {};}
			
			talT = π.clcCurT();
			bin0 += (talT - hedT);
			hedT = π.clcCurT();
			
			//// tracer insert.
			//var bindingAltO = π.cc(bindingE.bindingO);
			//bindingAltO.tracer = "tracer"; // !!! HERE - why does this line cause problems for unbinding lanes?
			//// !!! because tracer can be explicitly bound, this causes problems since moonlight cannot currently handle one-to-many paths for a one from-to chip pair.
			////     as a temporary hack, requiring all circuit diagrams using tracer to deliberately call out a tracer-tracer path and to only use it named as such as an import.
			////     in the future, bindingO should be a list of arbitrary from-to pairs.
			
			var prpMO = {};
			bindingE.bindingO.filter((prpDstSA,prpS)=>{
				var vPrev = unitE.datPrevO[unitDstID][prpS];
				var vCurr = unitE.dat                [prpS];
				
				// [!] Debugging un-comment.
				if (typeof unitE.exportEO[prpS] === US || typeof unitE.exportEO[prpS].eqFxn === US){
					// [!] moved to build-time in [diagram.js].
					//if (prpS.startsWith("moonlight-auto-gate-variable-")){
					//	// Add auto parameter.
					//	// !!! Have function for "cleaning" imp/exp additions (add default items).
					//	unitE.exportEO[prpS] = {eqFxn : (a,b)=>a===b,};}
					//else{
					//	lle("BAD CONFIG\nunit:"+unitE.toString()+"\n"+"property:"+prpS);}
					lle("bad config of [[[.exportEO]]].\nunit:"+unitE.toString()+"\n"+"property:"+prpS);}
				
				var prpChangedF = !unitE.exportEO[prpS].eqFxn(vPrev,vCurr,unitE.dat);
				if (!prpChangedF){return F;} // fail-fast : no change
				return T;
			}).forEach((prpDstSA,prpS)=>{
				prpDstSA.forEach(prpDstS=>{
					var vCurr = unitE.dat[prpS];
					unitE.datPrevO[unitDstID][prpS] = vCurr;
					prpMO[prpDstS] = vCurr;});});
			if (prpMO.calcLength() === 0){return;} // fail-fast : nothing to push
			
			talT = π.clcCurT();
			bin1 += (talT - hedT);
			
			await this.importInternal(unitID,unitDstID,prpMO,chainLevelN+1);
			
			;})
		
		if (this.debugF){
			ll("TIMING | chainActual | bin0:"+str(bin0)+"s | bin1:"+str(bin1)+"s | "+unitE.toString());}
		
		;},
};