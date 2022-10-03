// [!] snfM is purely in order to get moonlight to provide a circuit wire so that we get access to tracer.
moonlight.bin["70"] = function(){
	var oo = {
		nameInformalS : "Tracer Report Function 0:0",
		importEO : {
			snfM   : {},
			trgFxn : {},},
		exportEO : {},
		dat : {
			snfM   : U      ,
			trgFxn : ()=>{} ,},
		import : function(){
			if (this.chk("tracer")){
				this.dat.trgFxn(this.dat.tracer);}},
	};
	return oo;
};