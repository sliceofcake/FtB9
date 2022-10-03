moonlight.bin["33"] = function(){
	var oo = {
		nameInformalS : "Text Display",
		importEO : {
			datS      : {cleanFxn : v=>v,},
			posS      : {cleanFxn : v=>v,},
			colorE    : {cleanFxn : v=>v,},
			fntHgtPrt : {cleanFxn : v=>v,},
			wdtDspN   : {cleanFxn : v=>v,},
			hgtDspN   : {cleanFxn : v=>v,},
		},
		exportEO : {
			g : {eqFxn : (a,b,dat)=>F,},
		},
		dat : {
			colorE    : [0,0,0.5,1] ,
			datS      : ""          ,
			fntHgtPrt :           0 ,
			g         : U           ,
			hgtDspN   :           0 ,
			pntReqF   : T           ,
			posS      : ""          , // Cardinal
			wdtDspN   :           0 ,},
		ctr : async function(){
			this.dat.g = anipnt.genG({elCanvas : document.createElement("canvas")}).g;},
		import : function(prpSA=[]){
			if (π.vInA("datS",prpSA) && this.dat.datS !== U && this.dat.datS !== N){
				this.dat.pntReqF = T;}
			var wdtDspNF = (π.vInA("wdtDspN",prpSA) && this.dat.wdtDspN !== U && this.dat.wdtDspN !== N);
			var hgtDspNF = (π.vInA("hgtDspN",prpSA) && this.dat.hgtDspN !== U && this.dat.hgtDspN !== N);
			if ((wdtDspNF || hgtDspNF) && this.dat.wdtDspN !== U && this.dat.wdtDspN !== N && this.dat.hgtDspN !== U && this.dat.hgtDspN !== N){
				this.dat.g.assert({wdtN:this.dat.wdtDspN,hgtN:this.dat.hgtDspN});
				this.dat.pntReqF = T;}
			;},
		drawFrame : function(){
			if (this.dat.pntReqF){
				this.dat.g.clear();
				this.dat.g.textFill(
					this.dat.g.wdtHlfN,
					this.dat.g.hgtHlfN,
					this.dat.datS,
					{textBaselineS:"middle",fntHgtPrt:this.dat.fntHgtPrt,textAlignS:"center",colorE:this.dat.colorE});
				this.chain();
				this.dat.pntReqF = F;}},
	};
	return oo;
};