moonlight.bin["104"] = function(){
	var oo = {
		nameInformalS : "Pump 1x",
		importEO : {
			I0 : {},
			Z  : {},},
		exportEO : {
			O0 : {eqFxn:(a,b,dat)=>{
				var res = dat.drtF;
				dat.drtF = F;
				return res;}},},
		dat : {
			drtF : F,},
		import : function(){
			if (this.chg("Z") || this.chk("I0")){
				this.dat.O0 = this.dat.I0;
				this.dat.drtF = T;}},
	};
	return oo;};