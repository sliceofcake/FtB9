// Run to print a copy-paste of the side-index.
p.genSdeIdxFxn = async function(){
	var tmoDltT = 3;
	ll("please wait approximately "+str(tmoDltT)+" seconds for output.");
	var e0 = await sigma.flat.chart.mapAsync(async (rowE,rowEOK)=>{
		var urlTxtS = sigma.cnvUrlFxn(rowE.datAltM.urlTxtS);
		var tagS = "side-index.js "+str(rowEOK);
		await p.dgm.bldFxn("diagram/side-index.js",tagS);
		await moonlight.import(moonlight.get("1x Out (fmtFtbS)",tagS).ID,{"datM_0":"ftb"  });
		await moonlight.import(moonlight.get("1x Out (fmtOsmS)",tagS).ID,{"datM_0":"o!m"  });
		await moonlight.import(moonlight.get("1x Out (fmtBmsS)",tagS).ID,{"datM_0":"bms"  });
		await moonlight.import(moonlight.get("1x Out (gvpDltT)",tagS).ID,{"datM_0":    360});
		await moonlight.import(moonlight.get("1x Out (urlS)"   ,tagS).ID,{"datM_0":urlTxtS});
		var ancT = π.clcCurT();
		return await π.polFxn(0.01,(function(ancT,urlTxtS,tmoDltT){return async function(){
			var curT = π.clcCurT();
			var dltT = curT - ancT;
			if (dltT > tmoDltT){
				//ll(urlTxtS,"gave up on a sdeIdx thread","");
				await p.dgm.bldFxn("diagram/side-index.js",tagS,{"un-":T});
				return F;}
			var lneNxnteEAA = moonlight.get("1x Out (lneNxnteEAA)",tagS).dat.datM_0;
			var bpmEA       = moonlight.get("1x Out (bpmEA)"      ,tagS).dat.datM_0;
			var lneC        = moonlight.get("1x Out (lneC)"       ,tagS).dat.datM_0;
			if (lneNxnteEAA !== U && bpmEA !== U && lneC !== U){
				//ll(urlTxtS,lneNxnteEAA,bpmEA,"");
				await p.dgm.bldFxn("diagram/side-index.js",tagS,{"un-":T});
				return {urlNteS:urlTxtS,lneNxnteEAA,bpmEA,lneC};}
			return U;};})(ancT,urlTxtS,tmoDltT));
		;});
	ll(e0);
	var e1 = e0.map(e=>{
		if (e === F){return U;}
		var lneC    = e.lneC                         ;
		var npsN    = this.clcNpsNFxn(e.lneNxnteEAA) ;
		var nteC    =                              0 ;
		var talMaxU = U                              ;
		e.lneNxnteEAA.forEach(nteEA=>{
			if (nteEA.length === 0){return;}
			nteC += nteEA.length;
			var talU = nteEA[nteEA.length-1].talU;
			if (talMaxU === U || talU > talMaxU){
				talMaxU = talU;}});
		return {urlNteS:e.urlNteS,lneC,npsN,nteC,talMaxU};});
	e1 = e1.filter(v=>v!==U);
	ll(e1);
	var crtEA = e1.mapV((e,k)=>{
		return {
			"comment" : U,
			"url"     : k, // Used as the key to the sigma parser.
			"icon"    : {
				"url"       : U,
				"file-size" : U,
			},
			"audio"   : {
				"url"       : U,
				"file-size" : U,
				"duration"  : U,
			},
			"chart"   : {
				"url"          : e.urlNteS,
				"file-size"    : U,
				"lane-count"   : e.lneC,
				"note-count"   : e.nteC,
				"time-maximum" : e.talMaxU,
				"difficulty"   : e.npsN,
			}
		};
	});
	var mem = {
		"name"             : "FtB9" ,
		"chart-collection" : crtEA  ,};
	ll(mem);
	ll(JSON.stringify(mem));
	;};

// Deconula (v.maple) [FtB9]
// (1) Consider all possible consecutive-note groupings [possibilities will overlap], given a grouping size of {10 * LaneCount}, and take the Standard nps of each grouping.
// (2) Average all nps groupings.
// (3) [3x] Take a new average of only nps groupings that are equal to or greater than that total average.
p.clcNpsNFxn = function(lneNxnteEAA){
	
	// Calculate nodes. Hit notes at the head, hold notes at both head and tail.
	var ndeUA  ;
	var ndeUAC ; {
		ndeUA = [];
		lneNxnteEAA.forEach(nteEA=>{
			nteEA.forEach(nteE=>{
				ndeUA.push(nteE.hedU);
				if (nteE.hedU !== nteE.talU){
					ndeUA.push(nteE.talU);}});});
		ndeUA.sort((_0,_1)=>_0-_1);
		ndeUAC = ndeUA.length;
		if (ndeUAC === 0){return 0;}}
	
	// Get nps slices, per 100-note range, overlapping at each possible offset/step.
	var npsNA  ;
	var npsNAC ; {
		npsNA = [];
		var lneC = lneNxnteEAA.length;
		var fmeC = Math.min(lneC*10,ndeUA.length); // We want it to be 100, unless we don't even have 100 notes.
		for (var ndeUAI = 0,ndeUAI_max = ndeUAC - fmeC; ndeUAI <= ndeUAI_max; ndeUAI++){
			var dltU = (ndeUA[ndeUAI+fmeC-1] - ndeUA[ndeUAI]);
			// [!] Not sure of a good way to handle an incredibly dense section.
			//     We currently ignore it and let the neighboring frames capture it somewhat.
			if (dltU !== 0){
				var npsN = fmeC / dltU;
				npsNA.push(npsN);}}
		npsNAC = npsNA.length;
		if (npsNAC === 0){return 0;}}
	
	// Take average, then take average of slices above or equal to average.
	var avgN = npsNA.average();npsNA = npsNA.filter(npsN=>npsN>=avgN);
	var avgN = npsNA.average();npsNA = npsNA.filter(npsN=>npsN>=avgN);
	var avgN = npsNA.average();npsNA = npsNA.filter(npsN=>npsN>=avgN);
	var avgN = npsNA.average();
	
	// Multiply by lane count.
	var res;{
		var lneC = lneNxnteEAA.length;
		res = Math.round(avgN) * lneC;}
	
	return res;}