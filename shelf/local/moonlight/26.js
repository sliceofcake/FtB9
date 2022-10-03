moonlight.bin["26"] = function(){
	var oo = {
		nameInformalS : "Icon Loader",
		importEO : {
			pathS : {cleanFxn : v=>v,},
		},
		exportEO : {
			img : {eqFxn : (a,b)=>a===b,},
		},
		dat : {
			img : N,
			g   : U,
		},
		ctr   :function(){},
		import:function(prpSA=[]){
			if (π.vInA("pathS",prpSA)){
				if (this.dat.pathS !== U && this.dat.pathS !== N){
					var img = new Image();
					img.src = this.dat.pathS;//"https://mdn.mozillademos.org/files/5397/rhino.jpg";
					img.onload = ((img)=>(()=>{this.dat.img = img;this.chain();}))(img);}
				else{
					this.dat.img = N;}}},
	};
	return oo;
};