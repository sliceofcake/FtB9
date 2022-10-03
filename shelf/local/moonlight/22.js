moonlight.bin["22"] = function(){
	var oo = {
		nameInformalS : "HTML Renderer",
		importEO : {
			elM    : {cleanFxn : v=>v,},
			elRoot : {cleanFxn : v=>v,},
		},
		exportEO : {},
		dat : {
			elM    : [],
			elRoot : N ,
			
			renderFxn : function(){
				µ.rr(this.elRoot,µ.m([[this.elM]]));},
		},
		ctr : function(){
			this.dat.renderFxn();},
		import : function(prpSA=[]){
			if (π.vInA("elM",prpSA) || π.vInA("elRoot",prpSA)){
				this.dat.renderFxn();}},
	};
	return oo;
};