moonlight.bin["105"] = function(){
	var oo = {
		nameInformalS : "Signaled Flag",
		importEO : {
			datF : {},
			hghZ : {},
			lowZ : {},},
		exportEO : {
			altF : {},},
		dat : {},
		import : function(){
			if (this.chk("datF")){
				this.dat.altF = this.dat.datF;}
			if (this.chg("hghZ") && this.chg("lowZ")){;} // [!] Special case of a double trigger, do nothing.
			else{
				if      (this.chg("hghZ")){this.dat.altF = T;}
				else if (this.chg("lowZ")){this.dat.altF = F;}}
			;},
	};
	return oo;};