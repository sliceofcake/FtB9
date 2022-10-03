moonlight.bin["29"] = function(){
	var oo = {
		nameInformalS : "fs URL To Data",
		importEO : {
			fileUrlS : {cleanFxn : v=>v,},
		},
		exportEO : {
			datM : {eqFxn : (a,b)=>a===b},
		},
		dat : {
			datM     : U  ,
			counterN :  0 ,
			fileUrlS : U  ,
		},
		ctr : async function(){;},
		import : function(prpSA=[]){
			if (π.vInA("fileUrlS",prpSA) && this.dat.fileUrlS !== U){
				this.dat.counterN++;
				var promise = µ.loadScript(this.dat.fileUrlS);
				promise.then((function(that,counterN){return function(){
					if (that.dat.counterN === counterN){
						// [!] The fs standard dictates that the JavaScript data within the file should be stored to:
						//     fs[document.currentScript.getAttribute("src")]
						//     In other words, it is the duty of the file itself to store into fs.
						that.dat.datM = fs[Ω.mainDirectory+that.dat.fileUrlS];
						that.chain();}
					;};})(this,this.dat.counterN));}},
	};
	return oo;
};