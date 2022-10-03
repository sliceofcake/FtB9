moonlight.bin["80"] = function(){
	var oo = {
		nameInformalS : "Game Frame Left Sidebar External",
		importEO : {
			audLenDltT       : {},
			clkIdtS          : {},
			cpsF             : {},
			cvsBndE          : {},
			g                : {},
			lneNxscrNA       : {},
			lneNxscrCurMaxNA : {},
			nteAltDltT       : {},
			plyT             : {},
			snpDmrN          : {},
			velClkBseN       : {},
			velClkCtlN       : {},
			velClkPrfN       : {},
			velLinN          : {},
			vlmPrt           : {},},
		exportEO : {},
		dat : {
			//....
			bin : [
				{
					lblS   : "prg",
					drwFxn : function(dat,curU){
						if (!nun(dat.audLenDltT) || !nun(dat.velClkBseN) || !nun(dat.velClkPrfN) || !nun(dat.velClkCtlN)){return;}
						//....
						var hh = dat.cvsBndE.h;
						//ll(curU / dat.audLenDltT,dat.dspHgtN,"");
						var prgPrt = (curU / dat.audLenDltT);
						var rdsN = (hh*0.04) / 2;
						dat.g.pieFill(
							dat.cvsBndE.x + dat.cvsBndE.w - (hh*0.012) - rdsN,
							dat.cvsBndE.y + (hh*0.012) + rdsN,
							rdsN*2,0,2*Math.PI,1,{colorE:[0,0,0.125,1]});
						dat.g.pieFill(
							dat.cvsBndE.x + dat.cvsBndE.w - (hh*0.012) - rdsN,
							dat.cvsBndE.y + (hh*0.012) + rdsN,
							rdsN*2,-0.25,prgPrt-0.25,((prgPrt<0)?-1:1),((prgPrt<0)?{colorE:[0,0,0,1]}:{colorE:[0,0,0.25,1]}));
						;},},
				{
					lblS   : "scr",
					drwFxn : function(dat,curU){
						if (!nun(dat.lneNxscrNA) || !nun(dat.lneNxscrCurMaxNA)){return;}
						//....
						var hh = dat.cvsBndE.h;
						var scrN = dat.lneNxscrNA.sum();
						var scrCurMaxN = dat.lneNxscrCurMaxNA.sum();
						var scrPrt = scrN / scrCurMaxN;
						//ll(scrN + " / " + scrCurMaxN);
						//ll(dat.lneNxscrCurMaxNA);
						
						//var scrS_0 = str(Math.floor(scrN));
						//var scrS_1 = "." + str(Math.round((scrN - Math.floor(scrN)) * Math.pow(10,1)));
						//// !!! A bit dirty. Support measuring text better without deliberately setting global/cross-call font size here. Avoid division by pxdN.
						//dat.g.assert({fntHgtPrt:0.01});
						//var scrDspWdtN_0 = dat.g.ctx.measureText(scrS_0).width / dat.g.pxdN;
						//dat.g.textFill(dat.cvsBndE.x+           0,dat.cvsBndE.y+150+0,scrS_0,{colorE:[0,0,1,1.00],textBaselineS:"middle",textAlignS:"left"});
						//dat.g.textFill(dat.cvsBndE.x+scrDspWdtN_0,dat.cvsBndE.y+150+0,scrS_1,{colorE:[0,0,1,0.50],textBaselineS:"middle",textAlignS:"left"});
						//
						//var scrS_0 = str(Math.floor(scrCurMaxN));
						//var scrS_1 = "." + str(Math.round((scrCurMaxN - Math.floor(scrCurMaxN)) * Math.pow(10,1)));
						//// !!! A bit dirty. Support measuring text better without deliberately setting global/cross-call font size here. Avoid division by pxdN.
						//dat.g.assert({fntHgtPrt:0.01});
						//var scrDspWdtN_0 = dat.g.ctx.measureText(scrS_0).width / dat.g.pxdN;
						//dat.g.textFill(dat.cvsBndE.x+           0,dat.cvsBndE.y+150+15,scrS_0,{colorE:[0,0,1,1.00],textBaselineS:"middle",textAlignS:"left"});
						//dat.g.textFill(dat.cvsBndE.x+scrDspWdtN_0,dat.cvsBndE.y+150+15,scrS_1,{colorE:[0,0,1,0.50],textBaselineS:"middle",textAlignS:"left"});
						
						dat.g.assert({fntHgtPrt:0.04});
						if      (isNaN(scrPrt) === T          ){scrS_0 = "" ;}
						else if (1.0 <= scrPrt                ){scrS_0 = "S";}
						else if (0.9 <= scrPrt && scrPrt < 1.0){scrS_0 = "A";}
						else if (0.8 <= scrPrt && scrPrt < 0.9){scrS_0 = "B";}
						else if (0.7 <= scrPrt && scrPrt < 0.8){scrS_0 = "C";}
						else if (0.6 <= scrPrt && scrPrt < 0.7){scrS_0 = "D";}
						else if (                 scrPrt < 0.6){scrS_0 = "F";}
						else                                   {scrS_0 = "" ;}
						var scrS_1 = ((isNaN(scrPrt) === F) ? (π.round(scrPrt*100,1)+"%") : (""));
						dat.g.textFill(dat.cvsBndE.x + dat.cvsBndE.w - (hh*0.012),dat.cvsBndE.y+(hh*0.1)           ,scrS_0,{colorE:[0,0,1,0.50],textBaselineS:"middle",textAlignS:"right"});
						dat.g.assert({fntHgtPrt:0.01});
						dat.g.textFill(dat.cvsBndE.x + dat.cvsBndE.w - (hh*0.012),dat.cvsBndE.y+(hh*0.1)+(hh*0.024),scrS_1,{colorE:[0,0,1,0.375],textBaselineS:"middle",textAlignS:"right"});
						;},},
				{
					lblS   : "ply",
					drwFxn : function(dat,curU){
						if (!nun(dat.plyT)){return;}
						//....
						var hh = dat.cvsBndE.h;
						var curT = π.clcCurT();
						var dltT;{
							dltT = dat.plyT - curT;
							if (dltT < 0){return;}}
						dat.g.textFill(dat.cvsBndE.x + dat.cvsBndE.w - (hh*0.012),dat.cvsBndE.y + (hh*0.24),"resuming in:"       ,{colorE:[0,0,1,1.00],textBaselineS:"middle",textAlignS:"right",fntHgtPrt:0.010});
						dat.g.textFill(dat.cvsBndE.x + dat.cvsBndE.w - (hh*0.012),dat.cvsBndE.y + (hh*0.26),π.round(dltT,3) + "s",{colorE:[0,0,1,1.00],textBaselineS:"middle",textAlignS:"right",fntHgtPrt:0.015});
						;},},
				],
			},
		import : function(){;},
		drawFrame : function(curT){
			var curU = π.clcClkCurU(this.dat.clkIdtS,curT);
			if (nun(this.dat.g) && nun(this.dat.cvsBndE)){
				this.dat.bin.forEach(rowE=>{
					rowE.drwFxn(this.dat,curU);});}},
	};
	return oo;
};