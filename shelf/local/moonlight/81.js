moonlight.bin["81"] = function(){
	var oo = {
		nameInformalS : "Tracer Report Function 2:0",
		importEO : {
			datM_0 : {},
			datM_1 : {},
			trgFxn : {},},
		exportEO : {},
		dat : {
			datM_0 : U      ,
			datM_1 : U      ,
			trgFxn : ()=>{} ,},
		import : function(){
			if (this.chk("tracer") || this.chg("datM_0") || this.chg("datM_1")){ // || this.chk("trgFxn") // [!] We don't want the trgFxn "refiring" on function change. Leave this out.
				this.dat.trgFxn(this.dat.tracer,this.dat.datM_0,this.dat.datM_1);}},
	};
	return oo;
};