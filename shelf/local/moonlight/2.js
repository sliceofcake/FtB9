moonlight.bin["2"] = function(){
	var oo = {
		nameInformalS : "Micromanaged Audio Interface",
		dependencySA : ["3","5"],
		importEO : {
			intentionPlayingF   : {cleanFxn : v=>flg(v),},
			stateReportedAudioF : {cleanFxn : v=>flg(v),},
			leewayN             : {cleanFxn : v=>π.rangeRestrict(num(v,0),0,U),},
			loopF               : {cleanFxn : v=>flg(v),},
			playbackRateN       : {cleanFxn : v=>num(v,0),},
			syncSignal          : {cleanFxn : v=>v,},
			tAnchorAudio        : {cleanFxn : v=>int(v,0),},
			tAnchorGlobal       : {cleanFxn : v=>int(v,0),},
			tReportedAudioN     : {cleanFxn : v=>num(v,0),},
			tMaxAudioN          : {cleanFxn : v=>num(v,0),},
			urlS                : {cleanFxn : v=>v,},
			volumeN             : {cleanFxn : v=>π.rangeRestrict(num(v,0),0,1),},
			elRootSeek          : {cleanFxn : v=>v,},
			elRootState         : {cleanFxn : v=>v,},
			elRootTitle         : {cleanFxn : v=>v,},
		},
		exportEO : {
			intentionPlayingF   : {eqFxn : (a,b)=>a===b,},
			stateReportedAudioF : {eqFxn : (a,b)=>a===b,},
			leewayN             : {eqFxn : (a,b)=>a===b,},
			loopF               : {eqFxn : (a,b)=>a===b,},
			playbackRateN       : {eqFxn : (a,b)=>a===b,},
			tAnchorAudio        : {eqFxn : (a,b)=>a===b,},
			tAnchorGlobal       : {eqFxn : (a,b)=>a===b,},
			tReportedAudioN     : {eqFxn : (a,b)=>a===b,},
			tMaxAudioN          : {eqFxn : (a,b)=>a===b,},
			urlS                : {eqFxn : (a,b)=>a===b,},
			volumeN             : {eqFxn : (a,b)=>a===b,},
			elRoot              : {eqFxn : (a,b,dat)=>F,},
		},
		dat : {
			minN           : 0,
			oriN           : 0,
			maxN           : 0,
			curN           : 0,
			dsrN           : 0,
			dsrT           : 0,
			elO            : {},
			elRootHashN    : 0,
			
			assertCSS : function(){
				µ.maCSS(document.head,this.parent.selectorRootS,µ.cssCompile({
					[this.parent.selectorRootS                    ] : "box-sizing:border-box;¥w:1000‰;¥h:1000‰;¥bo:1px solid red;",
					[this.parent.selectorRootS+">*"               ] : "box-sizing:border-box;",
					[this.parent.selectorRootS+">.state-interface"] : "¥w:40px;¥h:500‰;¥f:left;",
					[this.parent.selectorRootS+">.title-interface"] : "¥w:calc(1000‰ - 40px);¥h:500‰;¥f:left;",
					[this.parent.selectorRootS+">.seek-interface" ] : "¥w:1000‰;¥h:500‰;¥f:left;",
				}));},
		},
		ctr : async function(){
			this.dat.elRoot = this.dat.elO.root = µ.m(
				[this.selectorRootS,[
					[".state-interface"],
					[".title-interface"],
					[".seek-interface"],
				]]
			);
			this.dat.elRootHashN++;
			this.dat.assertCSS();
			
			var unitSeekE = await moonlight.gen({
				typeS     : "3",
				nameS     : "seek",
				prpMO     : {"minN":0,"oriN":0},
				clockGapN : 1000000,});
			var unitSeekInterfaceE = await moonlight.gen({
				typeS     : "5",
				nameS     : "seek interface",
				prpMO     : {
					"dsrN" :       0,
					"dsrT" : π.now(),},
				clockGapN : 1000000,});
			var unitStateE = await moonlight.gen({
				typeS     : "6",
				nameS     : "state",
				prpMO     : {},
				clockGapN : 1000000,});
			var unitStateInterfaceE = await moonlight.gen({
				typeS     : "7",
				nameS     : "state interface",
				prpMO     : {
					"dsrF" :       T,
					"dsrT" : π.now(),},
				clockGapN : 1000000,});
			var unitTitleInterfaceE = await moonlight.gen({
				typeS     : "8",
				nameS     : "title interface",
				prpMO     : {},
				clockGapN : 1000000,});
			
			unitSeekE.bind({
				[this.ID] : {
					"dsrN" : "tAnchorAudio" ,
					"dsrT" : "tAnchorGlobal",},
				"seek interface" : {
					"minN" : "minN",
					"oriN" : "oriN",
					"maxN" : "maxN",
					"curN" : "curN",},});
			unitSeekInterfaceE.bind({
				"seek" : {
					"dsrN" : "dsrN",
					"dsrT" : "dsrT",},
				[this.ID] : {
					"elRoot" : "elRootSeek",},});
			unitStateE.bind({
				[this.ID] : {
					"dsrF" : "intentionPlayingF",},
				"state interface" : {
					"curF" : "curF",},});
			unitStateInterfaceE.bind({
				"state" : {
					"dsrF" : "dsrF",
					"dsrT" : "dsrT",},
				[this.ID] : {
					"elRoot" : "elRootState",},});
			unitTitleInterfaceE.bind({
				[this.ID] : {
					"elRoot" : "elRootTitle",},});
			this.bind({
				"seek" : {
					"tReportedAudioN" : "curN",
					"tMaxAudioN"      : "maxN",},
				"state" : {
					"stateReportedAudioF" : "curF",},
				"title interface" : {
					"urlS" : "txtS",},});},
		import:function(prpSA=[]){
			if (π.vInA("elRootSeek",prpSA)){
				µ.ma(this.dat.elO.root.querySelector(".seek-interface"),this.dat.elRootSeek);}
			if (π.vInA("elRootState",prpSA)){
				µ.ma(this.dat.elO.root.querySelector(".state-interface"),this.dat.elRootState);}
			if (π.vInA("elRootTitle",prpSA)){
				µ.ma(this.dat.elO.root.querySelector(".title-interface"),this.dat.elRootTitle);}
			if (π.vInA("tx",prpSA) || π.vInA("co",prpSA) || π.vInA("bg",prpSA)){
				this.dat.assertCSS();}},
	};
	return oo;
};