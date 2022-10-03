// [!] In order for key events to be received by an element, that element must have a tabindex set. Least obtrusive would be -1.
moonlight.bin["24"] = function(){
	var oo = {
		nameInformalS : "Interaction Sheet",
		importEO : {
			elListen : {cleanFxn : v=>v,},
			evtPsvF  : {cleanFxn : v=>v,},
		},
		exportEO : {
			keyE : {eqFxn : (a,b)=>a===b,},
			ptrE : {eqFxn : (a,b)=>a===b,},
		},
		dat : {
			elListen     : N,
			elListen_PRV : N,
			evtPsvF      : T,
			evtPsvF_PRV  : T,
			keyE         : N,
			keyWrpFxn    : U, // set later
			ptrE         : N,
			ptrWrpFxn    : U, // set later
			
			keyFxn : function(ev,that){
				if (ev.repeat){return;}
				var cdeS = ev.code     ;
				var locN = ev.location ;
				var keyS = cdeS + "|" + locN;
				that.keyE = {
					staF : Ω.keySxkeyStaEO[keyS].staF ,
					staT : Ω.keySxkeyStaEO[keyS].staT ,
					keyS                              ,
					cdeS                              ,
					locN                              ,};
				that.parent.chain();},
			ptrFxn : function(ev,that){
				var x      = ev.clientX ;
				var y      = ev.clientY ;
				var boundE = that.elListen.getBoundingClientRect();
				var bx     = boundE.left   ;
				var by     = boundE.top    ;
				var bxx    = boundE.right  ;
				var byy    = boundE.bottom ;
				that.ptrE =  {
					staF : Ω.ptrStaE.staF        ,
					staT : Ω.ptrStaE.staT        ,
					xP   : (x - bx) / (bxx - bx) ,
					yP   : (y - by) / (byy - by) ,
					gx   : x + bx                ,
					gy   : y + by                ,
					x                            ,
					y                            ,
					bx                           ,
					by                           ,
					bxx                          ,
					byy                          ,};
				that.parent.chain();},
			keyWrpFxn : U, // set later
			ptrWrpFxn : U, // set later
			// [!] Browser will block duplicates for us.
			rebindFxn : function(){
				if (this.elListen_PRV !== N){
					this.elListen_PRV.removeEventListener("keydown"  ,this.keyWrpFxn,{passive:this.evtPsvF_PRV});
					this.elListen_PRV.removeEventListener("keyup"    ,this.keyWrpFxn,{passive:this.evtPsvF_PRV});
					this.elListen_PRV.removeEventListener("mousedown",this.ptrWrpFxn,{passive:this.evtPsvF_PRV});
					this.elListen_PRV.removeEventListener("mousemove",this.ptrWrpFxn,{passive:this.evtPsvF_PRV});
					this.elListen_PRV.removeEventListener("mouseup"  ,this.ptrWrpFxn,{passive:this.evtPsvF_PRV});}
				if (this.elListen !== N){
					this.elListen.addEventListener("keydown"  ,this.keyWrpFxn,{passive:this.evtPsvF});
					this.elListen.addEventListener("keyup"    ,this.keyWrpFxn,{passive:this.evtPsvF});
					this.elListen.addEventListener("mousedown",this.ptrWrpFxn,{passive:this.evtPsvF});
					this.elListen.addEventListener("mousemove",this.ptrWrpFxn,{passive:this.evtPsvF});
					this.elListen.addEventListener("mouseup"  ,this.ptrWrpFxn,{passive:this.evtPsvF});}
				this.evtPsvF_PRV   = this.evtPsvF  ;
				this.ptrWrpFxn_PRV = this.ptrWrpFxn;},
		},
		ctr : function(){
			// removeEventListener needs the exact function instance in order to work, so we store them.
			this.dat.keyWrpFxn = (function(that){return function(ev){that.dat.keyFxn(ev,that.dat);};})(this);
			this.dat.ptrWrpFxn = (function(that){return function(ev){that.dat.ptrFxn(ev,that.dat);};})(this);
			this.dat.rebindFxn();},
		import : function(prpSA=[]){
			if (π.vInA("elListen",prpSA) || π.vInA("evtPsvF",prpSA)){
				this.dat.rebindFxn();}},
	};
	return oo;
};