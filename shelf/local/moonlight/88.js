moonlight.bin["88"] = function(){
	var oo = {
		nameInformalS : "Signaled Increment Decrement",
		importEO : {
			datN : {},
			decZ : {},
			incZ : {},
			maxN : {},
			minN : {},},
		exportEO : {
			altN : {},},
		dat : {},
		import : function(){
			if (this.chk("datN")){
				this.dat.altN = this.dat.datN;}
			if (this.chg("incZ") && this.chg("decZ")){;} // [!] Special case of a double trigger, do nothing.
			else{
				if (this.chg("incZ") && nun(this.dat.datN) && nun(this.dat.maxN)){
					this.dat.altN++;
					if (this.dat.altN > this.dat.maxN){
						this.dat.altN = this.dat.maxN;}}
				else if (this.chg("decZ") && nun(this.dat.datN) && nun(this.dat.minN)){
					this.dat.altN--;
					if (this.dat.altN < this.dat.minN){
						this.dat.altN = this.dat.minN;}}}
			;},
	};
	return oo;};