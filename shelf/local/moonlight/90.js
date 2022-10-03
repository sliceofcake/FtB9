moonlight.bin["90"] = function(){
	var oo = {
		nameInformalS : "Game Frame Right Sidebar External",
		importEO : {
			bpmEA      : {},
			clkIdtS    : {},
			cpsF       : {},
			cvsBndE    : {},
			g          : {},
			dspHgtN    : {},
			dspWdtN    : {},
			nteAltDltT : {},
			posJdgPrt  : {},
			snpDmrN    : {},
			velClkBseN : {},
			velClkCtlN : {},
			velClkPrfN : {},
			velLinN    : {},
			vlmPrt     : {},},
		exportEO : {},
		dat : {
			//....
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
			
			drwBpmHedFxn : function(posU,curU,bpmDltU){
				
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
				
				const hgtPrt = 0.015; // !!! Dummy.
				const cor = [0,0,0.5,0.5]; // !!! Dummy.
				
				var posN    = this.clcPosNFxn_1(posU - curU);
				var hlfHgtN = (hgtPrt / 2) * this.cvsBndE.h;
				
				// Skip off-screen draws.
				if ((posN - hlfHgtN) - (this.cvsBndE.w / 6) > this.cvsBndE.h){return -1;}
				if ((posN + hlfHgtN)                        <              0){return  1;}
				
				var crdEA = [
					{x:this.cvsBndE.x + (this.cvsBndE.w * (1/2)),y:this.cvsBndE.y + ((posN - hlfHgtN) - (this.cvsBndE.w / 6))},   // A
					{x:this.cvsBndE.x + (this.cvsBndE.w * (2/3)),y:this.cvsBndE.y + ((posN - hlfHgtN)               )},   // B
					{x:this.cvsBndE.x + (this.cvsBndE.w        ),y:this.cvsBndE.y + ((posN - hlfHgtN)               )},   // C
					{x:this.cvsBndE.x + (this.cvsBndE.w        ),y:this.cvsBndE.y + ((posN + hlfHgtN)               )},   // D
					{x:this.cvsBndE.x + (                     0),y:this.cvsBndE.y + ((posN + hlfHgtN)               )},   // E
					{x:this.cvsBndE.x + (                     0),y:this.cvsBndE.y + ((posN - hlfHgtN)               )},   // F
					{x:this.cvsBndE.x + (this.cvsBndE.w * (1/3)),y:this.cvsBndE.y + ((posN - hlfHgtN)               )},   // G
					U                                                   ,]; // A-copy reservation (malloc performance speculation)
				crdEA[crdEA.length-1] = {x:crdEA[0].x,y:crdEA[0].y}; // A-copy
				this.g.assert({colorE:cor});
				this.g.pthFil_FAST(crdEA);
				
				var bpmN = 60 / bpmDltU;
				this.g.textFill(this.cvsBndE.x + this.cvsBndE.w,this.cvsBndE.y + posN,bpmN.toFixed(2),{colorE:[0,0,1,0.5],textBaselineS:"middle",fntHgtPrt:0.01,textAlignS:"right"});
				
				return T;},
			//....
			bin : [
				{
					lblS   : "ply",
					drwFxn : function(dat,curU){
						if (!nun(dat.velClkCtlN)){return;}
						//....
						var hh = dat.cvsBndE.h;
						dat.g.textFill(
							dat.cvsBndE.x + (hh*0.012),
							dat.cvsBndE.y + (hh*0.015)+((hh*0.025)*0),
							((dat.velClkCtlN===0)?("paused"):("playing")),
							{colorE:[0,0,1,0.5],textBaselineS:"middle",textAlignS:"left",fntHgtPrt:0.015});
						;},},
				{
					lblS   : "rte",
					drwFxn : function(dat,curU){
						if (!nun(dat.velClkBseN) || !nun(dat.velClkPrfN)){return;}
						//....
						var hh = dat.cvsBndE.h;
						var velClkN = dat.velClkBseN * dat.velClkPrfN;
						dat.g.textFill(
							dat.cvsBndE.x + (hh*0.012),
							dat.cvsBndE.y + (hh*0.015)+((hh*0.025)*1),
							"◷ " + π.round(velClkN,2) + "x",
							{colorE:[0,0,1,0.375],textBaselineS:"middle",textAlignS:"left",fntHgtPrt:0.015});
						;},},
				// !!! Note a great name, but realized too late that [[[scr]]] could be [[[score]]] or [[[scroll]]]
				{
					lblS   : "vel",
					drwFxn : function(dat,curU){
						if (!nun(dat.velLinN)){return;}
						//....
						var hh = dat.cvsBndE.h;
						dat.g.textFill(
							dat.cvsBndE.x + (hh*0.012),
							dat.cvsBndE.y + (hh*0.015)+((hh*0.025)*2),
							"⇊ " + π.round(dat.velLinN,3) + "sps",
							{colorE:[0,0,1,0.375],textBaselineS:"middle",textAlignS:"left",fntHgtPrt:0.015});
						;},},
				{
					lblS   : "ofs",
					drwFxn : function(dat,curU){
						if (!nun(dat.nteAltDltT)){return;}
						//....
						var hh = dat.cvsBndE.h;
						dat.g.textFill(
							dat.cvsBndE.x + (hh*0.012),
							dat.cvsBndE.y + (hh*0.015)+((hh*0.025)*3),
							"⥅ " + π.round(dat.nteAltDltT,3) + "s",
							{colorE:[0,0,1,0.375],textBaselineS:"middle",textAlignS:"left",fntHgtPrt:0.015});
						;},},
				{
					lblS   : "vlm",
					drwFxn : function(dat,curU){
						if (!nun(dat.vlmPrt)){return;}
						//....
						var hh = dat.cvsBndE.h;
						dat.g.textFill(
							dat.cvsBndE.x + (hh*0.012),
							dat.cvsBndE.y + (hh*0.015)+((hh*0.025)*4),
							"♫ " + π.round(dat.vlmPrt*100,0) + "%",
							{colorE:[0,0,1,0.375],textBaselineS:"middle",textAlignS:"left",fntHgtPrt:0.015});
						;},},
				{
					lblS   : "cps",
					drwFxn : function(dat,curU){
						if (!nun(dat.cpsF)){return;}
						//....
						var hh = dat.cvsBndE.h;
						dat.g.textFill(
							dat.cvsBndE.x + (hh*0.012),
							dat.cvsBndE.y + (hh*0.015)+((hh*0.025)*5),
							"✎ " + ((dat.cpsF===T)?("composer mode"):("normal mode")),
							{colorE:[0,0,1,0.375],textBaselineS:"middle",textAlignS:"left",fntHgtPrt:0.015});
						;},},
				{
					lblS   : "snp",
					drwFxn : function(dat,curU){
						if (!nun(dat.snpDmrN)){return;}
						//....
						var hh = dat.cvsBndE.h;
						dat.g.textFill(
							dat.cvsBndE.x + (hh*0.012),
							dat.cvsBndE.y + (hh*0.015)+((hh*0.025)*6),
							"▤ " + π.round(dat.snpDmrN,0) + "x",
							{colorE:[0,0,1,0.375],textBaselineS:"middle",textAlignS:"left",fntHgtPrt:0.015});
						;},},
				{
					lblS   : "bpm",
					drwFxn : function(dat,curU){
						if (!(nun(dat.cpsF) && dat.cpsF === T)){return;} // Only render when Composer mode is enabled.
						if (!nun(dat.bpmEA)){return;}
						//....
						var hh = dat.cvsBndE.h;
						dat.bpmEA.forEach(bpmE=>{
							dat.drwBpmHedFxn(bpmE.hedU,curU,bpmE.dltU);
							;});
						;},},
				],
			},
		drawFrame : function(curT){
			var curU = π.clcClkCurU(this.dat.clkIdtS,curT);
			if (nun(this.dat.g) && nun(this.dat.cvsBndE)){
				
				// Pre-calculation.
				this.dat.pclN_0 = this.dat.pclFxn_clcPosNFxn_1_pclN_0();
				this.dat.pclN_1 = this.dat.pclFxn_clcPosNFxn_1_pclN_1();
				
				this.dat.bin.forEach(rowE=>{
					rowE.drwFxn(this.dat,curU);});}},
	};
	return oo;
};