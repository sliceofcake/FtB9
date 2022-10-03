moonlight.bin["62"] = function(){
	var oo = {
		nameInformalS : "Assert Lane Element Array",
		importEO : {
			lneC      : {},
			lnePrnElm : {},},
		exportEO : {
			lneElmA : {eqFxn : (a,b)=>π.aae(a,b),},},
		dat : {
			lneC         : U ,
			lneElmA      : U ,
			lnePrnElm    : U ,
			lnePrnPrvElm : U ,},
		import : function(){
			// If parent element is changed, clean up the previous.
			if (this.chg("lnePrnElm")){
				if (nun(this.dat.lnePrnPrvElm)){
					µ.empty(this.dat.lnePrnPrvElm);}
				this.dat.lnePrnPrvElm = this.dat.lnePrnElm;}
			// If any change occurs, dessert old elements and assert new elements. Pass along as well.
			if (this.chg("lneC") || this.chg("lnePrnElm")){
				if (nun(this.dat.lnePrnElm)){
					µ.rr(this.dat.lnePrnElm,µ.m([π.a(0,this.dat.lneC-1).map(lneN=>["canvas.lne.n"+lneN])]));
					this.dat.lneElmA = µ.ic(this.dat.lnePrnElm);}}
			;},
	};
	return oo;
};