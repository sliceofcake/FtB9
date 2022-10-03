moonlight.bin["85"] = function(){
	var oo = {
		nameInformalS : "Chart Composer Combiner",
		importEO : {
			cpsHedUA : {},
			cpsTalUA : {},
			trgAltZ  : {},},
		exportEO : {
			nteAltEA      : {},
			trgZ_nteAltEA : {},},
		dat : {},
		import : function(){
			if (this.chg("trgAltZ") || this.chg("cpsHedUA") || this.chg("cpsTalUA")){
				if (nun(this.dat.cpsHedUA) && nun(this.dat.cpsTalUA)){
					
					this.dat.nteAltEA;{
						this.dat.nteAltEA = [];
						var mrkEA;{
							mrkEA = [];
							this.dat.cpsHedUA.forEach(cpsHedU=>{
								mrkEA.push({typS:"hed",posU:cpsHedU});});
							this.dat.cpsTalUA.forEach(cpsTalU=>{
								mrkEA.push({typS:"tal",posU:cpsTalU});});
							mrkEA.sort(function(a,b){
								var _0 = a.posU - b.posU;
								// If stacked, attempt to have tails come before heads.
								if (_0 === 0){
									if (a.typS === "tal"){return -1;}
									if (b.typS === "tal"){return  1;}}
								return _0;});}
						var talU = U;
						mrkEA.forEachReverse(mrkE=>{
							if (mrkE.typS === "tal"){
								talU = mrkE.posU;
								return;}
							if (mrkE.typS === "hed"){
								if (talU === U){
									this.dat.nteAltEA.push({hedU:mrkE.posU,talU:mrkE.posU});}
								else{
									this.dat.nteAltEA.push({hedU:mrkE.posU,talU});}
								talU = U;}});
						this.dat.nteAltEA.sort(function(a,b){
							var h = a.hedU - b.hedU;
							return (h !== 0) ? h : a.talU - b.talU;});
						this.dat.nteAltEA = this.dat.nteAltEA.filter(nteE=>nteE.hedU >= 0 && nteE.talU >= 0); // positive notes
						this.dat.nteAltEA = this.dat.nteAltEA.filter(nteE=>nteE.talU >= nteE.hedU); // well-formed hold notes
						;}
					this.dat.trgZ_nteAltEA = π.signalFlip(this.dat.trgZ_nteAltEA);
					;}}
			;},
	};
	return oo;};