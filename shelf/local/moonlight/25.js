moonlight.bin["25"] = function(){
	var oo = {
		nameInformalS : "Icon Processor",
		importEO : {
			img : {cleanFxn : v=>v,},
		},
		exportEO : {
			g : {eqFxn : (a,b,dat)=>F,},
		},
		dat : {
			img : N,
			g   : U,
		},
		ctr   :function(){
			this.dat.g = anipnt.genG({
				elCanvas  : document.createElement("canvas"),
				mousemove : function(){;} ,
				mousedown : function(){;} ,
				mouseup   : function(){;} ,
				// !!! HACK
				opt       : {
					hgtN : 60 ,
					wdtN : 60 ,
				},
			}).g;},
		import:function(prpSA=[]){
			if (π.vInA("img",prpSA)){
				this.dat.g.ctx.clearRect(0,0,this.dat.g.elCanvas.width,this.dat.g.elCanvas.height);
				if (this.dat.img !== U && this.dat.img !== N){
					this.dat.g.assert({wdtN:this.dat.img.width,hgtN:this.dat.img.height});
					this.dat.g.circleFill(30,30,30,{colorE:[0.5,1,0.5,1]});
					this.dat.g.ctx.drawImage(this.dat.img,0,0,this.dat.g.elCanvas.width,this.dat.g.elCanvas.height);
					;}}},
	};
	return oo;
};