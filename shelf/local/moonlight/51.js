moonlight.bin["51"] = function(){
	var oo = {
		nameInformalS : "Mux 3:1",
		importEO : {
			datM_0 : {},
			datM_1 : {},
			datM_2 : {},
			datM_U : {},
			wchS   : {},
			wchS_0 : {},
			wchS_1 : {},
			wchS_2 : {},},
		exportEO : {
			datM : {},},
		dat : {},
		import : function(){
			if (this.chk("wchS") || this.chk("wchS_0") || this.chk("wchS_1") || this.chk("wchS_2") || this.chk("datM_0") || this.chk("datM_1") || this.chk("datM_2") || this.chk("datM_U")){
				switch (this.dat.wchS){default : {this.dat.datM = this.dat.datM_U;}
					break;case this.dat.wchS_2 : {this.dat.datM = this.dat.datM_2;}
					break;case this.dat.wchS_1 : {this.dat.datM = this.dat.datM_1;}
					break;case this.dat.wchS_0 : {this.dat.datM = this.dat.datM_0;};}}},
	};
	return oo;
};