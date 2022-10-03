// [!] ancU and ancT of this block and of the clock may be intentionally different due [poor] signal management.
moonlight.bin["84"] = function(){
	var oo = {
		nameInformalS : "Clock Controller",
		importEO : {
			ancT       : {},
			ancU       : {},
			audLenDltT : {},
			bpmEA      : {},
			clkIdtS    : {},
			clkSetZ    : {},
			cpsF       : {},
			plyZ       : {},
			pauZ       : {},
			scrBarDecZ : {},
			scrBarIncZ : {},
			scrHedZ    : {},
			scrTalZ    : {},
			scrMrkZ_0  : {},
			scrMrkZ_1  : {},
			scrMrkZ_2  : {},
			scrMrkZ_3  : {},
			scrMrkZ_4  : {},
			scrMrkZ_5  : {},
			scrMrkZ_6  : {},
			scrMrkZ_7  : {},
			scrMrkZ_8  : {},
			scrMrkZ_9  : {},
			scrSnpDecZ : {},
			scrSnpIncZ : {},
			snpDmrN    : {},
			velClkBseN : {},
			velClkPrfN : {},},
		exportEO : {
			altZ_snpUA: {},
			dltMagMinU : {},
			plyT       : {},
			snpUA      : {},
			tmeAltZ    : {},
			velClkBseN : {},
			velClkCtlN : {},
			velClkPrfN : {},},
		dat : {
			barUA      : []    ,
			dltMagMinU : 0.001 , // Step magnitude used for floating point close-enough comparison.
			snpUA      : []    ,
			velClkCtlN : 1     ,
			//....
			plyFxn : function(){
				this.velClkCtlN = 1;
				var ancT = π.clcCurT();
				var ancU = π.clcClkCurU(this.clkIdtS,ancT);
				Ω.clk[this.clkIdtS].ancT = ancT;
				Ω.clk[this.clkIdtS].ancU = ancU;
				Ω.clk[this.clkIdtS].velN = this.velClkBseN * this.velClkPrfN * this.velClkCtlN;
				this.plyT = U;
				; // Here[afterward], the calling function needs to flip [[[tmeAltZ]]].
				;},
			fltIssIntFxn : function(datN){
				return (Math.abs(datN - Math.trunc(datN)) < this.dltMagMinU);},
			anlEqlFxn : function(datN_0,datN_1){
				return (Math.abs(datN_0 - datN_1) < this.dltMagMinU);},},
		import : function(){
			if (!nun(this.dat.clkIdtS)){return;}
			var tmeAltF = F;
			//....
			if (this.chk("clkSetZ") && (nun(this.dat.ancT) && nun(this.dat.ancU) && nun(this.dat.velClkBseN) && nun(this.dat.velClkPrfN))){
				Ω.clk[this.dat.clkIdtS].ancT = this.dat.ancT;
				Ω.clk[this.dat.clkIdtS].ancU = this.dat.ancU;
				Ω.clk[this.dat.clkIdtS].velN = this.dat.velClkBseN * this.dat.velClkPrfN * this.dat.velClkCtlN;
				tmeAltF = T;}
			// Elusive Bug Museum - these inputs weren't clocked, so a redundant ancU:-2 was ignored on [P] key.
			//if (this.chk("ancT")){
			//	Ω.clk[this.dat.clkIdtS].ancT = this.dat.ancT;
			//	tmeAltF = T;}
			//if (this.chk("ancU")){ll(this.dat.ancU);
			//	Ω.clk[this.dat.clkIdtS].ancU = this.dat.ancU;
			//	tmeAltF = T;}
			
			if ((this.chk("velClkBseN") || this.chk("velClkPrfN")) && (nun(this.dat.velClkBseN) && nun(this.dat.velClkPrfN))){
				var ancT = π.clcCurT();
				var ancU = π.clcClkCurU(this.dat.clkIdtS,ancT);
				Ω.clk[this.dat.clkIdtS].ancT = ancT;
				Ω.clk[this.dat.clkIdtS].ancU = ancU;
				Ω.clk[this.dat.clkIdtS].velN = this.dat.velClkBseN * this.dat.velClkPrfN * this.dat.velClkCtlN;
				tmeAltF = T;}
			//....
			// Calculate massive bar and snap tables.
			if ((this.chg("bpmEA") || this.chg("snpDmrN") || this.chg("audLenDltT"))
			&&  (nun(this.dat.bpmEA) && nun(this.dat.snpDmrN) && Number.isFinite(this.dat.audLenDltT))){
				// !!! CODE DUPLICATION
				// [!] Attempts to reuse memory [of this.dat.barUA and this.dat.snpUA] as much as possible.
				var barUAI = 0;
				for (var bpmEAI = 0,bpmEAC = this.dat.bpmEA.length; bpmEAI < bpmEAC; bpmEAI++){
					var bpmCurE = this.dat.bpmEA[bpmEAI  ];
					var bpmNxtE = this.dat.bpmEA[bpmEAI+1];
					for (var barN = 0;; barN++){
						var barU = bpmCurE.hedU + (bpmCurE.dltU * barN);
						if ((bpmNxtE !== U && barU >= bpmNxtE.hedU) || barU > this.dat.audLenDltT){break;}
						this.dat.barUA[barUAI++] = barU;
						//barUAI++;
						;}}
				this.dat.barUA.length = barUAI;
				this.dat.barUA = π.uniqueA(this.dat.barUA);
				this.dat.barUA.sort((a,b)=>a - b);
				//ll("barUAI : "+barUAI+"("+this.dat.audLenDltT+")");
				//....
				var snpUAI = 0;
				for (var bpmEAI = 0,bpmEAC = this.dat.bpmEA.length; bpmEAI < bpmEAC; bpmEAI++){
					var bpmCurE = this.dat.bpmEA[bpmEAI  ];
					var bpmNxtE = this.dat.bpmEA[bpmEAI+1];
					for (var snpN = 0;; snpN++){
						var snpU = bpmCurE.hedU + ((bpmCurE.dltU / this.dat.snpDmrN) * snpN);
						if ((bpmNxtE !== U && snpU >= bpmNxtE.hedU) || snpU > this.dat.audLenDltT){break;}
						this.dat.snpUA[snpUAI++] = snpU;
						//snpUAI++;
						;}}
				this.dat.snpUA.length = snpUAI;
				this.dat.snpUA = π.uniqueA(this.dat.snpUA);
				this.dat.snpUA.sort((a,b)=>a - b);
				this.dat.altZ_snpUA = π.signalFlip(this.dat.altZ_snpUA);
				//ll("snpUAI : "+snpUAI+"("+this.dat.audLenDltT+")");
				;}
			
			if (this.chg("pauZ")){
				this.dat.velClkCtlN = 0;
				var ancT = π.clcCurT();
				var ancU = π.clcClkCurU(this.dat.clkIdtS,ancT);
				Ω.clk[this.dat.clkIdtS].ancT = ancT;
				Ω.clk[this.dat.clkIdtS].ancU = ancU;
				Ω.clk[this.dat.clkIdtS].velN = this.dat.velClkBseN * this.dat.velClkPrfN * this.dat.velClkCtlN;
				tmeAltF = T;}
			if (this.chg("plyZ")){
				// If Composer Mode or already playing:
				if (this.dat.cpsF === T || this.dat.velClkCtlN !== 0){
					this.dat.plyFxn();
					tmeAltF = T;}
				// Else Play Mode and paused:
				else{
					var plyDltT = 1;
					this.dat.plyT = π.clcCurT() + plyDltT;
					this.dat.plySchT = π.delay({tag:"M84",fxn:(function(that){return function(){
						that.dat.plyFxn();
						that.dat.tmeAltZ = π.signalFlip(that.dat.tmeAltZ);
						that.chain();};})(this),t:plyDltT});}}
			if (this.chg("scrBarDecZ")
			||  this.chg("scrBarIncZ")
			||  this.chg("scrSnpDecZ")
			||  this.chg("scrSnpIncZ")){
				var posBarPrvU ;
				var posBarNxtU ;
				var posSnpPrvU ;
				var posSnpNxtU ; {
					
					//
					var curU = π.clcClkCurU(this.dat.clkIdtS);
					
					// Standard case with snaps.
					if ((nun(this.dat.bpmEA) && nun(this.dat.snpDmrN))
					&&  (this.dat.bpmEA.length >= 1 && this.dat.snpDmrN >= 1 && this.dat.barUA.length >= 1 && this.dat.snpUA.length >= 1)){
						
						//ll("[M84] Standard.");
						
						// ATTEMPT #C : grossly inefficient, but simple.
						var dltUA = this.dat.barUA.map(barU=>barU - curU);
						posBarPrvU = this.dat.barUA[dltUA.indexOf(dltUA.filter(dltU=>dltU < -1 * this.dat.dltMagMinU).getTal())];if (posBarPrvU === U){posBarPrvU = curU - 1;}
						posBarNxtU = this.dat.barUA[dltUA.indexOf(dltUA.filter(dltU=>dltU >      this.dat.dltMagMinU).getHed())];if (posBarNxtU === U){posBarNxtU = curU + 1;}
						//....
						var dltUA = this.dat.snpUA.map(snpU=>snpU - curU);
						posSnpPrvU = this.dat.snpUA[dltUA.indexOf(dltUA.filter(dltU=>dltU < -1 * this.dat.dltMagMinU).getTal())];if (posSnpPrvU === U){posSnpPrvU = curU - 0.001;}
						posSnpNxtU = this.dat.snpUA[dltUA.indexOf(dltUA.filter(dltU=>dltU >      this.dat.dltMagMinU).getHed())];if (posSnpNxtU === U){posSnpNxtU = curU + 0.001;}
						
						//ll("");
						//ll(curU);
						//ll("snp : " + this.dat.snpUA[0] + " " + this.dat.snpUA[1] + " " + this.dat.snpUA[2] + " " + this.dat.snpUA[3]);
						//ll("dlt : " +          dltUA[0] + " " +          dltUA[1] + " " +          dltUA[2] + " " +          dltUA[3]);
						//ll("posBarPrvU : " + posBarPrvU);
						//ll("posBarNxtU : " + posBarNxtU);
						//ll("posSnpPrvU : " + posSnpPrvU);
						//ll("posSnpNxtU : " + posSnpNxtU);
						//ll("");
						//ll("NEXT");
						//ll(dltUA.filter(dltU=>dltU >      this.dat.dltMagMinU));
						//ll(dltUA.filter(dltU=>dltU >      this.dat.dltMagMinU).getHed());
						//ll(dltUA.indexOf(dltUA.filter(dltU=>dltU >      this.dat.dltMagMinU).getHed()));
						//ll(this.dat.snpUA[dltUA.indexOf(dltUA.filter(dltU=>dltU >      this.dat.dltMagMinU).getHed())]);
						//ll(posSnpNxtU);
						//window.curU  = curU;
						//window.dat   = this.dat;
						//window.dltUA = dltUA;
						//ll("");
						
						//// ATTEMPT #B : fewer, but still too many special cases.
						//var barPrvU ;
						//var barNxtU ; {
						//	// The closest bar.
						//	var fndE = this.dat.barUA.findSortedNumeric(curU); // [!] Array.findSortedNumeric() not yet implemented.
						//	fndE.lowI;
						//	fndE.hghI;
						//	var barNeaUAI = ???;
						//	var barNeaU = this.dat.barUA[barNeaEAI];
						//	
						//	
						//	var errLowDltU = Math.abs(curU - this.dat.barUA[fndE.lowI]);
						//	var errHghDltU = Math.abs(curU - this.dat.barUA[fndE.hghI]);
						//	
						//	// Case : curU is "on" a line.
						//	if ((fndE.lowI === fndE.hghI)
						//	 || (errLowDltU < this.dat.dltMagMinU)
						//	 || (errHghDltU < this.dat.dltMagMinU)){
						//		if (errLowDltU < this.dat.dltMagMinU){
						//			barNeaUAI = fndE.lowI;}
						//		else if (errHghDltU < this.dat.dltMagMinU){
						//			barNeaUAI = fndE.lowI;}
						//		else{
						//			barNeaUAI = fndE.lowI;}
						//		barPrvU = this.dat.barUA[barNeaUAI-1];
						//		barNxtU = this.dat.barUA[barNeaUAI+1];}
						//	// Case : curU is between lines.
						//	else{
						//		barPrvU = ???;
						//		barNxtU = ???;}
						//	if (barPrvU === U){barPrvU = barNeaU;}
						//	if (barNxtU === U){barNxtU = barNeaU;}}
						
						// ATTEMPT #A : far too many special cases.
						//// Any of these may be U.
						//var bpmPrvE ;
						//var bpmCurE ;
						//var bpmNxtE ; {
						//	var bpmCurEAI;{
						//		// Reverse-find the first bpm to start before curU.
						//		for (bpmCurEAI = this.dat.bpmEA.length - 1; bpmCurEAI >= 0; bpmCurEAI--){
						//			var bpmE = this.dat.bpmEA[bpmCurEAI];
						//			// Special case : curU is "on" this bpm's hedU.
						//			if (this.dat.fltEqlFxn(curU,bpmE.hedU) === T){
						//				break;}
						//			// Standard case : curU comes after this bpm's hedU.
						//			if (curU >= bpmE.hedU){
						//				break;}}}
						//	bpmPrvE = this.dat.bpmEA[bpmCurEAI-1];
						//	bpmCurE = this.dat.bpmEA[bpmCurEAI  ];
						//	bpmNxtE = this.dat.bpmEA[bpmCurEAI+1];}
						//
						//var barRawN = (curU - bpmCurE.hedU) / bpmCurE.dltU;
						//
						//// Case : curU is "on" a line.
						//if (this.dat.fltIssIntFxn(barRawN)){
						//	var barPrvN;{
						//		var barPrvN = Math.round(barRawN) - 1;
						//		// Special case : previous bar exists before current bpm.
						//		if (barPrvN < 0){
						//			if (bpmPrvE !== U){
						//				barPrvN = ???;}
						//			else{
						//				// There is no previous bpm. Seek a tad to the limit.
						//				barPrvN = 0;}}}
						//	var barNxtN;{
						//		var barNxtN = Math.round(barRawN) + 1;
						//		// Special case : previous bar exists before current bpm.
						//		if (bpmNxtE !== U barNxtN > bpmNxtE.hedU){
						//			if (bpmNxtE !== U){
						//				barNxtN = ???;}
						//			else{
						//				// There is no previous bpm. Seek a tad to the limit.
						//				barNxtN = 0;}}}
						//	
						//	
						//	
						//	var barNxtN = Math.ceil (barRawN);
						//	;}
						//// Case : not current on a line.
						//else{
						//	var barPrvN = Math.floor(barRawN);
						//	var barNxtN = Math.ceil (barRawN);
						//	posBarPrvU = (barPrvN * bpmCurE.dltU) + bpmCurE.hedU;
						//	posBarNxtU = (barNxtN * bpmCurE.dltU) + bpmCurE.hedU;}
						//
						//// Calculate nearby snaps.
						//var snpRawN = (curU - bpmCurE.hedU) / (bpmCurE.dltU / this.dat.snpDmrN);
						//var snpPrvN = Math.floor(snpRawN);
						//var snpNxtN = Math.ceil (snpRawN);
						//posSnpPrvU = (snpPrvN * (bpmCurE.dltU / this.dat.snpDmrN)) + bpmCurE.hedU;
						//posSnpNxtU = (snpNxtN * (bpmCurE.dltU / this.dat.snpDmrN)) + bpmCurE.hedU;
						;}
					// Special case when no snaps.
					else{
						posBarPrvU = curU - 1     ;
						posBarNxtU = curU + 1     ;
						posSnpPrvU = curU - 0.001 ;
						posSnpNxtU = curU + 0.001 ;
						
						//ll("[M84] Timeless Special.");
						//ll("curU       : "+curU      );
						//ll("posBarPrvU : "+posBarPrvU);
						//ll("posBarNxtU : "+posBarNxtU);
						//ll("posSnpPrvU : "+posSnpPrvU);
						//ll("posSnpNxtU : "+posSnpNxtU);
						;}}
				
				//ll("[M84] " + posBarPrvU + "," + posBarNxtU + "," + posSnpPrvU + "," + posSnpNxtU);
				
				if (this.chg("scrBarDecZ")){//ll("[M84] scrBarDecZ");
					var ancT = π.clcCurT();
					Ω.clk[this.dat.clkIdtS].ancT = ancT;
					Ω.clk[this.dat.clkIdtS].ancU = posBarPrvU;
					tmeAltF = T;}
				if (this.chg("scrBarIncZ")){//ll("[M84] scrBarIncZ");
					var ancT = π.clcCurT();
					Ω.clk[this.dat.clkIdtS].ancT = ancT;
					Ω.clk[this.dat.clkIdtS].ancU = posBarNxtU;
					tmeAltF = T;}
				if (this.chg("scrSnpDecZ")){//ll("[M84] scrSnpDecZ");
					var ancT = π.clcCurT();
					Ω.clk[this.dat.clkIdtS].ancT = ancT;
					Ω.clk[this.dat.clkIdtS].ancU = posSnpPrvU;
					tmeAltF = T;}
				if (this.chg("scrSnpIncZ")){//ll("[M84] scrSnpIncZ");
					var ancT = π.clcCurT();
					Ω.clk[this.dat.clkIdtS].ancT = ancT;
					Ω.clk[this.dat.clkIdtS].ancU = posSnpNxtU;
					tmeAltF = T;}
				;}
			if (this.chg("scrHedZ"  )){var ancT = π.clcCurT();Ω.clk[this.dat.clkIdtS].ancT = ancT;Ω.clk[this.dat.clkIdtS].ancU = this.dat.audLenDltT * 0.0;tmeAltF = T;}
			if (this.chg("scrTalZ"  )){var ancT = π.clcCurT();Ω.clk[this.dat.clkIdtS].ancT = ancT;Ω.clk[this.dat.clkIdtS].ancU = this.dat.audLenDltT * 1.0;tmeAltF = T;}
			if (this.chg("scrMrkZ_0")){var ancT = π.clcCurT();Ω.clk[this.dat.clkIdtS].ancT = ancT;Ω.clk[this.dat.clkIdtS].ancU = this.dat.audLenDltT * 0.0;tmeAltF = T;}
			if (this.chg("scrMrkZ_1")){var ancT = π.clcCurT();Ω.clk[this.dat.clkIdtS].ancT = ancT;Ω.clk[this.dat.clkIdtS].ancU = this.dat.audLenDltT * 0.1;tmeAltF = T;}
			if (this.chg("scrMrkZ_2")){var ancT = π.clcCurT();Ω.clk[this.dat.clkIdtS].ancT = ancT;Ω.clk[this.dat.clkIdtS].ancU = this.dat.audLenDltT * 0.2;tmeAltF = T;}
			if (this.chg("scrMrkZ_3")){var ancT = π.clcCurT();Ω.clk[this.dat.clkIdtS].ancT = ancT;Ω.clk[this.dat.clkIdtS].ancU = this.dat.audLenDltT * 0.3;tmeAltF = T;}
			if (this.chg("scrMrkZ_4")){var ancT = π.clcCurT();Ω.clk[this.dat.clkIdtS].ancT = ancT;Ω.clk[this.dat.clkIdtS].ancU = this.dat.audLenDltT * 0.4;tmeAltF = T;}
			if (this.chg("scrMrkZ_5")){var ancT = π.clcCurT();Ω.clk[this.dat.clkIdtS].ancT = ancT;Ω.clk[this.dat.clkIdtS].ancU = this.dat.audLenDltT * 0.5;tmeAltF = T;}
			if (this.chg("scrMrkZ_6")){var ancT = π.clcCurT();Ω.clk[this.dat.clkIdtS].ancT = ancT;Ω.clk[this.dat.clkIdtS].ancU = this.dat.audLenDltT * 0.6;tmeAltF = T;}
			if (this.chg("scrMrkZ_7")){var ancT = π.clcCurT();Ω.clk[this.dat.clkIdtS].ancT = ancT;Ω.clk[this.dat.clkIdtS].ancU = this.dat.audLenDltT * 0.7;tmeAltF = T;}
			if (this.chg("scrMrkZ_8")){var ancT = π.clcCurT();Ω.clk[this.dat.clkIdtS].ancT = ancT;Ω.clk[this.dat.clkIdtS].ancU = this.dat.audLenDltT * 0.8;tmeAltF = T;}
			if (this.chg("scrMrkZ_9")){var ancT = π.clcCurT();Ω.clk[this.dat.clkIdtS].ancT = ancT;Ω.clk[this.dat.clkIdtS].ancU = this.dat.audLenDltT * 0.9;tmeAltF = T;}
			//....
			if (tmeAltF === T){
				this.dat.tmeAltZ = π.signalFlip(this.dat.tmeAltZ);}
			;},
	};
	return oo;};