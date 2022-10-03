moonlight.bin["27"] = function(){
	var oo = {
		nameInformalS : "Icon Processor (FtI)",
		importEO : {
			imgBitA : {cleanFxn : v=>v,},
			color   : {cleanFxn : v=>v,},
			wdtDspN : {cleanFxn : v=>v,},
			hgtDspN : {cleanFxn : v=>v,},
		},
		exportEO : {
			g : {eqFxn : (a,b,dat)=>F,},
		},
		dat : {
			color   : [0,0,0,0],
			imgBitA : N,
			g       : U,
			hgtDspN : 0,
			pntReqF : T,
			wdtDspN : 0,
		},
		ctr   :function(){
			this.dat.g = anipnt.genG({elCanvas : document.createElement("canvas")}).g;},
		import:function(prpSA=[]){
			var wdtDspNF = (π.vInA("wdtDspN",prpSA) && this.dat.wdtDspN !== U && this.dat.wdtDspN !== N);
			var hgtDspNF = (π.vInA("hgtDspN",prpSA) && this.dat.hgtDspN !== U && this.dat.hgtDspN !== N);
			if ((wdtDspNF || hgtDspNF) && this.dat.wdtDspN !== U && this.dat.wdtDspN !== N && this.dat.hgtDspN !== U && this.dat.hgtDspN !== N){
				this.dat.g.assert({wdtN:this.dat.wdtDspN,hgtN:this.dat.hgtDspN});
				this.dat.pntReqF = T;}
			
			if (π.vInA("imgBitA",prpSA)){
				this.dat.pntReqF = T;}},
		drawFrame : function(){
			if (this.dat.pntReqF){
				this.dat.g.clear();
				
				if (this.dat.imgBitA !== U && this.dat.imgBitA !== N){
					this.dat.g.assert({wdtN:this.dat.imgBitA.width,hgtN:this.dat.imgBitA.height});
					//this.dat.g.circleFill(10,10,10,{colorE:[0.5,1,0.5,1]});
					var {statusF,datNA} = datax.vlqaA.decode({datBitA:this.dat.imgBitA});
					if (statusF === T){
						// !!! Consider folding these draw features into g.
						this.dat.g.assert({colorE:this.dat.color});
						var issueF          = F           ;
						var expectationS    = "versionID" ;
						var mem             = []          ;
						var penStateS       = "up"        ;
						var denominatorAngN               ;
						var denominatorLinN               ;
						var xRctN           =           0 ;
						var yRctN           =           0 ;
						for (var datNAI = 0;;){
							if (datNA.length <= datNAI){
								//ll("M27 death 0");
								break;}
							var v = datNA[datNAI++];
							//ll(expectationS+":");
							switch (expectationS){default:
								break;case "versionID":
									if (v !== 1){
										issueF = T;
										//ll("M27 death : versionID not 1")
										break;}
									expectationS = "linear denominator";
								break;case "linear denominator":
									denominatorLinN = v;
									//ll({denominatorLinN});
									expectationS = "angular denominator";
								break;case "angular denominator":
									denominatorAngN = v;
									//ll({denominatorAngN});
									expectationS = "commandID";
								break;case "commandID":
									commandID = v;
									// Blank commands
									switch (commandID){default:;
										// FtI command #0 (Terminate):
										// "00"(command # : 0)
										break;case 0:
											;
										// FtI command #2 (Pen Down):
										// "0110"(command # : 2)
										break;case 2:
											penStateS = "dn";
											this.dat.g.ctx.beginPath();
										// FtI command #3 (Pen Up):
										// "1110"(command # : 3)
										break;case 3:
											penStateS = "up";
										// FtI command #4 (Fill):
										// "010110"(command # : 4)
										break;case 4:
											//this.dat.g.ctx.stroke();
											//ll("this.dat.g.ctx.fill();");
											this.dat.g.ctx.fill();
									}
									if ([0,2,3,4].includes(commandID)){
										expectationS = "commandID";}
									else{
										expectationS = "command "+commandID+" payload [0]";}
								
								// FtI command #1 (Pen Move Linear):
								// "10"(command # : 1)
								// VLQA(numerator-x)
								// VLQA(numerator-y)
								break;case "command 1 payload [0]":mem[0] = v;expectationS = "command 1 payload [1]";
								break;case "command 1 payload [1]":mem[1] = v;expectationS = "commandID";
									var wMulN = this.dat.g.wdtN;
									var hMulN = this.dat.g.hgtN;
									var xN    = (mem[0] / denominatorLinN);xRctN = xN;
									var yN    = (mem[1] / denominatorLinN);yRctN = yN;
									switch (penStateS){default:;
										break;case "up":
											//ll("dbg",xN,wMulN,this.dat.g.pxdN);
											//ll("this.dat.g.ctx.moveTo("+(xN*wMulN*this.dat.g.pxdN)+","+(yN*hMulN*this.dat.g.pxdN)+");");
											this.dat.g.ctx.moveTo(xN*wMulN*this.dat.g.pxdN,yN*hMulN*this.dat.g.pxdN);
										break;case "dn":
											//ll("this.dat.g.ctx.lineTo("+(xN*wMulN*this.dat.g.pxdN)+","+(yN*hMulN*this.dat.g.pxdN)+");");
											this.dat.g.ctx.lineTo(xN*wMulN*this.dat.g.pxdN,yN*hMulN*this.dat.g.pxdN);}
								
								// FtI command #5 (Pen Move Angular):
								// "110110"(command # : 5)
								// VLQA(numerator-x-pivot)
								// VLQA(numerator-y-pivot)
								// VLQA(flag clockwise-0 counterclockwise-1)
								// VLQA(numerator-a)
								break;case "command 5 payload [0]":mem[0] = v;expectationS = "command 5 payload [1]";
								break;case "command 5 payload [1]":mem[1] = v;expectationS = "command 5 payload [2]";
								break;case "command 5 payload [2]":mem[2] = v;expectationS = "command 5 payload [3]";
								break;case "command 5 payload [3]":mem[3] = v;expectationS = "commandID";
									var wMulN = this.dat.g.wdtN;
									var hMulN = this.dat.g.hgtN;
									var sMulN = this.dat.g.wdtN; // Square assumed, don't care.
									var xN    = mem[0] / denominatorLinN;
									var yN    = mem[1] / denominatorLinN;
									var ccwF  = (mem[2] === 1);
									var aN    = mem[3] / denominatorAngN;
									var rN    = Math.sqrt((xN - xRctN)**2 + (yN - yRctN)**2);
									var angHeadN = π.dirVToAngNFxn({x:xRctN-xN,y:yRctN-yN});
									var angSwepN = aN*360*(ccwF?-1:1);
									var angTailN = angHeadN + angSwepN;
									var {x:xRctN,y:yRctN} = π.angNToDirVFxn(angHeadN);xRctN *= rN;yRctN *= rN;xRctN += xN;yRctN += yN;
									switch (penStateS){default:;
										break;case "up":
											// !!! Needs verification
											//ll("this.dat.g.ctx.moveTo("+(xRctN*wMulN*this.dat.g.pxdN)+","+(yRctN*hMulN*this.dat.g.pxdN)+");");
											this.dat.g.ctx.moveTo(xRctN*wMulN*this.dat.g.pxdN,yRctN*hMulN*this.dat.g.pxdN);
										break;case "dn":
											//ll({rN,wMulN,angHeadN,angTailN});
											//ll("this.dat.g.ctx.arc("+(xN*wMulN*this.dat.g.pxdN)+","+(yN*hMulN*this.dat.g.pxdN)+","+(rN*sMulN*this.dat.g.pxdN)+","+(angHeadN+"deg")+","+(angTailN+"deg")+","+(ccwF)+"); (sweep:"+angSwepN+"deg)");
											this.dat.g.ctx.arc(
												xN*wMulN*this.dat.g.pxdN,
												yN*hMulN*this.dat.g.pxdN,
												rN*sMulN*this.dat.g.pxdN,
												angHeadN * Ω.degToRadMulN,
												angTailN * Ω.degToRadMulN,
												ccwF);}
									
							}
							if (issueF === T){
								break;}
							// !!! HERE - actually draw (select color and bg so fills actually make sense)
							//ll(v);
							;}
						;}
					//this.dat.g.ctx.drawImage(this.dat.imgBitA,0,0,this.dat.g.elCanvas.width,this.dat.g.elCanvas.height);
					;}
				
				this.chain();
				this.dat.pntReqF = F;}},
	};
	return oo;
};