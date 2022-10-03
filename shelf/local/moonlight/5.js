moonlight.bin["5"] = function(){
	var oo = {
		nameInformalS : "Bar",
		importEO : {
			dirN    : {cleanFxn : v=>num(v),},
			minN    : {cleanFxn : v=>num(v),},
			oriN    : {cleanFxn : v=>num(v),},
			maxN    : {cleanFxn : v=>num(v),},
			dsrN    : {cleanFxn : v=>num(v),},
			ptrE    : {cleanFxn : v=>v,},
			wdtDspN : {cleanFxn : v=>v,},
			hgtDspN : {cleanFxn : v=>v,},
		},
		exportEO : {
			curN : {eqFxn : (a,b    )=>a===b,withholdInitialF:T,},
			g    : {eqFxn : (a,b,dat)=>F,},
		},
		dat : {
			curN    : 0,
			dirN    : 3/4,
			dsrN    : 0,
			g       : U,
			hgtDspN : 0,
			maxN    : 0,
			minN    : 0,
			oriN    : 0,
			pntReqF : T,
			ptrE    : U,
			wdtDspN : 0,
			
			//calcDrawP : function(curN){
			//	var numeratorN   = (     curN - this.minN);
			//	var denominatorN = (this.maxN - this.minN);
			//	if (denominatorN === 0){return 0;}
			//	var fractionN = numeratorN / denominatorN;
			//	return fractionN;},
			//calcDrawReverseP : function(mouseX,mouseY){
			//	var fractionN    = mouseX / (this.elO.bar0.width/Ω.pxd);
			//	var denominatorN = (this.maxN - this.minN);
			//	var numeratorN   = fractionN * denominatorN;
			//	var curN = numeratorN + this.minN;
			//	return curN;},
			//
			//pointerFxn : function(ev,that){
			//	if (Ω.mousedownF){
			//		this.dsrN = that.calcDrawReverseP(ev.offsetX);
			//		this.dsrT = π.now()                          ;
			//		// !!! kludge because I just need this thing to basically work
			//		this.curN = this.dsrN;
			//		ll("pointerFxn"+" "+this.curN);
			//		moonlight.chain(this.parent.ID);}},
		},
		ctr   :function(){
			//var pointerFxnWrapper = (function(that){return function(ev){that.dat.pointerFxn(ev,that.dat);};})(this);
			//{mousedown:pointerFxnWrapper,mousemove:pointerFxnWrapper,mouseup:pointerFxnWrapper}
			this.dat.g = anipnt.genG({elCanvas  : document.createElement("canvas")}).g;
			this.dat.curN = this.dat.dsrN;},
		import:function(prpSA=[]){
			var alterF = F;
			if (π.vInA("ptrE",prpSA) && this.dat.ptrE !== U && this.dat.ptrE !== N && this.dat.ptrE.staF === T){
				//ll(this.dat.ptrE);
				// !!! HERE? - support the ptrE and g standards, refer to bottom note of index.php
				
				// !!! HERE support any direction
				dsrV = {x:this.dat.ptrE.xP-0.5,y:this.dat.ptrE.yP-0.5};
				var dN       = Math.hypot(this.dat.g.wdtN/2,this.dat.g.hgtN/2);
				var angN     = this.dat.dirN * Ω.prtToRadMulN;
				var legHalfN = Math.cos(angN) * dN;
				var legN     = legHalfN * 2;
				
				var curN_FREEZE = this.dat.curN;
				switch (this.dat.dirN){default:;
					break;case 0    : this.dat.curN = ((this.dat.maxN - this.dat.minN) * (    this.dat.ptrE.xP)) + this.dat.minN;
					break;case 0.25 : this.dat.curN = ((this.dat.maxN - this.dat.minN) * (    this.dat.ptrE.yP)) + this.dat.minN;
					break;case 0.5  : this.dat.curN = ((this.dat.maxN - this.dat.minN) * (1 - this.dat.ptrE.xP)) + this.dat.minN;
					break;case 0.75 : this.dat.curN = ((this.dat.maxN - this.dat.minN) * (1 - this.dat.ptrE.yP)) + this.dat.minN;}
				//ll(this.dat.curN);
				//ll(this.dat.minN+","+this.dat.maxN+","+this.dat.ptrE.yP);
				if (this.dat.curN !== curN_FREEZE){
					alterF = T;}}
			if (π.vInA("dsrN",prpSA)){
				this.dat.curN = this.dat.dsrN;}
			if (alterF || π.aaIntersect(["wdtN","hgtN","curN","minN","maxN"],prpSA)){
				this.dat.pntReqF = T;}
			
			var wdtDspNF = (π.vInA("wdtDspN",prpSA) && this.dat.wdtDspN !== U && this.dat.wdtDspN !== N);
			var hgtDspNF = (π.vInA("hgtDspN",prpSA) && this.dat.hgtDspN !== U && this.dat.hgtDspN !== N);
			if ((wdtDspNF || hgtDspNF) && this.dat.wdtDspN !== U && this.dat.wdtDspN !== N && this.dat.hgtDspN !== U && this.dat.hgtDspN !== N){
				this.dat.g.assert({wdtN:this.dat.wdtDspN,hgtN:this.dat.hgtDspN});
				this.dat.pntReqF = T;}
			;},
		drawFrame:function(){
			// !!! ?
			if (this.dat.pntReqF){
				this.dat.g.clear();
				this.dat.g.resetTransform();
				this.dat.g.rotate(this.dat.dirN);
				this.dat.g.rectFill(
					0,
					0,
					this.dat.g.wdtN,
					this.dat.g.hgtN,
					{colorE:[0,1,0.5,0.5]});
				this.dat.g.rectFill(
					0,
					0,
					((this.dat.curN - this.dat.minN) / (this.dat.maxN - this.dat.minN)) * this.dat.g.wdtN,
					this.dat.g.hgtN,
					{colorE:[0,1,0.5,1]});
				//ll(0.1 * ((this.dat.curN - this.dat.minN) / (this.dat.maxN - this.dat.minN)) * this.dat.g.hgtN);
				
				//this.dat.g.circleFill(Math.random()*90,Math.random()*90,2,{colorE:[0,1,0.5,1]});
				this.chain();
				this.dat.pntReqF = F;}
			//this.dat.assertCanvasSizeAll();
			//var oriP = this.dat.calcDrawP(this.dat.oriN);
			//var curP = this.dat.calcDrawP(this.dat.curN);
			//anipnt.clearRect(this.dat.ctxO.bar0,0,0,this.dat.elO.bar0.width,this.dat.elO.bar0.height,Ω.pxd);
			//var gradient = this.dat.ctxO.bar0.createLinearGradient(oriP*this.dat.elO.bar0.width,this.dat.elO.bar0.height,curP*this.dat.elO.bar0.width,this.dat.elO.bar0.height);
			//gradient.addColorStop(0,ç.p([0,1,0.5,0.5]));
			//gradient.addColorStop(1,ç.p([0,1,0.5,1.0]));
			//anipnt.drawRect(this.dat.ctxO.bar0,oriP*this.dat.elO.bar0.width/Ω.pxd,0,curP*this.dat.elO.bar0.width/Ω.pxd,this.dat.elO.bar0.height/Ω.pxd,gradient,Ω.pxd);
			;},
	};
	return oo;
};