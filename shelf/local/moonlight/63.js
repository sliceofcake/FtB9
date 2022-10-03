moonlight.bin["63"] = function(){
	var oo = {
		nameInformalS : "Combinational Logic Function Call 1:0",
		importEO : {
			datM_0 : {},
			trgFxn : {},},
		exportEO : {},
		dat : {
			datM_0 : U      ,
			trgFxn : ()=>{} ,},
		import : function(){
			if (this.chg("datM_0") || this.chk("trgFxn")){
				this.dat.trgFxn(this.dat.datM_0);}},
	};
	return oo;
};