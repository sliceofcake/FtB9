// !!! HERE - simplify the flow.
//            bring p.cnvFxn() into here for a nice internal format.

/*
API:
sigma.get({urlS,typS})
	if not in memory
		request -> analyze -> consume
	return entry

extract
	urlS,typS
	datM
	lookup or fetch() and store
fetch
	urlS
	datS
	sends xhr, returns promise

absorb
	urlS,typS
	;
	calls extract(), then preAbsorb() depending on the type
preAbsorb
	datM,typS
	;
	calls absorb on insides if this is a "collection"
prcSdeIdx
	datM,typS
	;
	defunct
....
resolveAddress
	srvS,idS,urlS,service,id,url
	adrS
	ENDCAP for resolving a mystery into a url
*/



var σ = {
	api : {
		parent : U, // set later
		//absorb : function(i={}){i = π.cc(i);var o = {staF:F};
		//	π.p(i,{service:N,id:N,proxy:U,instigator:U,type:U});
		//	π.p(o,{});
		//	var {staF} = this.parent.absorb({srvS:i.service,idS:i.id,prxS:i.proxy,insS:i.instigator,typS:i.type});
		//	o.staF = staF;
		//	return o;
		//},
	},
	
	//db : {
	//	chart : [],},
	
	timeoutDltT : 60,
	tmoFrsDltT : 60,
	tmoRqsDltT : 60,
	
	//
	prxS : U, //"http://localhost:57500",
	
	// master storage of rows, without any data-type bias
	storage : {},
	
	// data-type-biased secondary storage of rows of interest
	flat    : {},
	
	//
	get : async function(i={}){i = π.cc(i);var o = {staF:F};
		π.p(i,{urlS:U,adrM:U,typS:U,urlSlfS:U});
		π.p(o,{datM:U});
		llcf([0,0,0.75,1],"get"+JSON.stringify(i));
		return new Promise(async resolveFxn=>{
			
			// Enforce import compliance.
			if (i.urlS === U && i.adrM === U){
				llw("σ.get() missing one of required i.urlS,i.adrM");
				resolveFxn(π.ooas(o,{staF:F}));return;}
			if (i.typS === U){
				llw("σ.get() missing required i.typS");
				resolveFxn(π.ooas(o,{staF:F}));return;}
			var urlS;{
				if (i.urlS === U){
					var _0 = await this.resolveAddress({adrM:i.adrM,urlSlfS:i.urlSlfS});if (_0.staF === F){resolveFxn(π.ooas(o,{staF:F}));return;}
					urlS = _0.adrS;}
				else{
					var _0 = await this.resolveAddress({adrM:i.urlS,urlSlfS:i.urlSlfS});if (_0.staF === F){resolveFxn(π.ooas(o,{staF:F}));return;}
					urlS = _0.adrS;}}
			
			// CORS erroring sites are annoying me. Block them.
			var urlM = new URL(urlS);
			if (urlM.hostname === "drive.google.com"){
				llw("Google Drive is blocked because it's known to be unreliable with regard to CORS, redirection, and bot detection.");
				resolveFxn(π.ooas(o,{staF:F}));return;}
			
			// If row exists and is fresh-ish, return it immediately.
			var rowE = this.storage[urlS];
			if (rowE !== U && π.clcCurT() - rowE.rcvT < this.tmoFrsDltT){
				resolveFxn(π.ooas(o,{staF:T,datS:rowE.datS,datM:rowE.datM,datAltM:rowE.datAltM}));return;}
			
			// Request it, process it, and return it.
			var _0 = await this.request  ({urlS:urlS                                                         });if (_0.staF === F){resolveFxn(π.ooas(o,{staF:F}));return;}
			var _1 = await this.analyze  ({          datS:_0.datS                                ,typS:i.typS});if (_1.staF === F){resolveFxn(π.ooas(o,{staF:F}));return;}
			var _2 = await this.normalize({urlS:urlS             ,datM:_1.datM                   ,typS:i.typS});if (_2.staF === F){resolveFxn(π.ooas(o,{staF:F}));return;}
			var _3 = await this.consume  ({urlS:urlS,datS:_0.datS,datM:_1.datM,datAltM:_2.datAltM,typS:i.typS});if (_3.staF === F){resolveFxn(π.ooas(o,{staF:F}));return;}
			var _4 = await this.follow   ({urlS:urlS,             datM:_1.datM                   ,typS:i.typS});
			
			var rowE = this.storage[urlS];
			resolveFxn(π.ooas(o,{staF:T,datS:rowE.datS,datM:rowE.datM,datAltM:rowE.datAltM}));return;});},
	
	request : async function(i={}){i = π.cc(i);var o = {staF:F};
		π.p(i,{urlS:U});
		π.p(o,{datS:U});
		return new Promise(async resolveFxn=>{
			
			// Enforce import compliance.
			if (i.urlS === U){
				llw("σ.request() missing required i.urlS");
				resolveFxn(π.ooas(o,{staF:F}));return;}
			
			// Fetch.
			var xhr = new XMLHttpRequest();
			xhr.timeout = this.tmoRqsDltT * 1000;
			xhr.addEventListener("abort"   ,(function(i,o,resolveFxn){return function(){resolveFxn(π.ooas(o,{staF:F                       }));};})(i,o,resolveFxn));
			xhr.addEventListener("error"   ,(function(i,o,resolveFxn){return function(){resolveFxn(π.ooas(o,{staF:F                       }));};})(i,o,resolveFxn));
			xhr.addEventListener("load"    ,(function(i,o,resolveFxn){return function(){resolveFxn(π.ooas(o,{staF:T,datS:this.responseText}));};})(i,o,resolveFxn));
			//xhr.addEventListener("progress",()=>{});
			xhr.open("GET",this.cnvUrlFxn(i.urlS),T);
			
			// We want this header, but including it will be enough to trigger the "preflight" CORS bullshit, which no one supports.
			// So we'd rather dodge CORS than allow for no-cache.
			//xhr.setRequestHeader("Cache-Control","no-cache"); // For modern servers.
			
			//xhr.setRequestHeader("Pragma","no-cache"); // For legacy servers.
			// Yet another CORS bullshit effect - xhr.send() can emit a console error that is undetectable and unblockable.
			xhr.send();
			return;});},
	
	analyze : async function(i={}){i = π.cc(i);var o = {staF:F};
		π.p(i,{datS:U,typS:U});
		π.p(o,{datM:U});
		return new Promise(async resolveFxn=>{
			
			// Enforce import compliance.
			if (i.datS === U){
				llw("σ.analyze() missing required i.datS");
				resolveFxn(π.ooas(o,{staF:F}));return;}
			if (i.typS === U){
				llw("σ.analyze() missing required i.typS");
				resolveFxn(π.ooas(o,{staF:F}));return;}
			
			// Parse.
			var prsF = F;
			do {
				// Is it JSON?
				var {staF,datM} = datax.json.decode({datS:i.datS});if (staF === T){prsF = T;break;}
				// Is it ...?
				;}
			while (F);
			if (prsF === F){
				llw("σ.analyze() didn't know how to parse:");
				llw(i.datS);
				try {JSON.parse(i.datS);}
				catch (errM){llw(errM);}
				resolveFxn(π.ooas(o,{staF:F}));return;}
			
			resolveFxn(π.ooas(o,{staF:T,datM}));return;});},
	
	normalize : async function(i={}){i = π.cc(i);var o = {staF:F};
		π.p(i,{urlS:U,datM:U,typS:U});
		π.p(o,{datAltM:U});
		return new Promise(async resolveFxn=>{
			
			// Enforce import compliance.
			if (i.urlS === U){
				llw("σ.normalize() missing required i.urlS");
				resolveFxn(π.ooas(o,{staF:F}));return;}
			if (i.datM === U){
				llw("σ.normalize() missing required i.datM");
				resolveFxn(π.ooas(o,{staF:F}));return;}
			if (i.typS === U){
				llw("σ.normalize() missing required i.typS");
				resolveFxn(π.ooas(o,{staF:F}));return;}
			
			// Convert using lots of smarts.
			var rowSdeIdxE = this.lkpFxn(i.urlS);
			var datAltM = {};
			
			switch (i.typS){default : {datAltM = π.cc(i.datM);}
				break;case "chart" : {
					
					// Website.
					datAltM.locS;{
						if (i.urlS.startsWith("blob:") === T){
							datAltM.locS = "Local";}
						else{
							var urlM = new URL(i.urlS);
							if (F){;}
							else if (urlM.hostname === "raw.githubusercontent.com"){
								datAltM.locS = "GitHub";}
							else if (urlM.hostname === "feelthebeats.se" && urlM.pathname === "/gomi/auto-sigma-ftb4.php"){
								datAltM.locS = "FtB Museum";}
							else if (urlM.hostname === "feelthebeats.se" && urlM.pathname.startsWith("/gomi/sigma-sandbox/")){
								datAltM.locS = "FtB Sandbox";}
							else if (urlM.hostname === "feelthebeats.se" && urlM.pathname.startsWith("/kern/sigma/chart/")){
								datAltM.locS = "KERN";}
							else{
								datAltM.locS = "???";}}}
					
					// Text file URL.
					datAltM.urlTxtS;{
						datAltM.urlTxtS = U;
						var adrM;{
							adrM = U;
							if (adrM === U){adrM = jjj([i.datM,"chart"],U);}}
						if (adrM !== U){
							var {staF,adrS} = await this.resolveAddress({adrM,urlSlfS:i.urlS});
							if (staF === T){
								datAltM.urlTxtS = adrS;}}}
					
					// Audio file URL.
					datAltM.urlAudS;{
						datAltM.urlAudS = U;
						var adrM;{
							adrM = U;
							if (adrM === U){adrM = jjj([i.datM,"audio"],U);}}
						if (adrM !== U){
							var {staF,adrS} = await this.resolveAddress({adrM,urlSlfS:i.urlS});
							if (staF === T){
								datAltM.urlAudS = adrS;}}}
					
					// Audio Decode Function.
					datAltM.audDcdFxnS;{
						datAltM.audDcdFxnS = U;
						if (datAltM.audDcdFxnS === U){datAltM.audDcdFxnS = jjjcl([i.datM,"audio-decode-function"],"",U);}}
					
					// Source Image.
					datAltM.srcImgS;{
						datAltM.srcImgS = U;
						var adrIcnM;{
							adrIcnM = U;
							if (adrIcnM === U){adrIcnM = jjj  ([i.datM,"icon" ]   ,U);}
							if (adrIcnM === U){adrIcnM = jjjcl([i.datM,"image"],"",U);}}
						if (adrIcnM !== U){
							var {staF,adrS} = await this.resolveAddress({adrM:adrIcnM,urlSlfS:i.urlS});
							if (staF === T){
								datAltM.srcImgS = adrS;}}}
					
					// Title.
					datAltM.ttlS;{
						datAltM.ttlS = U;
						if (datAltM.ttlS === U){datAltM.ttlS = jjjcl([i.datM,"title"],"",U);}
						if (datAltM.ttlS === U){datAltM.ttlS = jjjcl([i.datM,"name" ],"",U);}}
					
					// Duration.
					datAltM.durN;{
						datAltM.durN = U;
						if (datAltM.durN === U){datAltM.durN = jjjcl([rowSdeIdxE,"chart","time-maximum"],0,U);}
						if (datAltM.durN === U){datAltM.durN = jjjcl([i.datM,"duration"],0,U);}}
					datAltM.durS;{
						datAltM.durS = U;
						if (datAltM.durN !== U){
							var durN = Math.round(datAltM.durN);
							var durSecN = durN % 60;
							var durMntN = Math.round((durN - durSecN) / 60);
							datAltM.durS = durMntN + ":" + π.padLAbs(durSecN,2,"0");}}
					
					// Notes Per Second.
					datAltM.dfcN;{
						datAltM.dfcN = U;
						if (datAltM.dfcN === U){datAltM.dfcN = jjjcl([rowSdeIdxE,"chart","difficulty"],0,U);}
						if (datAltM.dfcN === U){
							do{
								var durDltT = datAltM.durN                                ;if (durDltT === U){break;}
								var nteC    = jjjcl([rowSdeIdxE,"chart","note-count"],0,U);if (nteC    === U){break;}
								datAltM.dfcN = Math.round(nteC / durDltT);}while(F);}}
					
					// Lanes.
					datAltM.lneC;{
						datAltM.lneC = U;
						if (datAltM.lneC === U){datAltM.lneC = jjjcl([rowSdeIdxE,"chart","lane-count"],0,U);}
						if (datAltM.lneC === U){datAltM.lneC = jjjcl([i.datM,"lane-count"],0,U);}
						if (datAltM.lneC === U){datAltM.lneC = jjjcl([i.datM,"lanes"],0,U);}
						if (datAltM.lneC === U){datAltM.lneC = jjjcl([i.datM,"keys" ],0,U);}}
					
					// Origin.
					datAltM.oriS;{
						datAltM.oriS = U;
						if (datAltM.oriS === U){datAltM.oriS = jjjcl([i.datM,"origin"],"",U);}
						if (datAltM.oriS === U){datAltM.oriS = jjjcl([i.datM,"from"  ],"",U);}
						if (datAltM.oriS === U){datAltM.oriS = jjjcl([i.datM,"album" ],"",U);}
						if (datAltM.oriS === U){datAltM.oriS = jjjcl([i.datM,"game"  ],"",U);}
						if (datAltM.oriS === U){datAltM.oriS = jjjcl([i.datM,"ost"   ],"",U);}}
					
					//// Creator.
					//datAltM.crrS;{
					//	datAltM.crrS = U;
					//	if (datAltM.crrS === U){datAltM.crrS = jjjcl([i.datM,"creator" ],"",U);}
					//	if (datAltM.crrS === U){datAltM.crrS = jjjcl([i.datM,"artist"  ],"",U);}
					//	if (datAltM.crrS === U){datAltM.crrS = jjjcl([i.datM,"composer"],"",U);}}
					
					// Charter.
					datAltM.ctrS;{
						datAltM.ctrS = U;
						var adrM;{
							adrM = U;
							if (adrM === U){adrM = jjj([i.datM,"charter"  ],U);}
							if (adrM === U){adrM = jjj([i.datM,"mapper"   ],U);}
							if (adrM === U){adrM = jjj([i.datM,"submitter"],U);}}
						if (adrM !== U){
							var {staF,datM} = await this.get({adrM,typS:"person",urlSlfS:i.urlS});
							if (staF === T){
								datAltM.ctrS = jjjcl([datM,"name"],"",U);}}}
					
					// Info.
					datAltM.infS;{
						datAltM.infS = U;
						if (datAltM.infS === U){datAltM.infS = jjjcl([i.datM,"information"],"",U);}
						if (datAltM.infS === U){datAltM.infS = jjjcl([i.datM,"info"       ],"",U);}}
					
					;}
				break;case "" : {;};}
			
			resolveFxn(π.ooas(o,{staF:T,datAltM}));return;});},
	
	consume : async function(i={}){i = π.cc(i);var o = {staF:F};
		π.p(i,{urlS:U,datS:U,datM:U,datAltM:U,typS:U});
		π.p(o,{});
		return new Promise(async resolveFxn=>{
			
			// Enforce import compliance.
			if (i.urlS === U){
				llw("σ.consume() missing required i.urlS");
				resolveFxn(π.ooas(o,{staF:F}));return;}
			if (i.datS === U){
				llw("σ.consume() missing required i.datS");
				resolveFxn(π.ooas(o,{staF:F}));return;}
			if (i.datM === U){
				llw("σ.consume() missing required i.datM");
				resolveFxn(π.ooas(o,{staF:F}));return;}
			if (i.datAltM === U){
				llw("σ.consume() missing required i.datAltM");
				resolveFxn(π.ooas(o,{staF:F}));return;}
			if (i.typS === U){
				llw("σ.consume() missing required i.typS");
				resolveFxn(π.ooas(o,{staF:F}));return;}
			
			//// Store.
			//// [!] Currently won't try to guess the type - needs to be explicitly told upfront what the type is.
			//// Is it FtB4 auto-sigma?
			//// !!! Not great because a future [batching] naive sigma refresher might hit this file a lot.
			//if (isA(datM) === T && datM[0] === "auto-sigma-ftb4"){
			//	//ll("("+i.typS+") "+i.urlS);
			//	datM.shift(); // Cut off the special, non-data value.
			//	datM.forEach(rowE=>{
			//		// [E] file path: "https://feelthebeats.se/gomi/auto-sigma-ftb4-unzip/8/easy.txt"
			//		// [E] name: "Vocals"
			//		// [E] note count: "145"
			//		// [E] nps: "2"
			//		["E","M","H","I"].forEach(mdeS=>{
			//			if (rowE["["+mdeS+"] note count"] !== ""){
			//				var rowAltE = π.cc(rowE);
			//				var typS = "chart";
			//				var urlS = i.urlS+"#"+rowAltE.ID+"-"+mdeS;
			//				rowAltE.chart = rowE["["+mdeS+"] file path"];
			//				rowAltE["note-count"] = rowE["["+mdeS+"] note count"];
			//				this.storage[urlS] = {datS,datM:rowAltE,rcvT:π.clcCurT()};
			//				if (typS !== U){
			//					sss([this.flat,typS,urlS],rowAltE);}}
			//			;});
			//		;});}
			//// Default.
			//else{
			//	this.storage[i.urlS] = {datS,datM,rcvT:π.clcCurT()};
			//	if (i.typS !== U){
			//		sss([this.flat,i.typS,i.urlS],datM);}}
			
			// Add to general storage.
			this.storage[i.urlS] = {
				urlS    : i.urlS,
				datS    : i.datS,
				datM    : i.datM,
				datAltM : i.datAltM,
				typS    : i.typS,
				rcvT    : π.clcCurT()};
			
			// Add reference copy to specific storage.
			sss([this.flat,i.typS,i.urlS],this.storage[i.urlS]);
			
			resolveFxn(π.ooas(o,{staF:T}));return;});},
	
	follow : async function(i={}){i = π.cc(i);var o = {staF:F};
		π.p(i,{urlS:U,datM:U,typS:U});
		π.p(o,{});
		return new Promise(async resolveFxn=>{
			
			// Enforce import compliance.
			if (i.urlS === U){
				llw("σ.follow() missing required i.urlS");
				resolveFxn(π.ooas(o,{staF:F}));return;}
			if (i.datM === U){
				llw("σ.follow() missing required i.datM");
				resolveFxn(π.ooas(o,{staF:F}));return;}
			if (i.typS === U){
				llw("σ.follow() missing required i.typS");
				resolveFxn(π.ooas(o,{staF:F}));return;}
			
			// For each type, what links it might contain.
			var cleSA = [];
			switch (i.typS){default:{;}
				break;case "index"  : {cleSA.push("person");}
				break;case "person" : {
					// Only allow through approved charters based on the index file.
					// You may reach "person" entries by other means, hence the necessity of this check.
					var _0 = await this.isAllowedCharter({urlS:i.urlS});if (_0.staF === F){break;}
					if (_0.vldF === F){break;}
					cleSA.push("chart");};}
			await cleSA.forEachAsync(async cleS=>{
				var typCleS = cleS + "-collection";
				if (i.datM[typCleS] === U){
					resolveFxn(π.ooas(o,{staF:T}));return;}
				// If a string instead of an array, interpret as a one-element array.
				var datEA = ((isA(i.datM[typCleS]) === T) ? (i.datM[typCleS]) : ([{urlS:i.datM[typCleS]}]));
				await datEA.forEachAsync(async datE=>new Promise(async resolveFxn_1=>{
					var _0 = await this.resolveAddress({adrM:datE,urlSlfS:i.urlS});if (_0.staF === F){resolveFxn_1();return;}
					var _1 = await this.get({urlS:_0.adrS,typS:cleS});
					resolveFxn_1();return;}));});
			
			resolveFxn(π.ooas(o,{staF:T}));return;});},
	
	
	
	cnvUrlFxn : function(urlS){
		if (this.prxS !== U){
			return this.prxS + "/?r=" + encodeURIComponent(urlS);} //index.php/?r=...
		else{
			return urlS;}},
	
	// Lookup Function (using the side-index).
	lkpFxn : function(rowUrlS){
		var res = U;
		//ll("lkpFxn");
		jjjc([this,"flat","side-index"],{}).any(rowSdeIdxE=>{
			jjjc([rowSdeIdxE,"datAltM","chart-collection"],[]).any(crtE=>{
				//ll(jjj([crtE,"url"],U)+" vs "+rowUrlS);
				if (this.urlUrlEqlFxn(jjj([crtE,"url"],U),rowUrlS) === T){
					res = crtE;
					return T;}
				return F;});
			return (res !== U);});
		return res;},
	
	// Renormalize, chiefly after a new side-index is consumed.
	renormalize : async function(i={}){i = π.cc(i);var o = {staF:F};
		π.p(i,{});
		π.p(o,{});
		return new Promise(async resolveFxn=>{
			await this.storage.forEachAsync(async rowE=>{
				var _0 = await this.normalize({urlS:rowE.urlS               ,datM:rowE.datM                   ,typS:rowE.typS});if (_0.staF === F){resolveFxn(π.ooas(o,{staF:F}));return;}
				var _1 = await this.consume  ({urlS:rowE.urlS,datS:rowE.datS,datM:rowE.datM,datAltM:_0.datAltM,typS:rowE.typS});if (_1.staF === F){resolveFxn(π.ooas(o,{staF:F}));return;}
				;});
			resolveFxn(π.ooas(o,{staF:T}));return;});},
	
	// [!] Interspersed code duplication with follow().
	isAllowedCharter : async function(i={}){i = π.cc(i);var o = {staF:F};
		π.p(i,{urlS:U});
		π.p(o,{});
		return new Promise(async resolveFxn=>{
			
			// Enforce import compliance.
			if (i.urlS === U){
				llw("σ.isAllowedCharter() missing required i.urlS");
				resolveFxn(π.ooas(o,{staF:F}));return;}
			
			var urlIdxSA = Object.values(jjjc([this,"flat","index"],{}));
			var vldF = await urlIdxSA.anyAsync(async idxE=>{
				if (idxE === U){return F;}
				var datM = jjjc([idxE,"datAltM","person-collection"],[]);
				// If a string instead of an array, interpret as a one-element array.
				var datEA = ((isA(datM) === T) ? (datM) : ([{urlS:datM}]));
				var urlSA = [];
				await datEA.forEachAsync(async datE=>new Promise(async resolveFxn_1=>{
					var _0 = await this.resolveAddress({adrM:datE,urlSlfS:jjj([idxE,"urlS"])});if (_0.staF === F){resolveFxn_1();return;}
					urlSA.push(_0.adrS);
					resolveFxn_1();return;}));
				var vldF = urlSA.any(urlS=>{
					if (this.urlUrlEqlFxn(urlS,i.urlS) === T){return T;}
					return F;});
				return vldF;});
			
			resolveFxn(π.ooas(o,{staF:T,vldF}));return;});},
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/*
	// URL -> Data Entity
	extract : async function(i={}){i = π.cc(i);var o = {staF:F};
		π.p(i,{urlS:U,typS:U}); // [!] This need not conform to this style, this is just the temporary favored style.
		π.p(o,{datM:U});
		//ll("extract("+datax.json.encode({datM:i}).datS+")");
		if (i.urlS === U){
			return new Promise(async (resolveFxn,rejectFxn)=>{
				llw("(Auto) σ.extract() missing required i.urlS");
				resolveFxn({staF:F});
				return;});}
		if (i.typS === U){
			return new Promise(async (resolveFxn,rejectFxn)=>{
				llw("(Auto) σ.extract() missing required i.typS");
				resolveFxn({staF:F});
				return;});}
		return new Promise(async (resolveFxn,rejectFxn)=>{
			
			// If row exists and is fresh-ish, return it immediately.
			var rowE = jjj([this.storage,i.urlS],U);
			if (rowE !== U && π.clcCurT() - rowE.rcvT < this.timeoutDltT){
				ll("sigma : already got it!");
				o.datM = rowE.datM;
				o.staF = T;
				resolveFxn(o);
				return;}
			
			// Fetch.
			var {staF,datS} = await this.fetch({urlS:i.urlS});
			if (staF === F){
				llw("(Auto) σ.extract() : σ.fetch() ERR:" + i.urlS);
				o.staF = F;
				resolveFxn(o);
				return;}
			
			// Parse.
			var prsF = F;
			do {
				
				// Is it JSON?
				var {staF,datM} = datax.json.decode({datS});
				if (staF === T){
					prsF = T;
					break;}
				
				;}
			while(F);
			if (prsF === F){
				llw("(Auto) σ.extract() : didn't know how to parse:" + datS);llw(JSON.parse(datS));
				o.staF = F;
				resolveFxn(o);
				return;}
			
			// Store.
			// [!] Currently won't try to guess the type - needs to be explicitly told upfront what the type is.
			// Is it FtB4 auto-sigma?
			// !!! Not great because a future [batching] naive sigma refresher might hit this file a lot.
			if (isA(datM) === T && datM[0] === "auto-sigma-ftb4"){
				//ll("("+i.typS+") "+i.urlS);
				datM.shift(); // Cut off the special, non-data value.
				datM.forEach(rowE=>{
					// [E] file path: "https://feelthebeats.se/gomi/auto-sigma-ftb4-unzip/8/easy.txt"
					// [E] name: "Vocals"
					// [E] note count: "145"
					// [E] nps: "2"
					["E","M","H","I"].forEach(mdeS=>{
						if (rowE["["+mdeS+"] note count"] !== ""){
							var rowAltE = π.cc(rowE);
							var typS = "chart";
							var urlS = i.urlS+"#"+rowAltE.ID+"-"+mdeS;
							rowAltE.chart = rowE["["+mdeS+"] file path"];
							rowAltE["note-count"] = rowE["["+mdeS+"] note count"];
							this.storage[urlS] = {datS,datM:rowAltE,rcvT:π.clcCurT()};
							if (typS !== U){
								sss([this.flat,typS,urlS],rowAltE);}}
						;});
					;});}
			// Default.
			else{
				this.storage[i.urlS] = {datS,datM,rcvT:π.clcCurT()};
				if (i.typS !== U){
					sss([this.flat,i.typS,i.urlS],datM);}}
			
			o.datM = datM;
			o.staF = T;
			resolveFxn(o);
			return;});},
	*/
	//// Does the same thing as resolve(), but does it with "any" structure given.
	//resolveTolerant : async function(i={}){i = π.cc(i);var o = {staF:F};
	//	π.p(i,{datM:U,prxS:U,typS:U}); // [!] This need not conform to this style, this is just the temporary favored style.
	//	π.p(o,{datM:U,keyHshS:U});
	//	return new Promise(async (resolveFxn,rejectFxn)=>{
	//		// Currently, only this one format is supported.
	//		var {datM,keyHshS} = await this.resolve({srvS:i.datM.service,idS:i.datM.id,prxS:i.prxS,typS:i.typS});
	//		o.datM    = datM;
	//		o.keyHshS = keyHshS;
	//		o.staF = T;
	//		resolveFxn(o);
	//		return;});},
	
	// Data Entity Location Description -> URL
	resolveAddress : async function(i={}){i = π.cc(i);var o = {staF:F};
		π.p(i,{adrM:U,urlSlfS:U});
		π.p(o,{adrS:U});
		//ll("resolveAddress("+datax.json.encode({datM:i}).datS+")");
		return new Promise(async (resolveFxn,rejectFxn)=>{
			
			// Enforce import compliance.
			if (i.adrM === U){
				llw("σ.resolveAddress() missing required i.adrM");
				resolveFxn(π.ooas(o,{staF:F}));return;}
			
			if (isS(i.adrM)){i.adrM = {urlS:i.adrM};} // Support short-form string assumed to be a URL.
			if (!isO(i.adrM)){
				llw("(Auto) σ.resolveAddress() : couldn't make sense of address : "+datax.json.encode({datM:i}).datS);
				o.staF = F;
				resolveFxn(o);
				return;}
			var urlS;
			var urlCndF_0 = (i.adrM.urlS !== U);
			var urlCndF_1 = (i.adrM.url !== U);
			if (urlCndF_0 || urlCndF_1){
				var urlS;
				if (urlCndF_0){
					urlS = i.adrM.urlS;}
				else if (urlCndF_1){
					urlS = i.adrM.url;}
				else{lle("can't happen.");}}
			else{
				llw("(Auto) σ.resolveAddress() : couldn't make sense of address : "+datax.json.encode({datM:i}).datS);
				o.staF = F;
				resolveFxn(o);
				return;}
			
			// If relative path, resolve appropriately.
			if (urlS.startsWith("./") || urlS.startsWith("../")){
				if (i.urlSlfS === U){
					llw("(Auto) σ.resolveAddress() : shouldn't happen - blame programmer : "+datax.json.encode({datM:i}).datS);
					o.staF = F;
					resolveFxn(o);
					return;}
				
				// If no protocol, prepend https ([[[new URL]]] is inflexible).
				var urlSlfS;{
					urlSlfS = i.urlSlfS;
					if (RegExp("^[A-Za-z0-9_-]+?\:\/\/").test(urlSlfS) === F){
						urlSlfS = "https://"+urlSlfS;}}
				
				var urlM;{
					try {
						urlM = new URL(urlS,urlSlfS);}
					catch (errM){
						llw("σ.resolveAddress() failed [[[new URL]]] check (during parse) for : "+urlS+" "+urlSlfS+" : "+datax.json.encode({datM:i}).datS);
						resolveFxn(π.ooas(o,{staF:F}));return;}}
				
				//llc(0.3,"now [[["+urlM.href+"]]]");
				urlS = urlM.href;}
			
			// If no protocol, prepend https.
			// [!] Allow "blob:blahblahblah".
			if (RegExp("^[A-Za-z0-9_-]+?\:").test(urlS) === F){
				urlS = "https://"+urlS;}
			
			// Final check if it's a valid URL.
			// If it's not, the problem will snowball.
			// At the very least, the proxy will freak out in a surprisingly inept way. [23 Dec 2020]
			// !!! The [[[new URL]]] method basically accepts anything as long as it starts with [[[http:]]]. Wow.
			{
				var urlM;{
					try {
						urlM = new URL(urlS);}
					catch (errM){
						llw("σ.resolveAddress() failed final check (during parse) for : "+urlS+" : "+datax.json.encode({datM:i}).datS);
						resolveFxn(π.ooas(o,{staF:F}));return;}}
				if (urlM.protocol !== "http:" && urlM.protocol !== "https:" && urlM.protocol !== "blob:"){
					llw("σ.resolveAddress() failed final check (not http/https/blob) for : "+urlS+" : "+datax.json.encode({datM:i}).datS);
					resolveFxn(π.ooas(o,{staF:F}));return;}
			}
			
			o.adrS = urlS;
			o.staF = T;
			resolveFxn(o);
			return;});},
	/*
	absorb : async function(i={}){i = π.cc(i);var o = {staF:F};
		π.p(i,{urlS:U,typS:U});
		π.p(o,{});
		//ll("absorb("+datax.json.encode({datM:i}).datS+")");
		return new Promise(async (resolveFxn,rejectFxn)=>{
			var {staF,datM} = await this.extract({urlS:i.urlS,typS:i.typS});
			if (staF === F){
				llw("(Auto) σ.absorb() : σ.extract() ERR");
				o.staF = F;
				resolveFxn(o);
				return;}
			
			//await p.renderTable();
			
			// For each type, what links might it contain?
			switch (i.typS){default:;
				break;case "index"      : await this.preAbsorb({datM,typS:"person"});
				break;case "person"     : await this.preAbsorb({datM,typS:"chart" });
				break;case "side-index" : await this.prcSdeIdx({datM});
				;}
			o.staF = T;
			resolveFxn(o);
			return;});},
	
	preAbsorb : async function(i={}){i = π.cc(i);var o = {staF:F};
		π.p(i,{datM:U,typS:U});
		π.p(o,{});
		//ll("preAbsorb("+datax.json.encode({datM:i}).datS+")");
		return new Promise(async (resolveFxn,rejectFxn)=>{
			var typColS = i.typS + "-collection";
			if (typeof i.datM[typColS] === "undefined"){
				llw("(Auto) σ.preAbsorb() : could not find collection array");
				o.staF = F;
				resolveFxn(o);
				return;}
			// Rewrite sole string as a one-entry urlS entry.
			if (isA(i.datM[typColS]) === F){
				i.datM[typColS] = [{urlS:i.datM[typColS]}];}
			
			i.datM[typColS].forEachAsync(async e=>
				new Promise(async (resolve1Fxn,reject1Fxn)=>{
					var {staF,adrS} = await this.resolveAddress(e);
					if (staF === F){
						llw("(Auto) σ.preAbsorb() : σ.resolveAddress() ERR");
						o.staF = F;
						resolve1Fxn(o);
						return;}
					
					await this.absorb({urlS:adrS,typS:i.typS});
					o.staF = T;
					resolve1Fxn(o);
					return;}));
			o.staF = T;
			resolveFxn(o);
			return;});},
	
	prcSdeIdx : async function(i={}){i = π.cc(i);var o = {staF:F};
		π.p(i,{datM:U,typS:U});
		π.p(o,{});
		//ll("preAbsorb("+datax.json.encode({datM:i}).datS+")");
		return new Promise(async (resolveFxn,rejectFxn)=>{
			//ll("prcSdeIdx:",i.datM); // These days, we handle the return data in main by polling.
			o.staF = T;
			resolveFxn(o);
			return;});},
	
	fetch : async function(i={}){i = π.cc(i);var o = {staF:F};
		π.p(i,{urlS:U});
		π.p(o,{datS:U});
		//ll("fetch("+datax.json.encode({datM:i}).datS+")");
		//ll("fetch("+datax.json.encode({datM:i}).datS+")");
		return new Promise(async (resolveFxn,rejectFxn)=>{
			//var urlS;
			//switch (i.prxS){default : i.resolveFxn(π.ooas(o,{staF:F}));return;
			//	break;case "ftb9" : urlS = "https://feelthebeats.se/9/proxy/?service="+i.srvS+"&id="+i.idS;}
			var xhr = new XMLHttpRequest();
			xhr.timeout = this.timeoutDltT * 1000;
			xhr.addEventListener("abort"   ,(function(i,o,resolveFxn){return function(){resolveFxn(π.ooas(o,{staF:F,                      }));};})(i,o,resolveFxn));
			xhr.addEventListener("error"   ,(function(i,o,resolveFxn){return function(){resolveFxn(π.ooas(o,{staF:F,                      }));};})(i,o,resolveFxn));
			xhr.addEventListener("load"    ,(function(i,o,resolveFxn){return function(){resolveFxn(π.ooas(o,{staF:T,datS:this.responseText}));};})(i,o,resolveFxn));
			xhr.addEventListener("progress",()=>{});
			xhr.open("GET",p.cnvUrlFxn(i.urlS),T); // !!! Don't tie into "p" here.
			xhr.setRequestHeader("Cache-Control","no-cache"); // For modern servers.
			//xhr.setRequestHeader("Pragma"       ,"no-cache"); // For legacy servers.
			xhr.send();
			return;});},
	*/
	// Url-Url Equality Function.
	// Two urls may be equal without being a perfect string-string match.
	urlUrlEqlFxn : function(urlS_0,urlS_1){
		// If no protocol, prepend https.
		var urlCnvS_0 = urlS_0.replace(/^[A-Za-z0-9_-]+?\:\/\//,"");
		var urlCnvS_1 = urlS_1.replace(/^[A-Za-z0-9_-]+?\:\/\//,"");
		return (urlCnvS_0 === urlCnvS_1);},
};
var sigma = σ; // my keyboard doesn't have this character and I'm tired of copy-pasting it every time I want to debug
σ.api.parent = σ;