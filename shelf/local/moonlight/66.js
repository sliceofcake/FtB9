moonlight.bin["66"] = function(){
	var oo = {
		nameInformalS : "Hotkey Handler Hookup",
		importEO : {
			edgF    : {},
			edgU    : {},
			edgKeyS : {},
			edgResS : {},
			edgZ    : {},
			staF    : {},
			staKeyS : {},
			staResS : {},
			staU    : {},
			staZ    : {},
			trgFxn  : {},},
		exportEO : {},
		dat : {},
		import : function(){
			if (this.chg("edgZ") && this.chg("staZ") && nun(this.dat.trgFxn)){
				this.dat.trgFxn({
					edgKeyS : this.dat.edgKeyS ,
					edgResS : this.dat.edgResS ,
					edgF    : this.dat.edgF    ,
					edgU    : this.dat.edgU    ,
					staF    : this.dat.staF    ,
					staU    : this.dat.staU    ,
					staKeyS : this.dat.staKeyS ,
					staResS : this.dat.staResS ,});}
			else if (this.chg("edgZ") && nun(this.dat.trgFxn)){
				this.dat.trgFxn({
					edgKeyS : this.dat.edgKeyS ,
					edgResS : this.dat.edgResS ,
					edgF    : this.dat.edgF    ,
					edgU    : this.dat.edgU    ,});}
			else if (this.chg("staZ") && nun(this.dat.trgFxn)){
				this.dat.trgFxn({
					staKeyS : this.dat.staKeyS ,
					staResS : this.dat.staResS ,
					staF    : this.dat.staF    ,
					staU    : this.dat.staU    ,});}},
	};
	return oo;};