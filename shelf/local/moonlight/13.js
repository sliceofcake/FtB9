moonlight.bin["13"] = function(){
	var oo = {
		nameInformalS : "Key State Interface",
		dependencySA : ["8"],
		importEO : {
			elRootTextDisplay : {cleanFxn : v=>v,},
			keyS              : {cleanFxn : v=>str(v),},
		},
		exportEO : {
			elRoot : {eqFxn : (a,b,dat)=>dat.elRootHashN===dat.elRootHashN_PREV,},
			keyS   : {eqFxn : (a,b)=>a===b},
			keyST  : {eqFxn : (a,b)=>a===b},
		},
		dat : {
			keyS             : "",
			keyST            : 0,
			elO              : {},
			ctxO             : {},
			elRootHashN      : 0,
			elRootHashN_PREV : 0,
			
			assertCSS : function(){
				µ.maCSS(document.head,this.parent.selectorRootS,µ.cssCompile({
					[this.parent.selectorRootS                 ] : "box-sizing:border-box;¥s:1000‰;",
					[this.parent.selectorRootS+">*"            ] : "box-sizing:border-box;",
					[this.parent.selectorRootS+">.text-display"] : "¥s:1000‰;",
				}));},
			assertCanvasSizeAll : function(){return;
				anipnt.assertSize(this.elO.textDisplay,this.elO.root.clientWidth,this.elO.root.clientHeight,Ω.pxd);},
			calcW : function(){
				return this.elO.textDisplay.width / Ω.pxd;},
			calcH : function(){
				return this.elO.textDisplay.height / Ω.pxd;},
			
			keyDnFxn : function(ev,el){
				ll(ev.code);
				this.keyS  = ev.code;
				this.keyST = π.now();
				moonlight.chain(this.parent.ID);},},
		ctr : async function(){
			this.dat.keyDnBoundFxn = (function(that){return function(ev){that.dat.keyDnFxn(ev,this);};})(this);
			this.dat.elRootHashN_PREV = this.dat.elRootHashN;
			this.dat.elRoot = this.dat.elO.root = µ.m(
				[this.selectorRootS,[
					[".text-display",{d:{tabindex:"0"},keydown:this.dat.keyDnBoundFxn}],
				]]
			);
			this.dat.elRootHashN++;
			this.dat.assertCSS();
			
			this.dat.elO.textDisplay = this.dat.elO.root.querySelector(".text-display");
			this.dat.assertCanvasSizeAll();
			
			var textDisplay = await moonlight.gen({typeS:"8",nameS:"text display"});
			textDisplay.bind({
				[this.ID] : {
					"elRoot" : "elRootTextDisplay",},});
			this.bind({
				[textDisplay.ID] : {
					"keyS" : "txtS",},});
			;},
		import : function(prpSA=[]){
			if (π.vInA("elRootTextDisplay",prpSA)){
				µ.ma(this.dat.elO.root.querySelector(".text-display"),this.dat.elRootTextDisplay);}},
		drawFrame : function(){
			this.dat.assertCanvasSizeAll();},
	};
	return oo;
};