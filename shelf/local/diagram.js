p.dgm = {
	// Group-global variables for easier albeit structurally-sloppier code.
	datS  : U,
	pthEA : U,
	xxxC  : U,
	
	// Kludge to append a name part to resolve lazy collisions.
	nmeAddEO : {},
	
	// Calculate Chip Name String Function.
	clcChpNmeSFxn : function(xxxN,yyyN){
		var res = "";
		var xxxHedN = xxxN + 2;
		//....
		var xxxCurN = xxxHedN;
		var yyyCurN = yyyN + 2;
		for (var lopN = 0;; lopN++){if (lopN > 100){llw("[clcChpNmeSFxn] infinite-y loop : <"+xxxCurN+","+yyyCurN+"> : "+res);return res;}
			var wrdS = this.clcWrdSFxn(xxxCurN,yyyCurN);
			if (res.length > 0){
				res += " ";}
			res += wrdS;
			
			// Skip to where the next word ought to start.
			xxxCurN += wrdS.length + 1;
			
			var symS = this.clcSymSFxn(xxxCurN,yyyCurN);
			switch (symS){default : {
					; // Nothing to do, should be properly aligned.
					;}
				break;case " " :
				;;;;;;case "║" : {
					yyyCurN++;
					xxxCurN = xxxHedN;
					var symNxtS = this.clcSymSFxn(xxxCurN,yyyCurN);
					if (symNxtS === " " || symNxtS === "═"){
						return res+((p.dgm.nmeAddEO[xxxN+" "+yyyN]===U)?(""):(" ##EX"+p.dgm.nmeAddEO[xxxN+" "+yyyN]));}};}}
		return res+((p.dgm.nmeAddEO[xxxN+" "+yyyN]===U)?(""):(" ##EX"+p.dgm.nmeAddEO[xxxN+" "+yyyN]));},
	// Calculate Chip Location String Function.
	clcChpLocSFxn : function(xxxN,yyyN){
		return "("+xxxN+","+yyyN+")";},
	// Calculate Symbol String Function.
	clcSymSFxn : function(xxxN,yyyN){
		return p.dgm.datS[(yyyN * p.dgm.xxxC) + xxxN];},
	// Calculate Word String Function.
	clcWrdSFxn : function(xxxN,yyyN){
		var res = "";
		for (var lopN = 0;; lopN++){if (lopN > 100){llw("[clcWrdSFxn] infinite-y loop : <"+xxxN+","+yyyN+"> : "+res);return res;}
			var symS = p.dgm.clcSymSFxn(xxxN,yyyN);
			if (symS !== " "){
				res += symS;
				xxxN++;
				continue;}
			break;}
		return res;},
	genGteNmeSFxn : function(yyyN){
		return "moonlight-auto-gate-variable-"+yyyN;},
	// Follow Function.
	flwFxn : function(chpEptNmeS,eptNmeS,xxxPrvN,yyyPrvN,xxxN,yyyN){
		var symS = p.dgm.clcSymSFxn(xxxN,yyyN);
		switch (symS){default:{;}
			break;case "┘":{p.dgm.flwFxn(chpEptNmeS,eptNmeS,xxxN,yyyN,xxxN  ,yyyN-1);                                                        ;                                                        ;}
			break;case "─":{                                                        ;p.dgm.flwFxn(chpEptNmeS,eptNmeS,xxxN,yyyN,xxxN+1,yyyN  );                                                        ;}
			break;case "┐":{                                                        ;                                                        ;p.dgm.flwFxn(chpEptNmeS,eptNmeS,xxxN,yyyN,xxxN  ,yyyN+1);}
			break;case "┴":{p.dgm.flwFxn(chpEptNmeS,eptNmeS,xxxN,yyyN,xxxN  ,yyyN-1);p.dgm.flwFxn(chpEptNmeS,eptNmeS,xxxN,yyyN,xxxN+1,yyyN  );                                                        ;}
			break;case "┤":{p.dgm.flwFxn(chpEptNmeS,eptNmeS,xxxN,yyyN,xxxN  ,yyyN-1);                                                        ;p.dgm.flwFxn(chpEptNmeS,eptNmeS,xxxN,yyyN,xxxN  ,yyyN+1);}
			break;case "┬":{                                                        ;p.dgm.flwFxn(chpEptNmeS,eptNmeS,xxxN,yyyN,xxxN+1,yyyN  );p.dgm.flwFxn(chpEptNmeS,eptNmeS,xxxN,yyyN,xxxN  ,yyyN+1);}
			break;case "┼":{p.dgm.flwFxn(chpEptNmeS,eptNmeS,xxxN,yyyN,xxxN  ,yyyN-1);p.dgm.flwFxn(chpEptNmeS,eptNmeS,xxxN,yyyN,xxxN+1,yyyN  );p.dgm.flwFxn(chpEptNmeS,eptNmeS,xxxN,yyyN,xxxN  ,yyyN+1);}
			
			break;case "┌":{p.dgm.flwFxn(chpEptNmeS,eptNmeS,xxxN,yyyN,xxxN+1,yyyN  );}
			break;case "├":{
				p.dgm.flwFxn(chpEptNmeS,eptNmeS,xxxN,yyyN,xxxN+1,yyyN  );
				if (yyyPrvN === yyyN - 1){
					p.dgm.flwFxn(chpEptNmeS,eptNmeS,xxxN,yyyN,xxxN  ,yyyN+1);}
				else if (yyyPrvN === yyyN + 1){
					p.dgm.flwFxn(chpEptNmeS,eptNmeS,xxxN,yyyN,xxxN  ,yyyN-1);}}
			break;case "└":{p.dgm.flwFxn(chpEptNmeS,eptNmeS,xxxN,yyyN,xxxN+1,yyyN  );}
			
			break;case "│":{
				if (yyyPrvN === yyyN - 1){
					p.dgm.flwFxn(chpEptNmeS,eptNmeS,xxxN,yyyN,xxxN  ,yyyN+1);}
				else if (yyyPrvN === yyyN + 1){
					p.dgm.flwFxn(chpEptNmeS,eptNmeS,xxxN,yyyN,xxxN  ,yyyN-1);}
				// Cross-over cable.
				else if (xxxPrvN === xxxN - 1){
					p.dgm.flwFxn(chpEptNmeS,eptNmeS,xxxN,yyyN,xxxN+1,yyyN  );}}
			
			break;case "║":{
				// Cross-over cable.
				if (xxxPrvN === xxxN - 1){
					p.dgm.flwFxn(chpEptNmeS,eptNmeS,xxxN,yyyN,xxxN+1,yyyN  );}}
			
			break;case "●":{
				var iptNmeS = p.dgm.genGteNmeSFxn(yyyN);
				var {xxxN,yyyN} = p.dgm.mveTooFxn(xxxN,yyyN,1, 0,"║");
				var {xxxN,yyyN} = p.dgm.mveTooFxn(xxxN,yyyN,0,-1,"╔");
				var chpIptNmeS = p.dgm.clcChpNmeSFxn(xxxN,yyyN);
				p.dgm.pthEA.push({chpEptNmeS,eptNmeS:eptNmeS!==N?eptNmeS:iptNmeS,iptNmeS,chpIptNmeS});}
			
			// [!] Be careful.
			//     This should only be used for trigger-to-trigger [explicitly stated] bindings.
			//     Remember that a trigger-to-trigger binding is implicitly added wherever there exists a data path.
			//     This means that by adding a custom-to-trigger path, you are double-binding to an endpoint, which is invalid circuit logic.
			break;case "↯":{
				var iptNmeS = "tracer";
				var {xxxN,yyyN} = p.dgm.mveTooFxn(xxxN,yyyN,1, 0,"║");
				var {xxxN,yyyN} = p.dgm.mveTooFxn(xxxN,yyyN,0,-1,"╔");
				var chpIptNmeS = p.dgm.clcChpNmeSFxn(xxxN,yyyN);
				p.dgm.pthEA.push({chpEptNmeS,eptNmeS:eptNmeS!==N?eptNmeS:iptNmeS,iptNmeS,chpIptNmeS});}
			
			break;case " ":{
				var iptNmeS = p.dgm.clcWrdSFxn(xxxN+1,yyyN);
				var {xxxN,yyyN} = p.dgm.mveTooFxn(xxxN,yyyN,1, 0,"║");
				var {xxxN,yyyN} = p.dgm.mveTooFxn(xxxN,yyyN,0,-1,"╔");
				var chpIptNmeS = p.dgm.clcChpNmeSFxn(xxxN,yyyN);
				p.dgm.pthEA.push({chpEptNmeS,eptNmeS:eptNmeS!==N?eptNmeS:iptNmeS,iptNmeS,chpIptNmeS});};}
		;},
	// Move-To Function.
	mveTooFxn : function(xxxN,yyyN,xxxDltN,yyyDltN,symTooS){
		//ll("mveTooFxn("+xxxN+","+yyyN+","+xxxDltN+","+yyyDltN+","+symTooS+")");
		for (var lopN = 0;; lopN++){if (lopN > 1000){llw("[mveTooFxn] infinite-y loop");return;}
			var symS = p.dgm.clcSymSFxn(xxxN,yyyN);
			//ll("["+xxxN+","+yyyN+"]:"+symS);
			if (symS === symTooS){
				return {xxxN,yyyN};}
				xxxN += xxxDltN;
				yyyN += yyyDltN;}},
	
	// Bridge Function.
	bdgFxn : async function(frmE,tooE,opt={}){
		var chpFrmE = await this.chpFndFxn(frmE.tagS,frmE.nmeS) ; if (chpFrmE === U){lle("[bdgFxn] Could not find \"from\" chip in diagram.",frmE);return F;}
		var chpTooE = await this.chpFndFxn(tooE.tagS,tooE.nmeS) ; if (chpTooE === U){lle("[bdgFxn] Could not find \"to\" chip in diagram.",toE);return F;}
		if (chpFrmE.typeS !== chpTooE.typeS){lle("[bdgFxn] \"from\" and \"to\" chip are not the same type of chip.");return F;}
		
		var prpIptSA = Object.keys(chpTooE.importEO);
		var prpEptSA = Object.keys(chpFrmE.exportEO);
		if (π.aae(prpIptSA,prpEptSA) === F){lle("[bdgFxn] Chip is not symmetrical.");return F;}
		var prpSA = prpIptSA; // Arbitrary choice between prpIptSA and prpEptSA.
		
		// Binding looks like:
		// [
		//   {dstID : 77,bindingO:{"myprop" : ["theirprop"]}},
		//   {dstID : 88,bindingO:{"myprop" : ["theirprop"],"more" : ["stuff1","stuff2"]}},
		// ]
		var tooIdtS = chpTooE.nmeS + "|" + chpTooE.tagS;
		var bndEA = [];
		bndEA.push({dstID:moonlight.get(tooIdtS).ID,bindingO:prpSA.mapO(prpS=>({[prpS]:[prpS]}))});
		//ll("","bridge!",bndEA);
		
		// Option to un-/reverse.
		if (jjjc([opt,"un-"],F) === T){
			chpFrmE.unbind(bndEA);}
		else{
			chpFrmE.bind(bndEA);}
		
		return T;},
	
	// Chip Find.
	chpFndFxn : async function(tagS,nmeS){
		var untE = moonlight.get(nmeS,tagS);
		if (untE === N){return U;}
		return untE;
		//await µ.loadScript(Ω.mainDirectory+"shelf/local/moonlight/"+o.typeS+".js");
		;},
	
	bldFxn : async function(pthDgmS,tagS,opt={}){
		if (typeof tagS === US){tagS = "";}
		//....
		await µ.loadScript(Ω.mainDirectory+pthDgmS);
		var datS = fs[Ω.mainDirectory+pthDgmS];
		var yyyC = datS.split("\n").map(lneS=>lneS.length).filter(symC=>symC!==0).length;
		var xxxMinC = datS.split("\n").map(lneS=>lneS.length).filter(symC=>symC!==0).min(0);
		var xxxMaxC = datS.split("\n").map(lneS=>lneS.length).filter(symC=>symC!==0).max(0);
		if (xxxMinC !== xxxMaxC){lle("error. your moonlight circuit diagram isn't rectangular.");return;}
		var xxxC = xxxMinC;
		p.dgm.xxxC = xxxC;
		datS = datS.replace(/\n/g,"");
		p.dgm.datS = datS;
		//ll("yyyC : " + yyyC);
		//ll("xxxC : " + xxxC);
		
		p.dgm.nmeAddEO = {};
		
		//╔══╗    ┌ M ─║
		//║M0║─ M ┴ M ─║
		//╚══╝
		//┌─┐ ┌┬┐
		//│ │ ├┼┤
		//└─┘ └┴┘
		
		var chpLocSxchpEO = {};
		p.dgm.pthEA = [];
		
		// Kludge for resolving duplicate names by filling [p.dgm.nmeAddEO].
		{
			var memEA = [];
			for (var xxxN = 0; xxxN < xxxC; xxxN++){
				for (var yyyN = 0; yyyN < yyyC; yyyN++){
					var symS = p.dgm.clcSymSFxn(xxxN,yyyN);
					if (symS === "╔"){
						var chpNmeS = p.dgm.clcChpNmeSFxn(xxxN,yyyN);
						memEA.push({nmeS:chpNmeS,xxxN,yyyN});}}}
			var addN = 0;
			memEA.forEach((rowE_0,memEAI_0)=>{
				memEA.forEach((rowE_1,memEAI_1)=>{
					if (memEAI_0 === memEAI_1){return;} // Self-compare. Skip.
					if (rowE_0.nmeS === rowE_1.nmeS){
						p.dgm.nmeAddEO[rowE_1.xxxN+" "+rowE_1.yyyN] = str(addN);
						addN++;}});});
		}
		
		// Calculate chip positions and names.
		for (var xxxN = 0; xxxN < xxxC; xxxN++){
			for (var yyyN = 0; yyyN < yyyC; yyyN++){
				var symS = p.dgm.clcSymSFxn(xxxN,yyyN);
				if (symS === "╔"){
					var symCdeS = p.dgm.clcSymSFxn(xxxN+2,yyyN+1);
					if (symCdeS !== "M"){continue;} // Eases processing of organizers. All of our chip codes start with M currently.
					var chpTypS = p.dgm.clcWrdSFxn(xxxN+3,yyyN+1);
					if (chpTypS === ""){continue;} // Nameless box to help divide up spaces. Not actually a chip. Just the same characters.
					var chpNmeS = p.dgm.clcChpNmeSFxn(xxxN,yyyN);
					var chpLocS = p.dgm.clcChpLocSFxn(xxxN,yyyN);
					chpLocSxchpEO[chpLocS] = {typS:chpTypS,nmeS:chpNmeS,locS:chpLocS,xxxN,yyyN};}}}
		
		// Error check for naming copy-paste mistake.
		chpLocSxchpEO.forEach((chpE_0,chpLocS_0)=>{
			chpLocSxchpEO.forEach((chpE_1,chpLocS_1)=>{
				if (chpLocS_0 === chpLocS_1){return;} // Self-compare. Skip.
				if (chpE_0.nmeS === chpE_1.nmeS){
					lle("likely mistake found. two chips have the same name ([[[" + chpE_0.nmeS + "]]] in " + pthDgmS + ").");}});});
		
		// Calculate output strips.
		chpLocSxchpEO.forEach(chpE=>{
			var xxxN = chpE.xxxN;
			var yyyN = chpE.yyyN;
			var {xxxN,yyyN} = p.dgm.mveTooFxn(xxxN,yyyN,1,0,"╗");
			chpE.xxxEptN    = xxxN + 1;
			chpE.yyyEptMinN = yyyN;
			var {xxxN,yyyN} = p.dgm.mveTooFxn(xxxN,yyyN,0,1,"╝");
			chpE.yyyEptMaxN = yyyN;});
		
		// Calculate wire paths.
		chpLocSxchpEO.forEach(chpE=>{
			var xxxN    = chpE.xxxEptN;
			var yyyMinN = chpE.yyyEptMinN;
			var yyyMaxN = chpE.yyyEptMaxN;
			var yyyN    = yyyMinN;
			for (var lopN = 0;; lopN++){if (lopN > 1000){llw("[bldFxn] infinite-y loop (could just be a really long wire)");return;} // !!! wrong copy-pasted comment? long strip, not wire...
				var symS = p.dgm.clcSymSFxn(xxxN,yyyN);
				if (symS === "●"){
					var eptNmeS = p.dgm.genGteNmeSFxn(yyyN);
					p.dgm.flwFxn(chpE.locS,eptNmeS,
						(xxxN+1)-1,yyyN,
						(xxxN+1)  ,yyyN);}
				else if (symS === "↯"){
					var eptNmeS = "tracer";
					p.dgm.flwFxn(chpE.locS,eptNmeS,
						(xxxN+1)-1,yyyN,
						(xxxN+1)  ,yyyN);}
				else if (symS === "─"){
					// Multi-line, implicit export, explicit import.
					if (p.dgm.clcSymSFxn(xxxN+1,yyyN) === "─"){
						p.dgm.flwFxn(chpE.locS,N,
							(xxxN)-1,yyyN,
							(xxxN)  ,yyyN);}
					// Single line.
					else{
						var eptNmeS = p.dgm.clcWrdSFxn(xxxN+2,yyyN);
						p.dgm.flwFxn(chpE.locS,eptNmeS,
							(xxxN+2+eptNmeS.length+1)-1,yyyN,
							(xxxN+2+eptNmeS.length+1)  ,yyyN);}}
				if (yyyN < yyyMaxN){
					yyyN++;
					continue;}
				break;}
			;});
		
		// Option to un-/reverse.
		if (jjjc([opt,"un-"],F) === T){
			await chpLocSxchpEO.forEachAsync(async chpE=>{
				moonlight.rip(moonlight.get(chpE.nmeS,tagS));});}
		else{
			// Create chips.
			//moonlight.aliveF = F; // Meant to be a performance increase, but caused async issue because moonlight doesn't have a queueing system for commands.
			//ll("pthEA{"+tagS+"}:",p.dgm.pthEA);
			await chpLocSxchpEO.forEachAsync(async chpE=>{
				// This used to be bindingOO with names rather than bindingOA with unique IDs.
				//var bindingOO = p.dgm.pthEA.filter(pthE=>pthE.chpEptNmeS===chpE.locS).mapV(pthE=>pthE.chpIptNmeS).makeUniqueX().mapO(chpIptNmeS=>({[chpIptNmeS+"|"+tagS]:
				//	p.dgm.pthEA.filter(pthE=>pthE.chpEptNmeS===chpE.locS&&pthE.chpIptNmeS===chpIptNmeS).mapO(pthE=>({[pthE.eptNmeS]:pthE.iptNmeS}))
				//}));
				//ll(chpE);
				//ll(bindingOO);
				var unitE = await moonlight.gen({
					typeS : chpE.typS,
					nmeS  : chpE.nmeS,
					tagS  : tagS,});
				chpE.unitE = unitE;
				;});
			// Add auto/bonus ports to chips.
			p.dgm.pthEA.forEach(pthE=>{
				// pthE.chpEptNmeS
				// pthE.eptNmeS
				// pthE.iptNmeS
				// pthE.chpIptNmeS
				if (pthE.eptNmeS.startsWith("moonlight-auto-gate-variable-")){
					// Add auto parameter.
					// !!! Have function for "cleaning" imp/exp additions (add default items).
					var untSrcE = chpLocSxchpEO.find(chpE=>chpE.locS===pthE.chpEptNmeS).unitE;
					untSrcE.exportEO[pthE.eptNmeS] = {eqFxn : (a,b)=>a===b,};}
				if (pthE.iptNmeS.startsWith("moonlight-auto-gate-variable-")){
					// Add auto parameter.
					// !!! Have function for "cleaning" imp/exp additions (add default items).
					var untDstE = chpLocSxchpEO.find(chpE=>chpE.nmeS===pthE.chpIptNmeS).unitE;
					untDstE.importEO[pthE.iptNmeS] = {cleanFxn : v=>v,trgF : T,};}
			});
			
			//
			await chpLocSxchpEO.forEachAsync(async chpSrcE=>{
				
				// Binding looks like:
				// [
				//   {dstID : 77,bindingO:{"myprop" : ["theirprop"]}},
				//   {dstID : 88,bindingO:{"myprop" : ["theirprop"],"more" : ["stuff1","stuff2"]}},
				// ]
				
				//ll("");
				//ll("creating : "+chpSrcE.unitE.nmeS);
				//ll(p.dgm.pthEA.filter(pthE=>pthE.chpEptNmeS===chpSrcE.locS));
				var bndEA = [];
				p.dgm.pthEA.filter(pthE=>pthE.chpEptNmeS===chpSrcE.locS).forEach(pthE=>{
					var dstID = chpLocSxchpEO.find(chpE=>chpE.nmeS===pthE.chpIptNmeS).unitE.ID;
					var bndEAI_find = bndEA.findIndex(bndE_find=>bndE_find.dstID===dstID);
					if (bndEAI_find === -1){
						bndEA.push({dstID,bindingO:{[pthE.eptNmeS]:[pthE.iptNmeS]}});}
					else{
						if (bndEA[bndEAI_find].bindingO[pthE.eptNmeS] === U){
							bndEA[bndEAI_find].bindingO[pthE.eptNmeS] = [];}
						bndEA[bndEAI_find].bindingO[pthE.eptNmeS].pushUnique(pthE.iptNmeS);}});
				
				// Add tracers.
				bndEA.forEach(bndE=>{
					if (bndE.bindingO["tracer"] === U){
						bndE.bindingO["tracer"] = [];}
					bndE.bindingO["tracer"].pushUnique("tracer");
				});
				//bndEA.map(bndE=>bndE.dstID).makeUniqueX().forEach(dstID=>{
				//	var bndEAI_find = bndEA.findIndex(bndE_find=>bndE_find.dstID===dstID);
				//	if (bndEAI_find === -1){
				//		bndEA.push({dstID,bindingO:{"tracer":["tracer"]}});}
				//	else{
				//		bndEA[bndEAI_find].bindingO["tracer"].pushUnique("tracer");}});
				
				//var bindingEA = p.dgm.pthEA.filter(pthE=>pthE.chpEptNmeS===chpSrcE.locS).map(pthE=>chpLocSxchpEO.find(chpE=>chpE.nmeS===pthE.chpIptNmeS)).makeUniqueX().mapO(chpDstE=>({
				//	dstID    : chpDstE.unitE.ID,
				//	bindingO : p.dgm.pthEA.filter(pthE=>pthE.chpEptNmeS===chpSrcE.locS&&pthE.chpIptNmeS===chpDstE.nmeS).mapO(pthE=>({[pthE.eptNmeS]:pthE.iptNmeS})),
				//}));
				//ll(bndEA);
				chpSrcE.unitE.bindingEA = bndEA;
				;});
			//moonlight.aliveF = T; // Meant to be a performance increase, but caused async issue because moonlight doesn't have a queueing system for commands.
			//ll(moonlight.unitEO);
			moonlight.pmpAllFxn();}
		;},
};