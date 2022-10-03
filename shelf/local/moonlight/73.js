moonlight.bin["73"] = function(){
	var oo = {
		nameInformalS : "Calculate Game Frame CSS Dimensions",
		importEO : {
			aspRtoLneN      : {},
			aspRtoPrgBarN   : {},
			aspRtoWvfN      : {},
			lneC            : {},
			trgRszZ         : {},
			wrpElm          : {},},
		exportEO : {
			cvsBndE_lft    : {},
			cvsBndE_ovr    : {},
			cvsBndE_rgt    : {},
			cvsBndE_wvfLft : {},
			cvsBndE_wvfRgt : {},
			hgtAllN        : {},
			hgtLneWrpN     : {},
			hgtPrgBarN     : {},
			hgtWvfLftN     : {},
			hgtWvfN        : {},
			hgtWvfRgtN     : {},
			lneNxcvsBndE   : {},
			wdtAllN        : {},
			wdtLneWrpN     : {},
			wdtPrgBarN     : {},
			wdtWvfLftN     : {},
			wdtWvfN        : {},
			wdtWvfRgtN     : {},},
		dat : {},
		import : function(){
			if ((this.chg("aspRtoLneN") || this.chg("aspRtoWvfN") || this.chg("aspRtoPrgBarN") || this.chg("lneC") || this.chg("wrpElm") || this.chg("trgRszZ"))
			&&   (nun(this.dat.aspRtoLneN) && nun(this.dat.aspRtoWvfN) && nun(this.dat.aspRtoPrgBarN) && nun(this.dat.lneC) && nun(this.dat.wrpElm))){
				var wdtWrpN = this.dat.wrpElm.clientWidth  ;
				var hgtWrpN = this.dat.wrpElm.clientHeight ;
				if (wdtWrpN === 0 || hgtWrpN === 0){
					this.dat.hgtAllN      = 0;
					this.dat.hgtLneWrpN   = 0;
					this.dat.hgtPrgBarN   = 0;
					this.dat.hgtWvfLftN   = 0;
					this.dat.hgtWvfN      = 0;
					this.dat.hgtWvfRgtN   = 0;
					this.dat.lneNxcvsBndE = (new Array(this.dat.lneC)).map(_=>({x:0,y:0,w:0,h:0,xx:0,yy:0}));
					this.dat.wdtAllN      = 0;
					this.dat.wdtLneWrpN   = 0;
					this.dat.wdtPrgBarN   = 0;
					this.dat.wdtWvfLftN   = 0;
					this.dat.wdtWvfN      = 0;
					this.dat.wdtWvfRgtN   = 0;}
				else{
					var wdtAllN;
					var hgtAllN;
					var aspRtoCurN = wdtWrpN / hgtWrpN;
					var aspRtoAllN = (this.dat.aspRtoLneN * this.dat.lneC) + (this.dat.aspRtoWvfN * 2) + (this.dat.aspRtoPrgBarN * 2);
					// Case : black bars on top and bottom.
					if (aspRtoAllN > aspRtoCurN){
						wdtAllN = wdtWrpN;
						hgtAllN = wdtWrpN * (1 / aspRtoAllN);}
					// Case : black bars on left and right.
					else if (aspRtoAllN < aspRtoCurN){
						wdtAllN = hgtWrpN * (aspRtoAllN / 1);
						hgtAllN = hgtWrpN;}
					// Case : no black bars. perfect fit.
					else{
						wdtAllN = wdtWrpN;
						hgtAllN = hgtWrpN;}
					this.dat.hgtAllN    = hgtAllN;
					this.dat.hgtLneWrpN = hgtAllN;
					this.dat.hgtPrgBarN = hgtAllN;
					this.dat.hgtWvfLftN = hgtAllN;
					this.dat.hgtWvfN    = hgtAllN;
					this.dat.hgtWvfRgtN = hgtAllN;
					//....
					this.dat.wdtAllN    = wdtAllN;
					this.dat.wdtLneWrpN = (this.dat.aspRtoLneN * this.dat.lneC) * this.dat.hgtLneWrpN;
					this.dat.wdtPrgBarN = (this.dat.aspRtoPrgBarN             ) * this.dat.hgtPrgBarN;
					this.dat.wdtWvfLftN = (this.dat.aspRtoWvfN                ) * this.dat.hgtWvfLftN;
					this.dat.wdtWvfRgtN = (this.dat.aspRtoWvfN                ) * this.dat.hgtWvfRgtN;
					//....
					this.dat.wdtWvfN    = this.dat.wdtWvfLftN + this.dat.wdtLneWrpN + this.dat.wdtWvfRgtN;
					//----
					this.dat.lneNxcvsBndE = (new Array(this.dat.lneC)).map((_,lneN)=>{
						var w = this.dat.aspRtoLneN * hgtAllN;
						var h = hgtAllN;
						var x = (wdtWrpN/2)-((this.dat.lneC/2)*w)+(lneN*w);
						var y = 0;
						return {
							x  : x,
							y  : y,
							xx : x+w,
							yy : y+h,
							w  : w,
							h  : h,};});
					
					this.dat.cvsBndE_lft;{
						var w = this.dat.wdtPrgBarN;
						var h = this.dat.hgtPrgBarN;
						var x = (wdtWrpN/2)-((this.dat.lneC/2)*(this.dat.aspRtoLneN * hgtAllN))-(w);
						var y = 0;
						this.dat.cvsBndE_lft = {
							x  : x,
							y  : y,
							xx : x+w,
							yy : y+h,
							w  : w,
							h  : h,};}
					this.dat.cvsBndE_rgt;{
						var w = this.dat.wdtPrgBarN;
						var h = this.dat.hgtPrgBarN;
						var x = (wdtWrpN/2)+((this.dat.lneC/2)*(this.dat.aspRtoLneN * hgtAllN));
						var y = 0;
						this.dat.cvsBndE_rgt = {
							x  : x,
							y  : y,
							xx : x+w,
							yy : y+h,
							w  : w,
							h  : h,};}
					
					this.dat.cvsBndE_wvfLft;{
						var w = this.dat.wdtWvfLftN;
						var h = this.dat.hgtWvfLftN;
						var x = (wdtWrpN/2)-((this.dat.lneC/2)*(this.dat.aspRtoLneN * hgtAllN))-(this.dat.wdtPrgBarN)-(w);
						var y = 0;
						this.dat.cvsBndE_wvfLft = {
							x  : x,
							y  : y,
							xx : x+w,
							yy : y+h,
							w  : w,
							h  : h,};}
					this.dat.cvsBndE_wvfRgt;{
						var w = this.dat.wdtWvfRgtN;
						var h = this.dat.hgtWvfRgtN;
						var x = (wdtWrpN/2)+((this.dat.lneC/2)*(this.dat.aspRtoLneN * hgtAllN))+(this.dat.wdtPrgBarN);
						var y = 0;
						this.dat.cvsBndE_wvfRgt = {
							x  : x,
							y  : y,
							xx : x+w,
							yy : y+h,
							w  : w,
							h  : h,};}
					
					this.dat.cvsBndE_ovr;{
						var w = wdtAllN;
						var h = hgtAllN;
						var x = ((wdtWrpN-wdtAllN)/2);
						var y = 0;
						this.dat.cvsBndE_ovr = {
							x  : x,
							y  : y,
							xx : x+w,
							yy : y+h,
							w  : w,
							h  : h,};}
					
					;}}},
	};
	return oo;
};