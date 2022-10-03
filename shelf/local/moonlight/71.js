// [!] snfM is purely in order to get moonlight to provide a circuit wire so that we get access to tracer.
moonlight.bin["71"] = function(){
	var oo = {
		nameInformalS : "Assert Lane Diagrams",
		importEO : {
			lneC : {},},
		exportEO : {},
		dat : {
			lneC : U ,},
		import : async function(){
			if (this.chk("lneC")){
				
				// (1) Delink existing lane diagram bridges.
				// (2) Remove existing lane diagrams.
				for (var lneN = 0;; lneN++){
					var unitE = moonlight.get("Game Frame Lane Diagram Bridge Head","lane.js "+lneN);
					if (unitE === N){break;} // Stop-condition.
					//llc(0.1,"bye "+unitE.toString());
					await p.dgm.bdgFxn({nmeS:"Game Frame Lane Diagram Bridge Head",tagS:"main.js"},{nmeS:"Game Frame Lane Diagram Bridge Head",tagS:"lane.js "+lneN},{"un-":T});
					await p.dgm.bldFxn("diagram/lane.js","lane.js "+lneN,{"un-":T});}
				
				// (1) Instantiate lane diagrams.
				// (2) Bridge lane diagram bridges.
				await π.a(0,this.dat.lneC-1).forEachAsync(async lneN=>{
					//llc(0.1,"hi "+lneN.toString());
					await p.dgm.bldFxn("diagram/lane.js","lane.js "+lneN);
					moonlight.import(moonlight.get("1x Out","lane.js "+lneN).ID,{
						"datM_0" : lneN,});
					await p.dgm.bdgFxn({nmeS:"Game Frame Lane Diagram Bridge Head",tagS:"main.js"},{nmeS:"Game Frame Lane Diagram Bridge Head",tagS:"lane.js "+lneN});});
				
				// Move these two uniani registrations to be after the lane calculations that unfortunately happen in [[[.drawFrame()]]].
				uniani.moveToBottom(moonlight.get("Game Frame Left Sidebar External","main.js").toString());
				
				;}},
	};
	return oo;
};