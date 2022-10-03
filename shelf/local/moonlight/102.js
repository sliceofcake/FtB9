moonlight.bin["102"] = function(){
	var oo = {
		nameInformalS : "Full-Screen Canvas Manager",
		importEO : {
			cvsElm    : {},
			cvsWrpElm : {},},
		exportEO : {
			g : {},},
		dat : {
			obsRszM : U ,
			//....
			pmpFxn : function(){
				//this.cvsElm.width  = this.cvsElm.clientWidth  * Ω.pxd ;
				//this.cvsElm.height = this.cvsElm.clientHeight * Ω.pxd ;
				
				//ll("pmp,"+this.cvsElm.clientWidth+","+this.cvsElm.clientHeight);
				if (nun(this.g)){
					this.g.assert({
						wdtN : window.innerWidth  ,
						hgtN : window.innerHeight ,});
					//ll(this.g.elCanvas,this.g.wdtN,this.g.hgtN);
					;}
				
				;},},
		ctr : async function(){
			this.dat.obsRszM = new ResizeObserver((function(dat){return function(){
				dat.pmpFxn();};})(this.dat));},
		dtr : function(){
			this.dat.obsRszM.disconnect();},
		import : function(){
			// (1)
			if (this.chk("cvsElm")){
				if (nun(this.dat.cvsElm)){
					this.dat.g = anipnt.genG({elCanvas:this.dat.cvsElm}).g;}
				else{
					this.dat.g = U;}}
			// (2)
			if (this.chk("cvsWrpElm")){
				this.dat.obsRszM.disconnect();
				if (nun(this.dat.cvsWrpElm)){
					this.dat.g = anipnt.genG({elCanvas:this.dat.cvsElm}).g;
					this.dat.pmpFxn();
					this.dat.obsRszM.observe(this.dat.cvsWrpElm);}
				else{
					this.dat.g = U;}}
			;},
		drawFrame : function(curT){
			if (nun(this.dat.g)){
				this.dat.g.clear();}
			;},
	};
	return oo;
};