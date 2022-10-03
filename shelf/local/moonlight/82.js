moonlight.bin["82"] = function(){
	var oo = {
		nameInformalS : "Game Frame Waveform External",
		importEO : {
			audBlb    : {},
			chnS      : {},
			clkIdtS   : {},
			cvsBndE   : {},
			g         : {},
			cpsF      : {},
			posJdgPrt : {},
			velLinN   : {},},
		exportEO : {},
		dat : {
			datAudNA       : [] ,
			smpRteN        : U  , // Original sample rate.
			smpRteAltN     : U  , // Altered sample rate to cut down on data size.
			wdwWdtDltT     :  3 ,
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
			
			bin : [
				{
					lblS   : "wvf",
					drwFxn : function(dat,curU){
						if (T || curU < 0.1){
							
							if (!nun(dat.posJdgPrt) || !nun(dat.velLinN)){return;}
							//....
							
							// [!] [[[dat.velLinN]]] is measured in screens per second.
							// Sloppy pixel alignment brain problems happening all over here.
							// Go back eventually and make sure it's pixel-perfect, accurate with [M38].
							
							var chnN;{
								switch (dat.chnS){default : {chnN = U;return;}
									break;case "L" : {chnN = 0;}
									break;case "R" : {chnN = 1;};}}
							
							var x;{
								switch (chnN){default : {x = U;}
									break;case 0:{x = dat.cvsBndE.x + 0;}
									break;case 1:{x = dat.cvsBndE.x + dat.cvsBndE.w;}}}
							var wMulN;{
								switch (chnN){default : {wMulN = U;}
									break;case 0:{wMulN =  1;}
									break;case 1:{wMulN = -1;}}}
							var h = 2;
							dat.g.assert({colorE:[0,0,1,0.5]});
							var hedU = (dat.clcDltUFxn_1(dat.cvsBndE.h)) + curU;
							var talU = (dat.clcDltUFxn_1(            0)) + curU;
							var datAudHedNAI = Math.floor(hedU * dat.smpRteAltN) - 1; // We want one offscreen point as well to avoid premature clipping.
							var datAudTalNAI = Math.ceil(talU * dat.smpRteAltN) + 1; // We want one offscreen point as well to avoid premature clipping.
							//ll(datAudHedNAI+" -> "+datAudTalNAI);
							var crdEA = [];
							for (var datAudNAI = datAudHedNAI; datAudNAI <= datAudTalNAI; datAudNAI++){
								if (datAudNAI < 0){continue;}
								if (datAudNAI >= dat.datAudNA.length){break;}
								var datAudN = dat.datAudNA[datAudNAI];
								//datAudN = datAudN * datAudN;
								var posU = (datAudNAI / dat.smpRteAltN);
								var posN = dat.clcPosNFxn_1(posU - curU);
								//if (datAudNAI < 3){ll(posN);}
								var y = posN;
								var w = datAudN * dat.cvsBndE.w * wMulN;
								crdEA.push({x:x+w,y});
								//this.g.rectFill_FAST(x,y,w,h);
								;}
							if (crdEA.length >= 1){
								var crdE_0 = crdEA[0];
								var crdE_1 = crdEA[crdEA.length - 1];
								crdEA.push({x         ,y:crdE_1.y});
								crdEA.push({x         ,y:crdE_0.y});
								crdEA.push({x:crdE_0.x,y:crdE_0.y});
								dat.g.pthFil_FAST(crdEA);}
							//dat.datAudNA.every((datAudN,datAudNAI)=>{
							//	var posU = (datAudNAI / (44100 / 88));
							//	var posN = dat.clcPosNFxn_1(posU - curU,this.g);
							//	//if (datAudNAI < 3){ll(posN);}
							//	var y = posN;
							//	var x = wdtHlfN;
							//	var w = datAudN * wdtHlfN;
							//	this.g.rectFill_FAST(x,y,w,h);
							//	return T;});
							;}
						;},},
				//tst : {
				//	drwFxn : function(dat,curU){return;
				//		if (F && curU >= 0.1){
				//			
				//			this.g.clear();
				//			if (!nun(dat.dspWdtN) || !nun(dat.dspHgtN) || !nun(dat.posJdgPrt) || !nun(dat.velLinN)){return;}
				//			//....
				//			
				//			var y = curU * 20;
				//			if (this.g.elCanvas.width  === 0){return;} //llw("Manually blocked a 0-"+"width" +" canvas draw because Chrome is stupid.");
				//			if (this.g.elCanvas.height === 0){return;} //llw("Manually blocked a 0-"+"height"+" canvas draw because Chrome is stupid.");
				//			this.g.ctx.drawImage(
				//				dat.bin.wvf.g.elCanvas,
				//				0,0,dat.bin.wvf.g.wdtN*dat.bin.wvf.g.pxdN,dat.bin.wvf.g.hgtN*dat.bin.wvf.g.pxdN,
				//				0,y,this.g.wdtN*this.g.pxdN,this.g.hgtN*this.g.pxdN);
				//			
				//			;}
				//		
				//		;},},
				],
			},
		import : function(){
			if ((this.chk("audBlb") && this.dat.cpsF === T) || (this.chk("cpsF") && this.dat.cpsF === T && nun(this.dat.audBlb))){
				var audioContext = new window.AudioContext();
				
				// [https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API]
				// 0-left, 1-right
				//
				// [https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer]
				// audioBuffer.numberOfChannels
				// audioBuffer.sampleRate
				// getChannelData() returns Float32Array
				this.dat.audBlb.arrayBuffer()
					.then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
					.then(audioBuffer => {
						ll(audioBuffer);
						//ll(audioBuffer.getChannelData(0));
						//ll(audioBuffer.sampleRate); // ex:44100, sampleRate * duration = number of samples.
						
						this.dat.smpRteN = audioBuffer.sampleRate;
						var zomN = Math.round(this.dat.smpRteN/512); // Desire for x points per second.
						this.dat.smpRteAltN = this.dat.smpRteN / zomN;
						
						var chnN;{
							switch (this.dat.chnS){default : {chnN = U;return;}
								break;case "L" : {chnN = 0;}
								break;case "R" : {chnN = 1;};}}
						
						// (Option 1 of 2) Copy.
						//this.dat.datAudNA = Array.from(audioBuffer.getChannelData(0));
						
						// (Option 2 of 2) Fake copy for testing averaging at an arbitrary zoom amount.
						this.dat.datAudNA = [];
						var datNA = audioBuffer.getChannelData(chnN);
						for (var datNAI_0 = 0,datNAC = datNA.length; datNAI_0 < datNAC; datNAI_0+=zomN){
							
							//// Option : Average.
							//var nmrN = 0;
							//var dmrN = 0;
							//for (var lopN = 0,datNAI_1 = datNAI_0; lopN < zomN && datNAI_1 < datNAC; lopN++,datNAI_1++){
							//	nmrN += datNA[datNAI_1];
							//	dmrN++;}
							//if (dmrN === 0){break;} // [!] You never know. This is still sloppy though.
							//var avgN = nmrN / dmrN;
							//this.dat.datAudNA.push(avgN);
							
							// Option : Max.
							var maxN = 0;
							for (var lopN = 0,datNAI_1 = datNAI_0; lopN < zomN && datNAI_1 < datNAC; lopN++,datNAI_1++){
								var datN = datNA[datNAI_1];
								if (Math.abs(datN) > Math.abs(maxN)){maxN = datN;}}
							this.dat.datAudNA.push(Math.abs(maxN));
							
							;}
						
						// Alter.
						//var datAudMaxN = this.dat.datAudNA.max();
						var lopMaxN = Math.ceil(((this.dat.wdwWdtDltT*this.dat.smpRteAltN)-1)/2);
						this.dat.datAudNA = this.dat.datAudNA.map((datAudN,datAudNAI,datAudNA)=>{
							
							//// Normalize.
							//datAudN = datAudN / datAudMaxN;
							
							// Moving-max normalization.
							var maxN = datAudN;
							for (var lopN = 1; lopN <= lopMaxN; lopN++){
								var datSekN = datAudNA[datAudNAI+lopN];if (datSekN !== U && datSekN > maxN){maxN = datSekN;}
								var datSekN = datAudNA[datAudNAI-lopN];if (datSekN !== U && datSekN > maxN){maxN = datSekN;}}
							datAudN = datAudN / maxN;
							
							// Accentuate.
							datAudN = Math.pow(datAudN,1.2);
							
							return datAudN;});
						
						;});
				;}
			;},
		drawFrame : function(curT){
			var curU = π.clcClkCurU(this.dat.clkIdtS,curT);
			if (nun(this.dat.g) && nun(this.dat.cvsBndE) && (this.dat.cpsF === T)){
				
				// Pre-calculation.
				this.dat.pclN_0 = this.dat.pclFxn_clcPosNFxn_1_pclN_0();
				this.dat.pclN_1 = this.dat.pclFxn_clcPosNFxn_1_pclN_1();
				
				this.dat.bin.forEach(rowE=>{
					rowE.drwFxn(this.dat,curU);});}},
	};
	return oo;
};