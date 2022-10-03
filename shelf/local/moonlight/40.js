moonlight.bin["40"] = function(){
	var oo = {
		nameInformalS : "Chart Decoder (osm)",
		importEO : {
			datS : {},},
		exportEO : {
			bpmEA       : {},
			lneC        : {},
			lneNxnteEAA : {},},
		dat : {
			bpmEA       : [] ,
			datS        : U  ,
			lneNxnteEAA : [] ,
			dcdFxn : function(){
				this.bpmEA = [];
				this.lneNxnteEAA = [];
				var lneC = ((_=this.datS.match(/CircleSize\s*:\s*(\d+)/))===N)?0:int(_[1]);
				for (var lneN = 0; lneN < lneC; lneN++){
					this.lneNxnteEAA[lneN] = [];}
				
				//// bpm
				//this.datS.replace(/^(\-?\d+(?:\.\d+)?),(\-?\d+(?:\.\d+)?),(\-?\d+(?:\.\d+)?),(\-?\d+(?:\.\d+)?),(\-?\d+(?:\.\d+)?),(\-?\d+(?:\.\d+)?),(\-?\d+(?:\.\d+)?),(\-?\d+(?:\.\d+)?)$/gm,function(match,p1,p2,p3,p4,p5,p6,p7,p8,offset,string){box.bpmA.push({head:π.chop(num(p1)*1000),value:((num(p2)===0)?(0):(60000/num(p2)))});return "";});
				
				// notes
				// [!] holds have exactly one more colon pair than hits
				// [!] hits and holds may end with the name of an audio file, such as "F6S_s.wav", after the trailing colon
				// hit
				this.datS.replace(/^(\-?\d+(?:\.\d+)?),(\-?\d+(?:\.\d+)?),(\-?\d+(?:\.\d+)?),(\-?\d+(?:\.\d+)?),(\-?\d+(?:\.\d+)?),(\-?\d+(?:\.\d+)?):(\-?\d+(?:\.\d+)?):(\-?\d+(?:\.\d+)?):(\-?\d+(?:\.\d+)?):([^:]*)$/gm,function(that){
					return function(match,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,offset,string){
						var lneN = that.lane_osu_to_ftb4(int(p1),keyC);
						var hedN = num(p3)/1000;
						this.lneNxnteEAA[lneN].push({hedU:hedN,talU:hedN});
						return "";};}(this));
				// hold
				this.datS.replace(/^(\-?\d+(?:\.\d+)?),(\-?\d+(?:\.\d+)?),(\-?\d+(?:\.\d+)?),(\-?\d+(?:\.\d+)?),(\-?\d+(?:\.\d+)?),(\-?\d+(?:\.\d+)?):(\-?\d+(?:\.\d+)?):(\-?\d+(?:\.\d+)?):(\-?\d+(?:\.\d+)?):(\-?\d+(?:\.\d+)?):([^:]*)$/gm,function(that){
					return function(match,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,offset,string){
						var lneN = that.lane_osu_to_ftb4(int(p1),keyC);
						var hedN = num(p6)/1000;
						var talN = num(p3)/1000;
						this.lneNxnteEAA[lneN].push({hedU:hedN,talU:talN});
						return "";};}(this));
				
				for (var lneN = 0; lneN < lneC; lneN++){
					this.lneNxnteEAA[lneN].sort(function(a,b){
						var h = a.hedU - b.hedU;
						return (h !== 0) ? h : a.talU - b.talU;});
					this.lneNxnteEAA[lneN] = this.lneNxnteEAA[lneN].filter(note=>note.hedU >= 0 && note.talU >= 0); // positive notes
					this.lneNxnteEAA[lneN] = this.lneNxnteEAA[lneN].filter(note=>note.talU >= note.hedU); // well-formed hold notes
					;}
				//box.bpmA = box.bpmA.filter(bpm=>bpm.value!==0); // divide by zero issue when flipping bpm to µspb
				//box.bpmA.forEach(bpm=>{bpm.value = π.chop(60000000/bpm.value);});
				//box.bpmA = box.bpmA.filter(bpm=>bpm.value>0); // position bpms
				
				this.lneC = this.lneNxnteEAA.length;
				
				;},
			lane_osu_to_ftb4 : function(lane,keyC){
				var range = 512/keyC;
				for (var i = 1; i <= 128; i++){
					if (lane < range*i){
						return i-1;}}},
		},
		ctr : async function(){;},
		import : function(){
			if (this.chk("datS")){
				this.dat.dcdFxn();}},
	};
	return oo;
};