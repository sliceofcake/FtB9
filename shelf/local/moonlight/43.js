moonlight.bin["43"] = function(){
	var oo = {
		nameInformalS : "Chart Decoder (ftb)",
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
				this.lneC = U;
				
				// Lane Count.
				this.datS.replace(/^\s*(\d+)\s+Key\s*$/gm,(match,p1,offset,string)=>{
					this.lneC = num(p1);
					return "";});
				
				// BPM.
				this.datS.replace(/^\s*BPM\s+(\-?\d+(?:\.\d+)?)\s+(\-?\d+(?:\.\d+)?)\s*$/gm,(match,p1,p2,offset,string)=>{
					if (num(p2) <= 0){return "";} // Only allow strictly positive bpms.
					this.bpmEA.push({hedU:num(p1)/1000,dltU:60/num(p2)});
					return "";});
				
				this.bpmEA.sort(function(a,b){
					return a.hedU - b.hedU;});
				
				// Hit note.
				this.datS.replace(/^\s*(\-?\d+(?:\.\d+)?)\s+\d+\s+(\d+)\s*$/gm,(match,p1,p2,offset,string)=>{
					var lneN = int(p2) - 1;
					var hedN = num(p1)/1000;
					while (this.lneNxnteEAA.length <= lneN){
						this.lneNxnteEAA.push([]);}
					this.lneNxnteEAA[lneN].push({hedU:hedN,talU:hedN});
					return "";});
				// Hold note.
				this.datS.replace(/^\s*(\-?\d+(?:\.\d+)?)\-(\-?\d+(?:\.\d+)?)\s+\d+\s+(\d+)\s*$/gm,(match,p1,p2,p3,offset,string)=>{
					var lneN = int(p3) - 1;
					var hedN = num(p1)/1000;
					var talN = num(p2)/1000;
					while (this.lneNxnteEAA.length <= lneN){
						this.lneNxnteEAA.push([]);}
					this.lneNxnteEAA[lneN].push({hedU:hedN,talU:talN});
					return "";});
				
				// Lane count guess is empty.
				if (this.lneC === U){
					this.lneC = this.lneNxnteEAA.length;}
				
				for (var lneN = 0; lneN < this.lneC; lneN++){
					if (this.lneNxnteEAA[lneN] === U){
						this.lneNxnteEAA[lneN] = [];}
					this.lneNxnteEAA[lneN].sort(function(a,b){
						var h = a.hedU - b.hedU;
						return (h !== 0) ? h : a.talU - b.talU;});
					this.lneNxnteEAA[lneN] = this.lneNxnteEAA[lneN].filter(note=>note.hedU >= 0 && note.talU >= 0); // positive notes
					this.lneNxnteEAA[lneN] = this.lneNxnteEAA[lneN].filter(note=>note.talU >= note.hedU); // well-formed hold notes
					;}
				
				;},
		},
		ctr : async function(){;},
		import : function(){
			if (this.chk("datS")){
				this.dat.dcdFxn();}},
	};
	return oo;
};