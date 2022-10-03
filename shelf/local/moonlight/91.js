moonlight.bin["91"] = function(){
	var oo = {
		nameInformalS : "BPM Alter Composer",
		importEO : {
			bpmEA      : {},
			clkIdtS    : {},
			trgDecBigZ : {},
			trgDecZ    : {},
			trgHghZ    : {},
			trgIncBigZ : {},
			trgIncZ    : {},
			trgLowZ    : {},},
		exportEO : {
			bpmEA   : {},
			bpmAltZ : {},},
		dat : {
			// Note:
			// 60/bpm = dltU
			// 60/dltU = bpm
			bpmDltN    : 0.01 ,
			bpmBigDltN : 1.00 ,
		},
		import : function(){
			
			// It's not worth the visual code complexity of perfectly time-matching the signals for BPM controls.
			// So instead, we just pull the current time.
			// Honestly, if you're editing BPMs while not paused, you're a madman anyway.
			if (!nun("clkIdtS")){return;}
			var curU = π.clcClkCurU(this.dat.clkIdtS);
			
			var altF = F;
			if (this.chg("trgHghZ")){
				var bpmEAI = this.dat.bpmEA.findIndex(bpmE=>bpmE.hedU===curU);
				if (bpmEAI === -1){
					this.dat.bpmEA.push({hedU:curU,dltU:1});
					this.dat.bpmEA.sort((_0,_1)=>_0.hedU-_1.hedU);
					//....
					altF = T;}}
			if (this.chg("trgLowZ")){
				var bpmEAI = this.dat.bpmEA.findIndex(bpmE=>bpmE.hedU===curU);
				if (bpmEAI !== -1){
					this.dat.bpmEA.removeIndex(bpmEAI);
					//....
					altF = T;}}
			if (this.chg("trgIncZ")){
				var bpmE = this.dat.bpmEA.findLast(bpmE=>bpmE.hedU<=curU);
				if (bpmE !== U){
					var bpmN = 60 / bpmE.dltU;
					bpmN += this.dat.bpmDltN;
					var dltU = (60 / bpmN);
					bpmE.dltU = dltU;
					//....
					altF = T;}}
			if (this.chg("trgDecZ")){
				var bpmE = this.dat.bpmEA.findLast(bpmE=>bpmE.hedU<=curU);
				if (bpmE !== U){
					var bpmN = 60 / bpmE.dltU;
					bpmN -= this.dat.bpmDltN;
					if (bpmN < this.dat.bpmDltN){
						bpmN = this.dat.bpmDltN;}
					var dltU = (60 / bpmN);
					bpmE.dltU = dltU;
					//....
					altF = T;}}
			if (this.chg("trgIncBigZ")){
				var bpmE = this.dat.bpmEA.findLast(bpmE=>bpmE.hedU<=curU);
				if (bpmE !== U){
					var bpmN = 60 / bpmE.dltU;
					bpmN += this.dat.bpmBigDltN;
					var dltU = (60 / bpmN);
					bpmE.dltU = dltU;
					//....
					altF = T;}}
			if (this.chg("trgDecBigZ")){
				var bpmE = this.dat.bpmEA.findLast(bpmE=>bpmE.hedU<=curU);
				if (bpmE !== U){
					var bpmN = 60 / bpmE.dltU;
					bpmN -= this.dat.bpmBigDltN;
					if (bpmN < this.dat.bpmBigDltN){
						bpmN = this.dat.bpmBigDltN;}
					var dltU = (60 / bpmN);
					bpmE.dltU = dltU;
					//....
					altF = T;}}
			if (altF === T){
				this.dat.bpmAltZ = π.signalFlip(this.dat.bpmAltZ);}
			;},
	};
	return oo;};