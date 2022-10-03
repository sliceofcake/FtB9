moonlight.bin["32"] = function(){
	var oo = {
		nameInformalS : "Light Bulb",
		importEO : {
			staF   : {cleanFxn : v=>v,},
			colorE : {cleanFxn : v=>v,},
		},
		exportEO : {
			g : {eqFxn : (a,b,dat)=>F,},
		},
		dat : {
			corE          : [0,1,0.5,1] ,
			corLowE       : [0,0,0  ,0] ,
			datS          : ""          ,
			g             : U           ,
			pntReqF       : T           ,},
		ctr : async function(){
			this.dat.g = anipnt.genG({
				elCanvas  : document.createElement("canvas"),
				mousemove : function(){;} ,
				mousedown : function(){;} ,
				mouseup   : function(){;} ,
				// !!! HACK
				opt       : {
					colorBackgroundE : [0,0,0,1] ,
					colorBorderE     : [0,0,1,1] ,
					colorTextE       : [0,0,1,1] ,
					fontSizeN        :        16 ,
					hgtN             :         1 ,
					wdtN             :         1 ,
				},
			}).g;
			;},
		import : function(prpSA=[]){
			if (π.vInA("staF",prpSA) && this.dat.staF !== U && this.dat.staF !== N){
				this.dat.pntReqF = T;}},
		drawFrame : function(){
			if (this.dat.pntReqF === T){
				var corE = this.dat.staF ? this.dat.corE : this.dat.corLowE;
				this.dat.g.clear();
				this.dat.g.rectFill(0,0,1,1,{colorE:corE});
				this.chain();
				this.dat.pntReqF = F;}},
	};
	return oo;
};