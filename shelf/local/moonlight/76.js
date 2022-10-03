moonlight.bin["76"] = function(){
	var oo = {
		nameInformalS : "Game Frame Overall External",
		importEO : {
			clkIdtS : {},
			cvsBndE : {},
			g       : {},},
		exportEO : {},
		dat : {
			//....
			bin : [
				{
					lblS   : "dmy",
					drwFxn : function(dat,curU){;},},
				],
			},
		import : function(){;},
		drawFrame : function(curT){
			var curU = π.clcClkCurU(this.dat.clkIdtS,curT);
			if (nun(this.dat.g) && nun(this.dat.cvsBndE)){
				this.dat.bin.forEach(rowE=>{
					rowE.drwFxn(this.dat,curU);});}},
	};
	return oo;
};