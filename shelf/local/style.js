// some elements have styles defined globally [these are what I use "."s for, for non-global styles, I use "¥"s]
// lo : low state, not active
// md : medium state, in-between, such as a mouse-over
// m2 : medium state, in-between, unfortunately needed when, for example, a mouseover and a focus need to be distinguishable - m2 is the more stable of [md,mh]
// hi : high state, most active, such as being currently clicked, with the mouse still down

// legacy color library support
// css display strings
var hsla       = (coArr,                                    a=1)=>"hsla("+Math.round(360*coArr[0])+","+Math.round(100*coArr[1])+"%,"+Math.round(100*coArr[2])+"%,"+a+")";
var hslma      = (coArr,bgArr,      mixRatio =1,            a=1)=>hsla(hslmix(coArr,bgArr,mixRatio),a);
var hslmma     = (coArr,bgArr,exArr,mixRatioA=1,mixRatioB=1,a=1)=>hslma(hslmix(coArr,bgArr,mixRatioA),exArr,mixRatioB,a);
var hslmix     = (coArr,bgArr,      mixRatio =1                )=>rgbToHsl(rgbmix(hslToRgb(coArr),hslToRgb(bgArr),mixRatio)); // mix two colors in a specific ratio, ratio = co/bg
var hslmegamix = (coArrArr                                     )=>rgbToHsl(rgbmegamix(coArrArr.map(v=>hslToRgb(v)))); // mix many colors equally
var hslinvert  = (coArr                                        )=>{var _ = coArr[0]+0.5;return [(_>1?_-1:_),coArr[1],1-coArr[2]];};

var hslaExtract = (colorS)=>{
	var co = [];
	colorS.replace(/hsla?\((.+),(.+)%,(.+)%(?:,(.+))?\)/,(match,p1,p2,p3,p4,offset,string)=>{
		co[0] = num(p1)/360;
		co[1] = num(p2)/100;
		co[2] = num(p3)/100;
		if (typeof p4 !== "undefined"){
			co[3] = num(p4);}});
	return co;};

// rgb land
function rgbmix(coArr,bgArr,mixRatio=1){
	var r = coArr[0]*mixRatio + bgArr[0]*(1-mixRatio);
	var g = coArr[1]*mixRatio + bgArr[1]*(1-mixRatio);
	var b = coArr[2]*mixRatio + bgArr[2]*(1-mixRatio);
	return [r,g,b];}
function rgbmegamix(coArrArr){
	var r = coArrArr.reduce((acc,v)=>acc+v[0],0)/coArrArr.length;
	var g = coArrArr.reduce((acc,v)=>acc+v[1],0)/coArrArr.length;
	var b = coArrArr.reduce((acc,v)=>acc+v[2],0)/coArrArr.length;
	return [r,g,b];}

// http://en.wikipedia.org/wiki/HSL_color_space
// http://stackoverflow.com/questions/2353211/hsl-to-rgb-color-conversion
var hueToRgb = function hueToRgb(p,q,t){
	if (t < 0  ){t += 1;}
	if (t > 1  ){t -= 1;}
	if (t < 1/6){return p + (q-p) * 6 * t;}
	if (t < 1/2){return q;}
	if (t < 2/3){return p + (q-p) * (2/3-t) * 6;}
	return p;}
function hslToRgb(coArr){
	var h = coArr[0];
	var s = coArr[1];
	var l = coArr[2];
	var r, g, b;
	// achromatic
	if (s === 0){
		r = g = b = l;}
	else{
		var q = (l < 0.5) ? (l * (1+s)) : (l + s - (l*s));
		var p = (2 * l) - q;
		r = hueToRgb(p,q,(h + (1/3)));
		g = hueToRgb(p,q,h);
		b = hueToRgb(p,q,(h - (1/3)));}
	return [r,g,b];}
function rgbToHsl(coArr){
	var r = coArr[0];
	var g = coArr[1];
	var b = coArr[2];
	var max = Math.max(r,g,b);
	var min = Math.min(r,g,b);
	var h;
	var s;
	var l = (max+min)/2;
	// achromatic
	if (max === min){
		h = s = 0;}
	else{
		var d = max - min;
		s = (l > 0.5) ? (d/(2-max-min)) : (d/(max+min));
		switch (max){default:
			break;case r: h = (g-b) / d + ((g<b) ? (6) : (0));
			break;case g: h = (b-r) / d + 2;
			break;case b: h = (r-g) / d + 4;}
		h /= 6;}
	return [h,s,l];}

var ø = {
	rrx : 1000,
	rry : 780,
	rrn : function(n){return Math.ceil(π.reductionRatio(this.rrx,this.rry)*n);},
	txFallback : U, // filled later
	coFallback : U, // filled later
	bgFallback : U, // filled later
	genCSSVarS:function(o={}){π.p(o,{tx:[0,0,1],co:[0,0,0.5],bg:[0,0,0,0.85]});
		var {tx,co,bg} = o;
		var res = "--c:"+hsla(tx)+";--bgc:"+hsla(bg)+";"
		        + "--c-placeholder:"+hslmma(tx,co,bg,0.6,0.6)+";--c-highlight:"+hslma(co,tx,0.6,0.5)+";"
		        + "--bgc-button-lo:"+hslma(co,bg,0.2,bg[3])+";--bsw-button-lo:"+this.rrn(0)+"px "+this.rrn(0)+"px "+this.rrn(6)+"px "+this.rrn(0)+"px "+hslma(co,bg,0.6)+" inset;"
		        + "--bgc-button-hf:"+hslma(co,bg,0.6,bg[3])+";--bsw-button-hf:"+this.rrn(0)+"px "+this.rrn(0)+"px "+this.rrn(6)+"px "+this.rrn(0)+"px "+hslma(co,bg,0.8)+" inset;"
		        + "--bgc-button-hi:"+hslma(co,bg,0.8,bg[3])+";--bsw-button-hi:"+this.rrn(0)+"px "+this.rrn(0)+"px "+this.rrn(6)+"px "+this.rrn(0)+"px "+hslma(co,bg,0.9)+" inset;"
		        + "--c-panel-handle:"+hsla(bg)+";--bgc-panel-handle:"+hsla(co,bg[3])+";--bgc-panel-not-handle:"+"transparent"/*hsla(bg,bg[3])*/+";--bsw-panel:"+this.rrn(0)+"px "+this.rrn(0)+"px "+this.rrn(4)+"px "+this.rrn(0)+"px "+hsla(co)+";--tsw-panel-handle:"+this.rrn(0)+"px "+this.rrn(0)+"px "+this.rrn(6)+"px "+hsla(co)+";"
		        + "--c-button-label:"+hslma(co,tx,1)+";--c-label:"+hsla(co,0.6)+";--tsw-label:"+this.rrn(0)+"px "+this.rrn(0)+"px "+this.rrn(6)+"px "+hsla(bg)+","+this.rrn(0)+"px "+this.rrn(0)+"px "+this.rrn(6)+"px "+hsla(bg)+";"
		        + "--c-input:"+hslma(tx,co,0.6)+";--bgc-input:"+hsla(bg,bg[3])+";--bc-input-lo:"+hslma(co,bg,0.6)+";--bc-input-md:"+hslma(co,bg,0.8)+";--bc-input-m2:"+hsla(co)+";--bc-input-hi:"+hslma(co,tx,0.8)+";"
		        + "--bg-input-disabled:repeating-linear-gradient(-45deg,"+hslma(bg,co,0.65,bg[3])+","+hslma(bg,co,0.65,bg[3])+" "+this.rrn(10)+"px,"+hsla(bg,bg[3])+" "+this.rrn(10)+"px,"+hsla(bg,bg[3])+" "+this.rrn(20)+"px);"
		        + ";"
		        + ";"
		        + ";";
		return res;},
	asrStyle:async function(o={}){π.p(o,{useCacheF:F});
		if (o.useCacheF){
			crt.load();
			var tx = crt.cache.tx;
			var co = crt.cache.co;
			var bg = crt.cache.bg;}
		else{
			var userE = jjj(await crt.get(mu.core.who),{});
			var tx = [jjj([userE,"DT","tx","h"],this.txFallback[0]),jjj([userE,"DT","tx","s"],this.txFallback[1]),jjj([userE,"DT","tx","l"],this.txFallback[2]),jjj([userE,"DT","tx","a"],this.txFallback[3])];
			var co = [jjj([userE,"DT","co","h"],this.coFallback[0]),jjj([userE,"DT","co","s"],this.coFallback[1]),jjj([userE,"DT","co","l"],this.coFallback[2]),jjj([userE,"DT","co","a"],this.coFallback[3])];
			var bg = [jjj([userE,"DT","bg","h"],this.bgFallback[0]),jjj([userE,"DT","bg","s"],this.bgFallback[1]),jjj([userE,"DT","bg","l"],this.bgFallback[2]),jjj([userE,"DT","bg","a"],this.bgFallback[3])];
			crt.load();
			crt.cache.tx = tx;
			crt.cache.co = co;
			crt.cache.bg = bg;
			crt.save();}
		if (typeof tx === "undefined"){tx = [0,0,1.0,1];}
		if (typeof co === "undefined"){co = [0,1,0.5,1];}
		if (typeof bg === "undefined"){bg = [0,0,0.0,1];}
		var bgSolid = [bg[0],bg[1],bg[2],1];
		var anim2 = "transition-timing-function:linear;transition-duration:0s;transition-delay:0s;";
		var anim1 = "transition-timing-function:cubic-bezier(0.22,0.61,0.36,1);transition-duration:0.3s;transition-delay:0s;";
		
		var headH = 40;
		var footH = 20;
		var rowP  =  4;
		
		// dddddd -
		// d****d |
		// d****d h
		// d****d |
		// dddddd -
		//         
		// |-w--|  
		var wBox     =   50;
		var hBox     = wBox;
		var dBox     =    1;
		var hHead    = hBox;
		
		var wEar     = wBox+wBox+dBox+dBox;
		var hEar     = hBox;
		
		var hMessageC =  30;
		var wMemberC  = 200;
		
		var wChatMargin = 60;
		
		this.top1    = hBox     +dBox+dBox;
		this.top2    = hBox+hBox+dBox+dBox;
		this.lft1    =                   0;
		this.lft1    = wBox+wBox+dBox+dBox;
		
		//----
		
		var a = (typeof bg[3] === "undefined" ? 1 : bg[3]);
		var rr = π.reductionRatio(this.rrx,this.rry);
		var fxnFilter = m=>Math.ceil(m);
		var rrn = n=>fxnFilter(rr*n);
		
		var txHF        = fxnFilter(rr*13);
		var bgPath      = "/image/books.jpg";//Ω.mainDirectory+"trash/bg.jpg";
		var tabH        = fxnFilter(rr*30);
		var inputW      = fxnFilter(rr*210);
		var inputH      = fxnFilter(rr*36);
		var textareaH   = fxnFilter(rr*90);
		var selectH     = fxnFilter(rr*36);
		var buttonH     = fxnFilter(rr*36);
		var toggleH     = fxnFilter(rr*36);
		var BSCSSH      = fxnFilter(rr*36);
		var symbolPartS = fxnFilter(rr*18);
		var handleH     = fxnFilter(rr*18);
		
		var css = {
			":root" : this.genCSSVarS({tx,co,bg})+"--fs-label:"+txHF+"px;--fs-button-label:"+txHF+"px;",
			"*" : "box-sizing:border-box;line-height:1.2;transition-property:background-color,color,border-color;"
				+ "transition-timing-function:cubic-bezier(0.22,0.61,0.36,1);transition-duration:0.6s;transition-delay:0s;"
				+ "background-clip:padding-box;-webkit-overflow-scrolling:touch;",
			"*:hover,*:focus,*:active" : "transition-timing-function:linear;transition-duration:0s;transition-delay:0s;",
			"html" : "¥s:1000‰;",
			"body" : "¥s:1000‰;¥ff:Verdana,Geneva,sans-serif;¥fs:"+txHF+"px;¥p:0px;¥m:0px;¥c:var(--c);¥bgc:var(--bgc);"/*¥bgi:url("+bgPath+");*/+"¥bgr:no-repeat;¥bgs:cover;¥bgo:content-box;¥bgp:center center;¥bga:fixed;¥o:hidden;",
			"table" : "border-collapse:collapse;table-layout:fixed;", // the following: "table-layout:fixed;" uses the first row it encounters as the definitive widths for the entire table
			"a,a:link,a:visited,.link"                : "¥:hand;¥c:"+hsla(co)        +";text-decoration:none;",
			"a:hover,a:focus,.link:hover,.link:focus" : "¥:hand;¥c:"+hslma(co,tx,0.5)+";text-decoration:underline;",
			"a:active,link:active"                    : "¥:hand;¥c:"+hsla(tx)        +";text-decoration:underline;",
			"textarea,input,select,label" : "¥:inline-block;¥ff:inherit;¥fs:inherit;¥c:var(--c-input);¥bgc:var(--bgc-input);¥bo:1px solid transparent;outline:none;"
			                              + "¥bc:var(--bc-input-lo);",
			"textarea:hover, input:hover, select:hover ,label:hover"  : "¥bc:var(--bc-input-md);",
			"textarea:focus, input:focus, select:focus ,label:focus"  : "¥bc:var(--bc-input-m2);",
			"textarea:active,input:active,select:active,label:active" : "¥bc:var(--bc-input-hi);",
			"textarea[disabled],input[disabled],select[disabled],label[disabled]"  : "¥bg:var(--bg-input-disabled);¥bc:var(--bc-input-lo) !important;",
			"textarea"  : "¥h:"+textareaH+"px;resize:none;",
			"input"     : "¥h:"+inputH+"px;¥p:0px 3px;",
			"select"    : "¥h:"+selectH+"px;¥brad:0px;¥p:3px;",
			"label"              : "¥:relative;cursor:pointer;border-style:dashed;",
			".file"              : "¥:absolute;¥:NW;¥bgc:transparent;¥bo:none;",
			"input[type='file']" : "¥:absolute;¥:NW;¥op:0;¥:hand;",
			// these placeholder styles need to be separate rules
			"::-webkit-input-placeholder"  : "¥c:var(--c-placeholder);¥op:1;",
			":-moz-placeholder"            : "¥c:var(--c-placeholder);¥op:1;",
			"::-moz-input-placeholder"     : "¥c:var(--c-placeholder);¥op:1;",
			":-ms-input-placeholder"       : "¥c:var(--c-placeholder);¥op:1;",
			// these selection styles need to be separate rules
			"::selection"      : "¥bgc:var(--c-highlight);",
			"::-moz-selection" : "¥bgc:var(--c-highlight);",
			"img[src='']" : "visibility:hidden;",
			
			// for example, reserving space in main page flow matching the space taken by an position:absolute top:0px height:auto element
			".shadow" : "position:relative !important;¥t:auto;¥r:auto;¥b:auto;¥l:auto;visibility:hidden;",
			
			".BSCSS"                       : "¥:inline-block;¥:relative;¥w:1000‰;¥h:"+BSCSSH+"px;¥o:hidden;",
			".BSCSS>*:not(.symbol)"        : "¥:block;¥:absolute;",
			".BSCSS>.label"                : "¥fs:var(--fs-label);¥b:1px;¥r:3px;font-weight:bold;¥c:var(--c-label);¥tsw:var(--tsw-label);¥bgc:transparent;pointer-events:none;white-space:nowrap;",
			".BSCSS>._button+.label"       : "¥fs:var(--fs-button-label);¥c:var(--c-button-label);¥tsw:none;",
			".BSCSS:hover>input+.label,\
			 .BSCSS:hover>textarea+.label" : "¥op:0.4;",
			".BSCSS>*:not(.label):not(.symbol)" : "¥:NW;¥s:1000‰;",
			
			".icon" : "¥bgr:no-repeat;¥bgs:cover;¥bgo:content-box;¥bgp:center center;",
			
			".pin" : "¥:inline-block;¥bgc:"+hslma(bg,co,0.9)+";¥bo:1px solid "+hslma(bg,co,0.7)+";¥brad:"+rrn(2)+"px;¥p:"+rrn(2)+"px;¥fs:600‰;font-weight:normal;",
			
			//".panel"                  : "¥:block;¥:absolute;¥t:200px;¥l:100px;¥w:auto;¥h:auto;¥wmin:"+20+"px;¥hmin:"+20+"px;¥c:"+hsla(tx)+";¥bsw:var(--bsw-panel);overflow:hidden;¥z:1;",
			//".panel>.handle"          : "¥w:1000‰;¥h:"+handleH+"px;¥fs:"+(handleH*0.8)+"px;¥c:var(--c-panel-handle);¥bgc:var(--bgc-panel-handle);¥tsw:var(--tsw-panel-handle);cursor:move;¥pl:2px;¥:one-row;",
			//".panel>.handle>.faded"   : "¥pl:"+6+"px;¥op:0.35;",
			//".panel>.buttonC"         : "¥:absolute;¥:NE;¥w:auto;¥h:"+handleH+"px;¥fs:"+(handleH*0.8)+"px;¥c:var(--c-panel-handle);¥bgc:var(--bgc-panel-handle);¥tsw:var(--tsw-panel-handle);cursor:auto;¥pl:0px;",
			//".panel>.buttonC>.button" : "¥w:30px;¥h:1000‰;¥o:hidden;¥p:0px;",
			//".panel>.main"            : "¥w:1000‰;¥h:calc(1000‰ - "+handleH+"px);¥c:var(--c);¥bgc:var(--bgc-panel-not-handle);",
			//".panel>.log"             : "¥:none;¥:absolute;¥t:"+handleH+"px;¥l:0px;¥w:1000‰;¥h:calc(1000‰ - "+handleH+"px);¥c:var(--c);¥bgc:var(--bgc-panel-not-handle);",
			
			".C¥nejname"               : "¥:inline;",
			".C¥nejname>:nth-child(1)" : "¥:inline;",
			".C¥nejname>sub"           : "¥:relative;¥b:-0.1em;¥fs:650‰;vertical-align:bottom;",
			".C¥nejname>sup"           : "¥fs:800‰;vertical-align:top;",
			
			"._button"                       : "¥:inline-block;¥h:"+buttonH+"px;¥bo:1px solid transparent;¥p:1px 3px;¥ta:center;¥:hand;"
			                                 + "¥bgc:var(--bgc-button-lo);¥bc:var(--bc-input-lo);¥bsw:var(--bsw-button-lo);",
			"._button:hover"                 : "¥bgc:var(--bgc-button-hf);¥bc:var(--bc-input-md);¥bsw:var(--bsw-button-hf);",
			"._button:focus"                 : "¥bgc:var(--bgc-button-hf);¥bc:var(--bc-input-m2);¥bsw:var(--bsw-button-hf);",
			"._button:active"                : "¥bgc:var(--bgc-button-hi);¥bc:var(--bc-input-hi);¥bsw:var(--bsw-button-hi);",
			"._button.active"                : "transition-duration:0s;",
			
			".toggle"                             : "¥:inline-block;¥h:"+toggleH+"px;¥c:"+hslma(co,tx,0.5)+";¥bo:1px solid transparent;¥ta:center;¥:hand;",
			".toggle.off"                         : "¥bgc:"+hslmma(co,bg,bg,0.5,0.4)+";¥bc:"+hslmma(co,tx,bg,0.6,0.4)+" !important;¥bsw:0px 0px 4px 0px "+hslmma(co,tx,bg,0.6,0.2 )+" inset;",
			".toggle.off:hover,.toggle.off:focus" : "¥bgc:"+hslmma(co,bg,bg,0.5,0.7)+";¥bc:"+hslmma(co,tx,bg,0.6,0.7)+" !important;¥bsw:0px 0px 4px 0px "+hslmma(co,tx,bg,0.6,0.35)+" inset;",
			".toggle.off:active"                  : "¥bgc:"+hslmma(co,bg,bg,0.5,1  )+";¥bc:"+hslmma(co,tx,bg,0.6,1  )+" !important;¥bsw:0px 0px 4px 0px "+hslmma(co,tx,bg,0.6,0.5 )+" inset;",
			".toggle.on"                          : "¥bgc:"+hslmma(co,bg,bg,0.8,0.8)+";¥bc:"+hslmma(co,tx,bg,0.8,0.8)+" !important;¥bsw:0px 0px 4px 0px "+hslmma(co,tx,bg,0.6,0.4 )+" inset;",
			".toggle.on:hover,.toggle.on:focus"   : "¥bgc:"+hslmma(co,bg,bg,0.8,0.9)+";¥bc:"+hslmma(co,tx,bg,0.8,0.9)+" !important;¥bsw:0px 0px 4px 0px "+hslmma(co,tx,bg,0.6,0.45)+" inset;",
			".toggle.on:active"                   : "¥bgc:"+hslmma(co,bg,bg,0.8,1  )+";¥bc:"+hslmma(co,tx,bg,0.8,1  )+" !important;¥bsw:0px 0px 4px 0px "+hslmma(co,tx,bg,0.6,0.5 )+" inset;",
			"label.toggle>input[type='checkbox']" : "display:none;",
			
			".bb_link" : "",
			".bb_line" : "¥:block;¥w:100%;¥h:1px;¥bo:0px solid transparent;border-top-width:1px;",
			".bb_fixedwidth" : "¥ff:Monaco,Menlo,monospace;",
			".bb_size" : "¥:inline-block;",
			".bb_bold" : "font-weight:bold;",
			".bb_italic" : "font-style:italic;",
			".bb_image" : "¥wmax:600px;¥hmax:600px;",
			".bb_strikethrough" : "text-decoration:line-through;",
			".bb_underline"     : "text-decoration:underline;",
			".bb_rainbow"       : "",
			".bb_spoiler"       : "¥c:"+hsla(tx,0)+";¥tsw:0px 0px 10px "+hslma(tx,bg,0.8)+";",
			".bb_spoiler:hover" : "¥c:"+hsla(tx)+";¥tsw:0px 0px 10px "+hslma(tx,bg,0.8,0.3)+";",
			".bb_quote"         : "¥:inline-block;¥w:auto;¥p:0px 2px;¥bo:1px solid "+hslma(tx,bg,0.6)+";",
			
			/*"@keyframes rainbowC" : function(){
				var res = "";
				for (var i = 0; i <= 100; i++){
					res += i+"%{¥c:"+hsla([π.chop(i*0.01,2),co[1],co[2]])+";}";}
				return res;}(),
			"@keyframes rainbowTsw1" : function(){
				var res = "";
				for (var i = 0; i <= 100; i++){
					res += i+"%{¥tsw:0px 0px 10px "+hslma([π.chop(i*0.01,2),co[1],co[2]],bg,0.8)+";}";}
				return res;}(),
			"@keyframes rainbowTsw2" : function(){
				var res = "";
				for (var i = 0; i <= 100; i++){
					res += i+"%{¥tsw:0px 0px 10px "+hslma([π.chop(i*0.01,2),co[1],co[2]],bg,0.8,0.3)+";}";}
				return res;}(),*/
			
			
			//-------------------------------------------------------------------
			
			//.userName {overflow-x:hidden;white-space:nowrap;}
			
			
			".anim"       : anim1,
			".anim:hover" : anim2,
			".notify" : "¥:fixed;¥:NE;",
			
			//----
			
			":root>body" : "¥bgs:cover;¥bgp:center;¥bgi:url('https://feelthebeats.se/shelf/bg.php?userID=1');",
			
			":root>body>.layerC"                : "",
			":root>body>.layerC>.layer"         : "¥:absolute;¥b:0px;¥l:0px;¥s:1000‰;",
			":root>body>.layerC>.layer>.body"   : "¥:absolute;¥t:"+((0*wBox)+(2*dBox))+"px;¥r:"+((1*wBox)+(2*dBox))+"px;¥w:calc(1000‰ - "+((3*wBox)+(4*dBox))+"px);¥h:calc(1000‰ - "+((0*wBox)+(4*dBox))+"px);",
			":root>body>.layerC>.layer>.plate1" : "¥:absolute;¥t:"+((0*wBox)+(2*dBox))+"px;¥r:"+((1*wBox)+(2*dBox))+"px;¥w:calc(1000‰ - "+((3*wBox)+(4*dBox))+"px);¥h:calc(1000‰ - "+((0*wBox)+(4*dBox))+"px);¥bgc:"+ç.p(bg,co,0.9)+";",
			":root>body>.layerC>.layer>.plate2" : "¥:absolute;¥t:"+((2*wBox)+(2*dBox))+"px;¥l:"+((1*wBox)+(2*dBox))+"px;¥w:             "+((1*wBox)+(0*dBox))+"px ;¥h:calc(1000‰ - "+((2*wBox)+(4*dBox))+"px);¥bgc:"+ç.p(bg,co,0.9)+";",
			
			":root>body>.grid"             : "¥:absolute;¥m:"+dBox+"px;",
			":root>body>.grid.n1"          : "¥t:"+(0*wBox)+"px;¥l:0px;¥w:"+(2*wBox)+"px;¥h:calc(1000‰ - "+(0*wBox)+"px);¥o:hidden;",
			":root>body>.grid.n2"          : "¥t:"+(2*wBox)+"px;¥l:0px;¥w:"+(1*wBox)+"px;¥h:calc(1000‰ - "+(2*wBox)+"px);¥o:hidden;",
			":root>body>.grid.n3"          : "¥t:"+(0*wBox)+"px;¥r:0px;¥w:"+(1*wBox)+"px;¥h:calc(1000‰ - "+(0*wBox)+"px);¥o:hidden;",
			":root>body>.grid>.box"        : "¥:relative;¥bgc:"+ç.p(bg,co,0.6)+";¥m:"+dBox+"px;¥f:left;¥:hand;",
			":root>body>.grid>.box:hover"  : "¥bgc:"+ç.p(bg,co,0.4)+";",
			":root>body>.grid>.box:active" : "¥bgc:"+ç.p(bg,co,0.2)+";",
			":root>body>.grid>.box.w1.h1"  : "¥w:calc("+(wBox*1)+"px - "+(2*dBox)+"px);¥h:calc("+(hBox*1)+"px - "+(2*dBox)+"px);",
			":root>body>.grid>.box.w1.h2"  : "¥w:calc("+(wBox*1)+"px - "+(2*dBox)+"px);¥h:calc("+(hBox*2)+"px - "+(2*dBox)+"px);",
			":root>body>.grid>.box.w1.h3"  : "¥w:calc("+(wBox*1)+"px - "+(2*dBox)+"px);¥h:calc("+(hBox*3)+"px - "+(2*dBox)+"px);",
			":root>body>.grid>.box.w2.h1"  : "¥w:calc("+(wBox*2)+"px - "+(2*dBox)+"px);¥h:calc("+(hBox*1)+"px - "+(2*dBox)+"px);",
			":root>body>.grid>.box.w2.h2"  : "¥w:calc("+(wBox*2)+"px - "+(2*dBox)+"px);¥h:calc("+(hBox*2)+"px - "+(2*dBox)+"px);",
			":root>body>.grid>.box.w2.h3"  : "¥w:calc("+(wBox*2)+"px - "+(2*dBox)+"px);¥h:calc("+(hBox*3)+"px - "+(2*dBox)+"px);",
			":root>body>.grid>.box.w3.h1"  : "¥w:calc("+(wBox*3)+"px - "+(2*dBox)+"px);¥h:calc("+(hBox*1)+"px - "+(2*dBox)+"px);",
			":root>body>.grid>.box.w3.h2"  : "¥w:calc("+(wBox*3)+"px - "+(2*dBox)+"px);¥h:calc("+(hBox*2)+"px - "+(2*dBox)+"px);",
			":root>body>.grid>.box.w3.h3"  : "¥w:calc("+(wBox*3)+"px - "+(2*dBox)+"px);¥h:calc("+(hBox*3)+"px - "+(2*dBox)+"px);",
			":root>body>.grid>.box>.img"   : "¥s:1000‰;¥bgs:cover;¥bgp:center;",
			":root>body>.grid>.box.me       >.img" : "¥bgi:var(--global-icon);",
			":root>body>.grid>.box.chat     >.img" : "¥bgi:url(https://feelthebeats.se/9/image/icon/chat.png);",
			":root>body>.grid>.box.gameframe>.img" : "¥bgi:url(https://feelthebeats.se/9/image/icon/gameframe.png);",
			":root>body>.grid>.box.search   >.img" : "¥bgi:url(https://feelthebeats.se/9/image/icon/search.png);",
			":root>body>.grid>.box.settings >.img" : "¥bgi:url(https://feelthebeats.se/9/image/icon/settings.png);",
			":root>body>.grid>.box.rankings >.img" : "¥bgi:url(https://feelthebeats.se/9/image/icon/rankings.png);",
			":root>body>.grid>.box.upload   >.img" : "¥bgi:url(https://feelthebeats.se/9/image/icon/upload.png);",
			":root>body>.grid>.box>.shortcut" : "¥:none;¥:absolute;¥:SW;",
			":root>body>.grid>.box>.words"    : "¥:none;¥:absolute;¥:SE;",
			
			//":root>body>.layerC>.layer.chat>.body>.tabC"                    : "¥:absolute;¥:NE;¥w:calc(1000‰ - "+wEar+"px);¥h:"+hEar+"px;",
			//":root>body>.layerC>.layer.chat>.body>.tabC    >.tab"           : "",
			//":root>body>.layerC>.layer.chat>.body>.main"                    : "¥:absolute;¥:SE;¥w:1000‰;¥h:calc(1000‰ - "+hEar+"px);",
			//":root>body>.layerC>.layer.chat>.body>.main>.messageC"          : "¥:absolute;¥:NW;¥w:calc(1000‰ - "+wMemberC+"px);¥h:calc(1000‰ - "+hMessageC+"px);¥ox:auto;",
			//":root>body>.layerC>.layer.chat>.body>.main>.messageC>.message"               : "¥:flex-row;¥c:white;¥mt:6px;",
			//":root>body>.layerC>.layer.chat>.body>.main>.messageC>.message:first-child"   : "¥mt:0px;",
			//":root>body>.layerC>.layer.chat>.body>.main>.messageC>.message>.margin"       : "¥w:"+wChatMargin+"px;flex:0 0 "+wChatMargin+"px;",
			//":root>body>.layerC>.layer.chat>.body>.main>.messageC>.message>.margin>.icon" : "¥s:"+wChatMargin+"px;¥bgs:cover;¥bgp:center;¥bgi:var(--message-margin-icon-bgi);",
			//":root>body>.layerC>.layer.chat>.body>.main>.messageC>.message>.main"         : "¥:relative;¥:multi-row;flex:1 1 0px;",
			//":root>body>.layerC>.layer.chat>.body>.main>.messageC>.message>.main>.meta"   : "¥fs:750‰;",
			//":root>body>.layerC>.layer.chat>.body>.main>.messageC>.message>.main>.bubble" : "¥:inline-block;¥bgc:var(--message-main-bubble-bgc);¥w:auto;¥wmax:1000‰;¥p:4px 6px;",
			//":root>body>.layerC>.layer.chat>.body>.main>.input"             : "¥:absolute;¥:SW;¥w:calc(1000‰ - "+wMemberC+"px);¥h:"+hMessageC+"px;",
			//":root>body>.layerC>.layer.chat>.body>.main>.memberC"           : "¥:absolute;¥:NE;¥w:"+wMemberC+"px;¥h:1000‰;",
			
			/*":root>body>.me"                    : "¥:absolute;¥:NW;¥w:"+wMe+"px;¥h:"+hMe+"px;¥p:"+dBox+"px;"
			+                                     "¥bgi:url('https://feelthebeats.se/image/AGIPS.jpg');¥bgs:cover;¥bgp:center;",
			":root>body>.head"                  : "",
			":root>body>.head.n1"               : "¥:absolute;¥t:"+(hHead*0)+"px;¥r:0px;¥w:calc(1000‰ - "+wMe+"px);¥h:"+hHead+"px;¥bgc:"+ç.p(bg,co,0.8)+";",
			":root>body>.head.n2"               : "¥:absolute;¥t:"+(hHead*1)+"px;¥r:0px;¥w:calc(1000‰ - "+wMe+"px);¥h:"+hHead+"px;¥bgc:"+ç.p(bg,co,0.6)+";",
			":root>body>.head>.box"             : "¥:relative;¥w:"+wBox+"px;¥h:"+hBox+"px;¥bgc:"+ç.p(bg,co,0.6)+";¥ml:"+dBoxHalf+"px;¥f:left;",
			":root>body>.head>.box:first-child" : "¥ml:0px;",
			":root>body>.head>.box>.shortcut"   : "¥:absolute;¥:SW;",
			":root>body>.head>.box>.words"      : "¥:absolute;¥:SE;",
			":root>body>.head>.box.chat"        : "¥bgi:url(https://feelthebeats.se/bananaparfait/images/bubbleSQActive.png);¥bgs:cover;¥bgp:center;",*/
			
			//----
			
			"._layer"            : "¥:none;¥:absolute;¥:NW;¥:full-screen;¥bgc:"+ç.p(bg)+";¥pt:"+headH+"px;¥pb:"+footH+"px;¥o:auto;",
			
			"._sublayer:not(:first-child)" : "¥mt:0px;",
			
			"._layerish>.head"        : "¥bg:linear-gradient(90deg,"+ç.p(bg,co,0.8)+","+ç.p(bg,co,0.85)+");",
			"._layerish>.head>.title" : "¥fs:1600‰;¥fw:bold;¥c:"+ç.p(co,tx,0.8,bg,0.9)+";¥pl:4px;",
			"._layerish>.head>.info"  : "¥fs:1000‰;         ¥c:"+ç.p(co,tx,0.8,bg,0.6)+";¥pl:4px;",
			
			"._layerish>.body"                         : "",
			"._layerish>.body>.row-spacer"             : "¥w:1000‰;¥h:0px;¥bt:1px dotted "+ç.p(co,bg,0.5)+";¥bgc:"+ç.p(bg,co,1)+";",
			"._layerish>.body>.row"                    : anim1+"¥:flex-row;¥w:1000‰;¥c:"+ç.p(co,tx,0.7)+";¥bgc:"+ç.p(bg,co,1)+";¥bo:1px solid transparent;¥p:"+rowP+"px;¥:hand;",
			"._layerish>.body>.row:hover"              : anim2+"¥bgc:"+ç.p(bg,co,0.75)+";¥bc:"+ç.p(co,bg,0.9)+";",
			"._layerish>.body>.row      >.col1"        : "¥flex:1 1 50px;",
			"._layerish>.body>.row      >.col2"        : "¥flex:1000 1 200px;",
			"._layerish>.body>.row      >.col >.title" : "¥fs:1000‰;¥c:"+ç.p(co,tx,0.7,bg,0.9)+";",
			"._layerish>.body>.row      >.col >.info"  : "¥fs: 850‰;¥c:"+ç.p(co,tx,0.4,bg,0.6)+";",
			
			".thread-full" : "¥w:1000‰;¥c:"+ç.p(co)+";¥bo:1px solid "+ç.p(co)+";",
			".post-full"             : "¥w:1000‰;¥c:"+ç.p(tx)+";¥bo:1px solid "+ç.p(co)+";",
			".post-full>.meta"       : "¥:flex-row;",
			".post-full>.meta>.name" : "flex:2 1 auto;¥ta:left;",
			".post-full>.meta>.date" : "flex:2 1 auto;¥ta:right;",
			".post-full>.message"    : "",
			
			//----
			
			".root-head"                                 : "¥:absolute;¥:NW;¥w:1000‰;¥h:"+headH+"px;¥bgc:"+ç.p(bg)+";¥bb:5px double "+ç.p(co,bg,0.5)+";",
			".root-head>.breadcrumb-container"           : "¥fs:1500‰;",
			".root-head>.breadcrumb-container>.fragment" : "¥:inline-block;¥c:"+ç.p(co)+";¥:hand;",
			".root-head>.breadcrumb-container>.fragment:last-child" : "text-decoration:underline;",
			".root-head>.breadcrumb-container>.divider"  : "¥:inline-block;¥c:"+ç.p(tx)+";",
			".root-foot" : "¥:absolute;¥:SW;¥w:1000‰;¥h:"+footH+"px;¥bgc:"+ç.p(bg)+";¥bt:5px double "+ç.p(co,bg,0.5)+";",
			
			};
		µ.ma(document.head,µ.m({type:"style",d:{"data-unique":"asrStyle"},css}));},
};
µ.onLoad(0,async ()=>{
	var txl = 1; //π.rand(0,1); // [!] light themes are too difficult to tune
	var bgl = 1 - txl;
	var controlPointDarkN  = 0.5;
	var controlPointLightN = 0.35;
	ø.txFallback = [                  0,0, txl                                                           ,0   ];
	ø.coFallback = [π.rand(0,1000)/1000,1,(txl*(controlPointDarkN-controlPointLightN)+controlPointLightN),0   ];
	ø.bgFallback = [                  0,0, bgl                                                           ,0.65];
	await ø.asrStyle({useCacheF:T});window.addEventListener("resize",async function(){await ø.asrStyle();});
});
