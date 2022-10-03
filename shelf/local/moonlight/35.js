moonlight.bin["35"] = function(){
	var oo = {
		nameInformalS : "Prf-Tree S To E",
		importEO : {datS : {cleanFxn : v=>v}},
		exportEO : {prfE : {eqFxn : (a,b,dat)=>a===b}},
		dat : {
			datS : U ,
			prfE : U ,},
		import : function(prpSA=[]){
			if (π.vInA("datS",prpSA)){
				if (this.dat.datS === U){
					this.dat.prfE = U;
					return;}
				var {statusF,datM} = datax.json.decode({datS:this.dat.datS});
				if (statusF === F){
					llw("M35 : malformed datS");
					return;}
				//ll("M35 pumping");
				this.dat.prfE = datM;}},
	};
	return oo;};