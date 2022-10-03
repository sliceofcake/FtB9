moonlight.bin["50"] = function(){
	var oo = {
		nameInformalS : "Demux 1:3",
		importEO : {
			datM   : {},
			wchS   : {},
			wchS_0 : {},
			wchS_1 : {},
			wchS_2 : {},},
		exportEO : {
			datM_0 : {},
			datM_1 : {},
			datM_2 : {},
			datM_U : {},},
		dat : {},
		ctr : function(){;},
		import : function(){
			if (this.chk("wchS") || this.chk("wchS_0") || this.chk("wchS_1") || this.chk("wchS_2") || this.chk("datM")){
				switch (this.dat.wchS){default : {this.dat.datM_0 = U            ;this.dat.datM_1 = U            ;this.dat.datM_2 = U            ;this.dat.datM_U = this.dat.datM;}
					break;case this.dat.wchS_2 : {this.dat.datM_0 = U            ;this.dat.datM_1 = U            ;this.dat.datM_2 = this.dat.datM;this.dat.datM_U = U            ;}
					break;case this.dat.wchS_1 : {this.dat.datM_0 = U            ;this.dat.datM_1 = this.dat.datM;this.dat.datM_2 = U            ;this.dat.datM_U = U            ;}
					break;case this.dat.wchS_0 : {this.dat.datM_0 = this.dat.datM;this.dat.datM_1 = U            ;this.dat.datM_2 = U            ;this.dat.datM_U = U            ;};}}},
	};
	return oo;
};