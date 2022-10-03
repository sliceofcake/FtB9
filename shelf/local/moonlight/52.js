// [!] Output array is not a copy - if you receive it, please don't alter it.
// [!] When we want to push a change, we will mark the dat.altF flag and then chain().
moonlight.bin["52"] = function(){
	var oo = {
		nameInformalS : "Key Drag Tracker",
		importEO : {
			edgF : {},
			edgU : {},
			rstZ : {},
			edgZ : {},},
		exportEO : {
			tmeDrgEA      : {},
			trgZ_tmeDrgEA : {},},
		dat : {
			altF          : F  ,
			edgF          : U  ,
			edgU          : U  ,
			rstZ          : U  ,
			edgZ          : U  ,
			tmeDrgEA      : [] ,
			trgZ_tmeDrgEA : U  ,},
		ctr : async function(){;},
		import : function(){
			if (this.chk("rstZ")){
				this.dat.tmeDrgEA = [];
				this.dat.trgZ_tmeDrgEA = π.signalFlip(this.dat.trgZ_tmeDrgEA);
				return;}
			if (this.chk("edgZ")){
				// Head.
				if (this.dat.edgF === T){
					if (this.dat.tmeDrgEA.length === 0 || this.dat.tmeDrgEA[this.dat.tmeDrgEA.length - 1].talU !== U){
						this.dat.tmeDrgEA.push({hedU:this.dat.edgU,talU:U});
						this.dat.trgZ_tmeDrgEA = π.signalFlip(this.dat.trgZ_tmeDrgEA);
						;}}
				// Tail
				else{
					if (this.dat.tmeDrgEA.length > 0 && this.dat.tmeDrgEA[this.dat.tmeDrgEA.length - 1].talU === U){
						this.dat.tmeDrgEA[this.dat.tmeDrgEA.length - 1].talU = this.dat.edgU;
						this.dat.trgZ_tmeDrgEA = π.signalFlip(this.dat.trgZ_tmeDrgEA);
						;}}}},
	};
	return oo;
};