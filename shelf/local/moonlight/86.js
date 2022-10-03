moonlight.bin["86"] = function(){
	var oo = {
		nameInformalS : "Chart Composer Tracker",
		importEO : {
			dltMagMinU : {},
			edgHedF    : {},
			edgHedU    : {},
			edgHedZ    : {},
			edgTalF    : {},
			edgTalU    : {},
			edgTalZ    : {},
			nteEA      : {},
			rstZ       : {},
			snpUA      : {},},
		exportEO : {
			hedUA    : {},
			talUA    : {},
			trgAltZ  : {},},
		dat : {
			hedUA : [] ,
			talUA : [] ,},
		import : function(){
			var altF = F;
			
			var clcF = F;
			// rstZ is a bit funky.
			// It's triggered first, before proper data is piped.
			// Therefore, hedUA and talUA will be re-fed with existing data (doing a whole lot of nothing).
			// Instead of relying on rstZ for a non-existent use case, we implicitly reset on netEA consumption.
			if (this.chg("rstZ")){
				this.dat.hedUA.length = 0;
				this.dat.talUA.length = 0;
				if (nun(this.dat.nteEA)){
					clcF = T;}}
			if (this.chk("nteEA")){
				this.dat.hedUA.length = 0;
				this.dat.talUA.length = 0;
				clcF = T;}
			if (clcF === T){
				// Turn all pre-existing notes into composer nodes.
				this.dat.nteEA.forEach(nteE=>{
					this.dat.hedUA.pushUnique(π.round(nteE.hedU,3));
					if (nteE.hedU !== nteE.talU){
						this.dat.talUA.pushUnique(π.round(nteE.talU,3));}
					altF = T;});}
			
			if (this.chg("edgHedZ") || this.chg("edgTalZ")){
				if (this.chg("edgHedZ")){
					if (nun(this.dat.edgHedF) && nun(this.dat.edgHedU)){
						if (this.dat.edgHedF === T){
							// Attempt to align to nearest snap.
							var edgHedU;{
								var posSnpU;{
									if (nun(this.dat.dltMagMinU) && nun(this.dat.snpUA) && this.dat.snpUA.length >= 1){
										var dltUA = this.dat.snpUA.map(snpU=>Math.abs(snpU - this.dat.edgHedU));
										var posSnpU = this.dat.snpUA[dltUA.indexOf(dltUA.min())];}}
								edgHedU = ((posSnpU !== U) ? (posSnpU) : (this.dat.edgHedU));}
							//....
							var hedUAI = this.dat.hedUA.findIndex(hedU=>π.clcAnlPrxFFxn(hedU,edgHedU,0.001));
							if (hedUAI === -1){
								this.dat.hedUA.push(π.round(edgHedU,3));}
							else{
								this.dat.hedUA.removeIndex(hedUAI);}
							altF = T;}}}
				if (this.chg("edgTalZ")){
					if (nun(this.dat.edgTalF) && nun(this.dat.edgTalU)){
						if (this.dat.edgTalF === T){
							// Attempt to align to nearest snap.
							var edgTalU;{
								var posSnpU;{
									if (nun(this.dat.dltMagMinU) && nun(this.dat.snpUA) && this.dat.snpUA.length >= 1){
										var dltUA = this.dat.snpUA.map(snpU=>Math.abs(snpU - this.dat.edgTalU));
										var posSnpU = this.dat.snpUA[dltUA.indexOf(dltUA.min())];}}
								edgTalU = ((posSnpU !== U) ? (posSnpU) : (this.dat.edgTalU));}
							//....
							var talUAI = this.dat.talUA.findIndex(talU=>π.clcAnlPrxFFxn(talU,edgTalU,0.001));
							if (talUAI === -1){
								this.dat.talUA.push(π.round(edgTalU,3));}
							else{
								this.dat.talUA.removeIndex(talUAI);}
							altF = T;}}}}
			if (altF === T){
				this.dat.trgAltZ = π.signalFlip(this.dat.trgAltZ);}
			;},
	};
	return oo;};