moonlight.bin["38"] = function(){
	var oo = {
		nameInformalS : "Game Frame External",
		importEO : {
			bpmEA         : {},
			clkIdtS       : {},
			cpsF          : {},
			cpsHedUA      : {trgF : F,},
			cpsTalUA      : {trgF : F,},
			cvsBndE       : {},
			divHghCor     : {},
			divMdmCor     : {},
			divWdtPrt     : {},
			drgHghCor     : {},
			drgLowCor     : {},
			drgMdmCor     : {},
			g             : {},
			hitErrDltMaxT : {},
			jdgHghCor     : {},
			jdgMdmCor     : {},
			lneBkgHghCor  : {},
			lneBkgMdmCor  : {},
			nteAltEA      : {trgF : F,},
			nteHgtPrt     : {},
			nteHitHghCor  : {},
			nteHitLowCor  : {},
			nteHitMdmCor  : {},
			nteTklHghCor  : {},
			nteTklLowCor  : {},
			nteTklMdmCor  : {},
			padPreHgtN    : {},
			padPstHgtN    : {},
			posJdgPrt     : {},
			snpDmrN       : {},
			snpMjrHghCor  : {},
			snpMjrMdmCor  : {},
			snpMnrHghCor  : {},
			snpMnrMdmCor  : {},
			snpMjrHgtPrt  : {},
			snpMnrHgtPrt  : {},
			tmeDrgEA      : {trgF : F,},
			velLinN       : {},
			trgZ_nteAltEA : {trgF : F,},
			trgZ_tmeDrgEA : {trgF : F,},},
		exportEO : {},
		dat : {
			clkIdtS       : "" ,
			divHghCor     : [0,0,1,1] ,
			divMdmCor     : [0,0,1,1] ,
			divWdtPrt     : 0 ,
			drgHghCor     : [0,0,1,1] ,
			drgLowCor     : [0,0,1,1] ,
			drgMdmCor     : [0,0,1,1] ,
			hitErrDltMaxT : 0 ,
			jdgHghCor     : [0,0,1,1] ,
			jdgMdmCor     : [0,0,1,1] ,
			lneBkgHghCor  : [0,0,0,0] ,
			lneBkgMdmCor  : [0,0,0,0] ,
			nteAltEA      : [] ,
			nteHgtPrt     : 0 ,
			nteHitHghCor  : [0,0,1,1] ,
			nteHitLowCor  : [0,0,1,1] ,
			nteHitMdmCor  : [0,0,1,1] ,
			nteTklHghCor  : [0,0,1,1] ,
			nteTklLowCor  : [0,0,1,1] ,
			nteTklMdmCor  : [0,0,1,1] ,
			padPreHgtN    : 0 ,
			padPstHgtN    : 0 ,
			posJdgPrt     : 0 ,
			snpDmrN       : 0 ,
			snpMjrHghCor  : [0,0,1,1] ,
			snpMjrMdmCor  : [0,0,1,1] ,
			snpMnrHghCor  : [0,0,1,1] ,
			snpMnrMdmCor  : [0,0,1,1] ,
			snpMjrHgtPrt  : 0 ,
			snpMnrHgtPrt  : 0 ,
			tmeDrgEA      : [] ,
			trgZ_nteAltEA : U ,
			trgZ_tmeDrgEA : U ,
			velLinN       : 1 ,
			//----
			
			// d is the variable
			//....
			// z = h(-dv - p) + h
			// z = -dhv - hp + h
			// z = -dhv + a ; a = h(1-p)
			// z = db + a ; a = h(1-p) ; b = -hv
			//....
			// a = pclN_0 = g.hgtN * (1 - this.posJdgPrt)
			// b = pclN_1 = -1 * g.hgtN * this.velLinN
			//....
			// d = (z - a) / b ; a = h(1-p) ; b = -hv
			clcPosNFxn_0 : function(dltU){
				return ((((dltU * this.velLinN) * -1) - this.posJdgPrt) * this.cvsBndE.h) + this.cvsBndE.h;},
			clcPosNFxn_1 : function(dltU){
				return (dltU * this.pclN_1) + this.pclN_0;},
			pclFxn_clcPosNFxn_1_pclN_0 : function(){
				return this.cvsBndE.h * (1 - this.posJdgPrt);},
			pclFxn_clcPosNFxn_1_pclN_1 : function(){
				return -1 * this.cvsBndE.h * this.velLinN;},
			clcDltUFxn_1 : function(posN){
				return (posN - this.pclN_0) / this.pclN_1;},
			
			clcSnpNFxn : function(posU,bpmE){
				// posU = bpmE.hedU + (snpN * bpmE.dltU)
				// posU - bpmE.hedU = (snpN * bpmE.dltU)
				// (posU - bpmE.hedU) / bpmE.dltU = snpN
				return (posU - bpmE.hedU) / bpmE.dltU;},
			
			clcStaFFxn : function(curU){
				var staF = this.tmeDrgEA.any(tmeDrgE=>{
					if (tmeDrgE.talU === U){
						return tmeDrgE.hedU < curU;}
					else{
						return tmeDrgE.hedU < curU && curU < tmeDrgE.talU;}});
				return staF;},
			
			drwCpsHedFxn : function(posU,curU){
				
				///////////////////////
				//                   //
				//         ^ A       //
				//        / \        //
				// F   G /   \ B   C //
				//  +-------------+  //
				//  |      o      |  //
				//  +-------------+  //
				// E               D //
				//                   //
				///////////////////////
				
				const hgtPrt = 0.0075; // !!! Dummy.
				const cor = [0,0,1,1]; // !!! Dummy.
				
				var posN    = this.clcPosNFxn_1(posU - curU);
				var hlfHgtN = (hgtPrt / 2) * this.cvsBndE.h;
				
				// Skip off-screen draws.
				if ((posN - hlfHgtN) - (this.cvsBndE.w / 6) > this.cvsBndE.h){return -1;}
				if ((posN + hlfHgtN)                        <              0){return  1;}
				
				var crdEA = [
					{x:this.cvsBndE.x + (this.cvsBndE.w * (1/2)),y:this.cvsBndE.y + ((posN - hlfHgtN) - (this.cvsBndE.w / 6))}, // A
					{x:this.cvsBndE.x + (this.cvsBndE.w * (2/3)),y:this.cvsBndE.y + ((posN - hlfHgtN)                       )}, // B
					{x:this.cvsBndE.x + (this.cvsBndE.w        ),y:this.cvsBndE.y + ((posN - hlfHgtN)                       )}, // C
					{x:this.cvsBndE.x + (this.cvsBndE.w        ),y:this.cvsBndE.y + ((posN + hlfHgtN)                       )}, // D
					{x:this.cvsBndE.x + (                     0),y:this.cvsBndE.y + ((posN + hlfHgtN)                       )}, // E
					{x:this.cvsBndE.x + (                     0),y:this.cvsBndE.y + ((posN - hlfHgtN)                       )}, // F
					{x:this.cvsBndE.x + (this.cvsBndE.w * (1/3)),y:this.cvsBndE.y + ((posN - hlfHgtN)                       )}, // G
					U                                                                                                         ,]; // A-copy reservation (malloc performance speculation)
				crdEA[crdEA.length-1] = {x:crdEA[0].x,y:crdEA[0].y}; // A-copy
				this.g.assert({colorE:cor});
				this.g.pthFil_FAST(crdEA);
				
				return T;},
			drwCpsTalFxn : function(posU,curU){
				
				///////////////////////
				//                   //
				// D               E //
				//  +-------------+  //
				//  |      o      |  //
				//  +-------------+  //
				// C   B \   / G   F //
				//        \ /        //
				//         v A       //
				//                   //
				///////////////////////
				
				const hgtPrt = 0.0075; // !!! Dummy.
				const cor = [0,0,1,1]; // !!! Dummy.
				
				var posN    = this.clcPosNFxn_1(posU - curU);
				var hlfHgtN = (hgtPrt / 2) * this.cvsBndE.h;
				
				// Skip off-screen draws.
				if ((posN - hlfHgtN) - (this.cvsBndE.w / 6) > this.cvsBndE.h){return -1;}
				if ((posN + hlfHgtN)                        <              0){return  1;}
				
				var crdEA = [
					{x:this.cvsBndE.x + (this.cvsBndE.w * (1/2)),y:this.cvsBndE.y + ((posN + hlfHgtN) + (this.cvsBndE.w / 6))}, // A
					{x:this.cvsBndE.x + (this.cvsBndE.w * (2/3)),y:this.cvsBndE.y + ((posN + hlfHgtN)                       )}, // B
					{x:this.cvsBndE.x + (this.cvsBndE.w        ),y:this.cvsBndE.y + ((posN + hlfHgtN)                       )}, // C
					{x:this.cvsBndE.x + (this.cvsBndE.w        ),y:this.cvsBndE.y + ((posN - hlfHgtN)                       )}, // D
					{x:this.cvsBndE.x + (                     0),y:this.cvsBndE.y + ((posN - hlfHgtN)                       )}, // E
					{x:this.cvsBndE.x + (                     0),y:this.cvsBndE.y + ((posN + hlfHgtN)                       )}, // F
					{x:this.cvsBndE.x + (this.cvsBndE.w * (1/3)),y:this.cvsBndE.y + ((posN + hlfHgtN)                       )}, // G
					U                                                                                                         ,]; // A-copy reservation (malloc performance speculation)
				crdEA[crdEA.length-1] = {x:crdEA[0].x,y:crdEA[0].y}; // A-copy
				this.g.assert({colorE:cor});
				this.g.pthFil_FAST(crdEA);
				
				return T;},
			
			// [!] Hed and Tal are equal if hit note, as opposed to hold note.
			// Returns Tri indicating the object with relation to being onscreen (-1:before screen,0:on screen,1:after screen).
			drwRngFxn : function(hedU,talU,curU,hitCor,tklCor,hgtPrt){
				
				var posHedN    = this.clcPosNFxn_1(hedU - curU);
				var posTalN    = this.clcPosNFxn_1(talU - curU);
				var nteHgtN    = (hgtPrt    ) * this.cvsBndE.h;
				var nteHlfHgtN = (hgtPrt / 2) * this.cvsBndE.h;
				var x = this.cvsBndE.x;
				var y = (posTalN - nteHlfHgtN);
				var w = this.cvsBndE.w;
				var h = (posHedN - posTalN) + nteHgtN;
				
				// Skip off-screen draws.
				//if ((x > this.cvsBndE.w) || (x + w < 0) || (y > this.cvsBndE.h) || (y + h < 0)){return;} // I mean, sure, you *could* check x, but why?
				if (y > this.cvsBndE.h){return -1;}
				if (y + h < 0){return 1;}
				
				if (tklCor !== U){
					this.g.rectFill(x,y,w,h,{colorE:tklCor});}
				
				if (hitCor !== U){
					var yHed = posHedN - nteHlfHgtN;
					var hHed = hgtPrt * this.cvsBndE.h;
					this.g.rectFill(x,yHed,w,hHed,{colorE:hitCor});}
				
				return T;},
			bin : [
				{
					lblS   : "bkg",
					drwFxn : function(dat,curU){
						//var x = 20;
						//var y = 40;
						//var d = 10;
						//var cor = [0,1,0.5,1];
						//this.g.circleFill(x,y,d,{colorE:cor});
						var staF = dat.clcStaFFxn(curU);
						var cor = ((staF===T) ? (dat.lneBkgHghCor) : (dat.lneBkgMdmCor));
						dat.g.rectFill(dat.cvsBndE.x + (0),dat.cvsBndE.y + (0),dat.cvsBndE.w,dat.cvsBndE.h,{colorE:cor});
						;},},
				{
					lblS   : "div",
					drwFxn : function(dat,curU){
						var staF = dat.clcStaFFxn(curU);
						var cor = ((staF===T) ? (dat.divHghCor) : (dat.divMdmCor));
						var divHlfWdtN = (dat.divWdtPrt / 2) * dat.cvsBndE.w;
						dat.g.rectFill(dat.cvsBndE.x + (                         0),dat.cvsBndE.y + (0),divHlfWdtN,dat.cvsBndE.h,{colorE:cor});
						dat.g.rectFill(dat.cvsBndE.x + (dat.cvsBndE.w - divHlfWdtN),dat.cvsBndE.y + (0),divHlfWdtN,dat.cvsBndE.h,{colorE:cor});
						;},},
				{
					lblS   : "snp",
					drwFxn : function(dat,curU){
						//if (!(nun(dat.cpsF) && dat.cpsF === T)){return;} // Only render when Composer mode is enabled.
						if (dat.g.w === 0 || dat.g.h === 0){return;} // Seems to happen during pause.
						if (!nun(dat.snpDmrN) || !nun(dat.bpmEA)){return;}
						if (dat.bpmEA.length === 0){return;}
						if (dat.snpDmrN === 0){return;}
						
						var hedU = (dat.clcDltUFxn_1(dat.g.hgtN + ((Math.max(dat.snpMnrHgtPrt,dat.snpMjrHgtPrt) / 2) * dat.g.hgtN),dat.g)) + curU;
						var talU = (dat.clcDltUFxn_1(         0 - ((Math.max(dat.snpMnrHgtPrt,dat.snpMjrHgtPrt) / 2) * dat.g.hgtN),dat.g)) + curU;
						
						var staF = dat.clcStaFFxn(curU);
						// !!! Improper handling of premature clipping at top and bottom of screen.
						
						//
						dat.bpmEA.forEach((bpmE,bpmEAI)=>{
							var bpmNxtE = dat.bpmEA[bpmEAI+1];
							if (bpmE.hedU > talU || (bpmNxtE !== U && bpmNxtE.hedU < hedU)){return;}
							
							// Draw major.
							//
							var cor = ((staF===T) ? (dat.snpMjrHghCor) : (dat.snpMjrMdmCor));
							// Foreach [[[snpU]]] onscreen,
							var hedN;{
								hedN = Math.floor(dat.clcSnpNFxn(hedU,bpmE));
								if (hedN < 0){hedN = 0;}}
							var talN;{
								talN = Math.ceil(dat.clcSnpNFxn(talU,bpmE));
								if (bpmNxtE !== U){
									var talBpmNxtN = Math.ceil(dat.clcSnpNFxn(bpmNxtE.hedU,bpmE));
									if (talBpmNxtN < talN){
										talN = talBpmNxtN;}}}
							for (var snpN = hedN; snpN < talN; snpN++){var snpU = bpmE.hedU + (snpN * bpmE.dltU);
								var posU = snpU;
								dat.drwRngFxn(posU,posU,curU,cor,U,dat.snpMjrHgtPrt);}
							
							// Draw minor.
							//
							var bpmAltE = {hedU:bpmE.hedU,dltU:bpmE.dltU/dat.snpDmrN};
							var cor = ((staF===T) ? (dat.snpMnrHghCor) : (dat.snpMnrMdmCor));
							// Foreach [[[snpU]]] onscreen,
							var hedN;{
								hedN = Math.floor(dat.clcSnpNFxn(hedU,bpmAltE));
								if (hedN < 0){hedN = 0;}}
							var talN;{
								talN = Math.ceil(dat.clcSnpNFxn(talU,bpmAltE));
								if (bpmNxtE !== U){
									var talBpmNxtN = Math.ceil(dat.clcSnpNFxn(bpmNxtE.hedU,bpmAltE));
									if (talBpmNxtN < talN){
										talN = talBpmNxtN;}}}
							for (var snpN = hedN; snpN < talN; snpN++){var snpU = bpmAltE.hedU + (snpN * bpmAltE.dltU);
								if (snpN % dat.snpDmrN === 0){continue;}
								var posU = snpU;
								dat.drwRngFxn(posU,posU,curU,cor,U,dat.snpMnrHgtPrt);}
							;});
						;},},
				{
					lblS   : "nte",
					drwFxn : function(dat,curU){
						var staF = dat.clcStaFFxn(curU);
						dat.nteAltEA.forEach(nteAltE=>{
							
							nteAltE.staTri = ((curU >= nteAltE.talU) ? (-1) : (0));
							// An inferior method. Delete once confidence sets in.
							//dat.tmeDrgEA.forEach(tmeDrgE=>{
							//	// If signal is high for any duration of note body, give trickle points.
							//	if (tmeDrgE.hedU < nteAltE.talU && ((tmeDrgE.talU === U && curU > nteAltE.hedU) || tmeDrgE.talU > nteAltE.hedU)){
							//		if (tmeDrgE.talU === U){
							//			nteAltE.staTri = 1;}};});
							if (nteAltE.hedU - dat.hitErrDltMaxT <= curU && curU <= nteAltE.talU + dat.hitErrDltMaxT && staF === T){
								nteAltE.staTri = 1;}
							
							var nteHitCor;
							switch (nteAltE.staTri){default:{lle("note in [[[nteAltEA]]] doesn't have a valid [[[staTri]]].");};
								break;case  1:{nteHitCor = dat.nteHitHghCor;};
								break;case  0:{nteHitCor = dat.nteHitMdmCor;};
								break;case -1:{nteHitCor = dat.nteHitLowCor;};}
							var nteTklCor;
							switch (nteAltE.staTri){default:{lle("note in [[[nteAltEA]]] doesn't have a valid [[[staTri]]].");};
								break;case  1:{nteTklCor = dat.nteTklHghCor;};
								break;case  0:{nteTklCor = dat.nteTklMdmCor;};
								break;case -1:{nteTklCor = dat.nteTklLowCor;};}
							dat.drwRngFxn(
								nteAltE.hedU,
								((nteAltE.talU === U) ? (curU) : (nteAltE.talU)),
								curU,
								nteHitCor,
								nteTklCor,
								dat.nteHgtPrt);
							
							;});
						
						//// !!! DBG
						//dat.g.textFill(
						//	dat.cvsBndE.x + 10,
						//	dat.cvsBndE.y + 5,
						//	π.padLAbs(str(Math.round(Math.abs(curU-Math.trunc(curU))*1000)),3,"0"),{colorE:[0,0,1,1],fntHgtPrt:0.01});
						
						;},},
				{
					lblS   : "cps",
					drwFxn : function(dat,curU){
						if (!(nun(dat.cpsF) && dat.cpsF === T)){return;} // Only render when Composer mode is enabled.
						if (!nun(dat.cpsHedUA) || !nun(dat.cpsTalUA)){return;}
						
						dat.cpsHedUA.forEach(cpsHedU=>{
							dat.drwCpsHedFxn(cpsHedU,curU,dat.g);});
						dat.cpsTalUA.forEach(cpsTalU=>{
							dat.drwCpsTalFxn(cpsTalU,curU,dat.g);});
						
						//// !!! DBG
						//this.g.textFill(10,5,π.padLAbs(str(Math.round(Math.abs(curU-Math.trunc(curU))*1000)),3,"0"),{colorE:[0,0,1,1]});
						
						;},},
				{
					lblS   : "drg",
					drwFxn : function(dat,curU){
						// Too costly.
						dat.tmeDrgEA.forEach(tmeDrgE=>{
							dat.drwRngFxn(
								tmeDrgE.hedU,
								((tmeDrgE.talU === U) ? (curU) : (tmeDrgE.talU)),
								curU,
								dat.drgHghCor,
								dat.drgHghCor,
								dat.nteHgtPrt);});
						;},},
				{
					lblS   : "jdg",
					drwFxn : function(dat,curU){
						// Pre-calculate.
						var nteHlfHgtN = (dat.nteHgtPrt / 2) * dat.cvsBndE.h;
						
						//if (dat.tmeDrgEA.length > 0){
						//	ll(dat.tmeDrgEA);}
						
						////if (dat.tmeDrgEA.length === 3 && dat.tmeDrgEA[dat.tmeDrgEA.length - 1].talU === U){
						//if (dat.tmeDrgEA.length > 0 && dat.tmeDrgEA[0].talU === U){
						//	ll(dat.tmeDrgEA);
						//	ll(curU);
						//}
						var staF = dat.clcStaFFxn(curU);
						//ll(staF);
						
						dat.drwRngFxn(
							curU,
							curU,
							curU,
							(staF?dat.jdgHghCor:dat.jdgMdmCor),
							U,
							dat.nteHgtPrt);
						
						;},},
				],
			},
		import : function(){;},
		drawFrame : function(curT){
			//lld(this.dat.nteAltEA.length);
			var curU = π.clcClkCurU(this.dat.clkIdtS,curT);
			if (nun(this.dat.g) && nun(this.dat.cvsBndE)){
				
				// Pre-calculation.
				this.dat.pclN_0 = this.dat.pclFxn_clcPosNFxn_1_pclN_0();
				this.dat.pclN_1 = this.dat.pclFxn_clcPosNFxn_1_pclN_1();
				
				this.dat.bin.forEach(rowE=>{
					rowE.drwFxn(this.dat,curU);});}
			//this.dat.dspG.clear();
			//this.dat.dspG.absorbFull(this.dat.bin.bkg.g);
			//this.dat.dspG.absorbFull(this.dat.bin.div.g);
			//this.dat.dspG.absorbFull(this.dat.bin.snp.g);
			//this.dat.dspG.absorbFull(this.dat.bin.nte.g);
			//this.dat.dspG.absorbFull(this.dat.bin.cps.g);
			//this.dat.dspG.absorbFull(this.dat.bin.drg.g);
			//this.dat.dspG.absorbFull(this.dat.bin.jdg.g);
			//this.dat.dspG.testPattern();
			
			//if (nun(this.dat.g)){
				//this.dat.cvsBndE
				//ll(this.dat.g.wdtN+"..."+this.dat.g.hgtN);
				//this.dat.g.testPattern();
			//	;}
			
			//this.dat.trgZ_dspG = π.signalFlip(this.dat.trgZ_dspG);
			//this.chain();
			;},
	};
	return oo;
};