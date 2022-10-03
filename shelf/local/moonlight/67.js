moonlight.bin["67"] = function(){
	var oo = {
		nameInformalS : "Tracer Report Function 1:0",
		importEO : {
			datM_0 : {},
			trgFxn : {},},
		exportEO : {},
		dat : {
			datM_0 : U      ,
			trgFxn : ()=>{} ,},
		import : function(){
			if (this.chk("tracer") || this.chg("datM_0")){ // || this.chk("trgFxn")
				this.dat.trgFxn(this.dat.tracer,this.dat.datM_0);}},
	};
	return oo;
};