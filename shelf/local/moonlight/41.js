moonlight.bin["41"] = function(){
	var oo = {
		nameInformalS : "Chart Decoder (bms)",
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
				var lneC = 8;
				for (var lneN = 0; lneN < lneC; lneN++){
					this.lneNxnteEAA[lneN] = [];}
				
				// bpm
				var bpmA = [];
				this.datS.replace(/^#BPM\s(\-?\d+(?:\.\d+)?)$/gm,function(match,p1,offset,string){bpmA.push({head:0,value:num(p1)});return "";});
				
				var kO = {11:0,12:1,13:2,14:3,15:4,18:5,19:6,16:7};
				var kKA = Object.keys(kO);
				
				// hit
				this.datS.replace(/^#(.{3})(.{2}):((?:.{2})+)$/gm,function(match,p1,p2,p3,offset,string){
					if (!kKA.includes(p2)){return "";}
					var bpm = bpmA[0].value; // !!! temporary, need to account for bpm changes
					var codeA = p3.match(/.{2}/g);
					var codeAC = codeA.length;
					codeA.forEach((code,codeAI)=>{
						if (code === "00"){return;}
						var expandN = codeAI / codeAC;
						var lneN = int(kO[p2]);
						var hedN = ((240000000 / bpm) * (int(p1) + expandN))/1000000;
						this.lneNxnteEAA[lneN].push({hedU:hedN,talU:hedN});});
					return "";});
				
				
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
		},
		ctr : async function(){;},
		import : function(){
			if (this.chk("datS")){
				this.dat.dcdFxn();}},
	};
	return oo;
};