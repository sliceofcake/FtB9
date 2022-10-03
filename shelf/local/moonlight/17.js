moonlight.bin["17"] = function(){
	var oo = {
		nameInformalS : "Chart Decoder",
		importEO : {
			chartTxtS : {cleanFxn : v=>v,},
		},
		exportEO : {
			keyC  : {eqFxn : (a,b)=>a===b},
			bpmA  : {eqFxn : (a,b)=>a===b},
			noteA : {eqFxn : (a,b)=>a===b},
		},
		dat : {
			chartTxtS : "",
			keyC      :  0,
			bpmA      : [],
			noteA     : [],
			chartTxtDecode : function(res){
				var box = {bpmA:[],noteA:[],keyC:0};
				var typeS
					= (res.match(/\[HitObjects\]/) !== N) ? "o!m14"
						: ((res.match(/HEADER\sFIELD/ ) !== N) ? "bms"
							: "FtB4");
				switch (typeS){default:
					// !!! the following is only for BME, and does not yet have handling to determine "yes, this file is BME, not any of those other file types"
					break;case "bms":case "bme":case "bml":case "pms":
						var kO = {11:1,12:2,13:3,14:4,15:5,18:6,19:7,16:8};
						var kKA = Object.keys(kO);
						box.keyC = 8;
						// bpm
						res.replace(/^#BPM\s(\-?\d+(?:\.\d+)?)$/gm,function(match,p1,offset,string){box.bpmA.push({head:0,value:num(p1)});return "";});
						// hit
						res.replace(/^#(.{3})(.{2}):((?:.{2})+)$/gm,function(match,p1,p2,p3,offset,string){
							if (!kKA.includes(p2)){return "";}
							var bpm = box.bpmA[0].value; // !!! temporary, need to account for bpm changes
							var codeA = p3.match(/.{2}/g);
							var codeAC = codeA.length;
							codeA.forEach((code,codeAI)=>{
								if (code==="00"){return;}
								var expandN = codeAI/codeAC;
								box.noteA.push({head:(240000000/bpm)*(int(p1)+expandN),lane:int(kO[p2])});});
							return "";});
						// hold
						//res.replace(/^(\-?\d+(?:\.\d+)?)\-(\-?\d+(?:\.\d+)?)\s\d+\s(\d+)$/gm,function(match,p1,p2,p3,offset,string){box.noteA.push({head:π.chop(num(p1)*1000),tail:π.chop(num(p2)*1000),lane:int(p3)});return "";});
					break;case "o!m12":case "o!m13":case "o!m14":
						// notes
						// holds have exactly one more colon pair than hits
						// hits and holds may end with the name of an audio file, such as "F6S_s.wav", after the trailing colon
						//----
						box.keyC = ((_=res.match(/CircleSize\s*:\s*(\d+)/))===N)?0:int(_[1]);
						// bpm
						res.replace(/^(\-?\d+(?:\.\d+)?),(\-?\d+(?:\.\d+)?),(\-?\d+(?:\.\d+)?),(\-?\d+(?:\.\d+)?),(\-?\d+(?:\.\d+)?),(\-?\d+(?:\.\d+)?),(\-?\d+(?:\.\d+)?),(\-?\d+(?:\.\d+)?)$/gm,function(match,p1,p2,p3,p4,p5,p6,p7,p8,offset,string){box.bpmA.push({head:π.chop(num(p1)*1000),value:((num(p2)===0)?(0):(60000/num(p2)))});return "";});
						// hit
						res.replace(/^(\-?\d+(?:\.\d+)?),(\-?\d+(?:\.\d+)?),(\-?\d+(?:\.\d+)?),(\-?\d+(?:\.\d+)?),(\-?\d+(?:\.\d+)?),(\-?\d+(?:\.\d+)?):(\-?\d+(?:\.\d+)?):(\-?\d+(?:\.\d+)?):(\-?\d+(?:\.\d+)?):([^:]*)$/gm,function(that){return function(match,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,offset,string){box.noteA.push({head:π.chop(num(p3)*1000),lane:that.lane_osu_to_ftb4(int(p1),box.keyC)});return "";};}(this));
						// hold
						res.replace(/^(\-?\d+(?:\.\d+)?),(\-?\d+(?:\.\d+)?),(\-?\d+(?:\.\d+)?),(\-?\d+(?:\.\d+)?),(\-?\d+(?:\.\d+)?),(\-?\d+(?:\.\d+)?):(\-?\d+(?:\.\d+)?):(\-?\d+(?:\.\d+)?):(\-?\d+(?:\.\d+)?):(\-?\d+(?:\.\d+)?):([^:]*)$/gm,function(that){return function(match,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,offset,string){box.noteA.push({head:π.chop(num(p3)*1000),tail:π.chop(num(p6)*1000),lane:that.lane_osu_to_ftb4(int(p1),box.keyC)});return "";};}(this));
					break;case "FtB2":case "FtB3":case "FtB4":
						// bpm
						res.replace(/^BPM\s(\-?\d+(?:\.\d+)?)\s(\-?\d+(?:\.\d+)?)$/gm,function(match,p1,p2,offset,string){box.bpmA.push({head:π.chop(num(p1)*1000),value:num(p2)});return "";});
						// hit
						res.replace(/^(\-?\d+(?:\.\d+)?)\s\d+\s(\d+)$/gm,function(match,p1,p2,offset,string){box.noteA.push({head:π.chop(num(p1)*1000),lane:int(p2)});return "";});
						// hold
						res.replace(/^(\-?\d+(?:\.\d+)?)\-(\-?\d+(?:\.\d+)?)\s\d+\s(\d+)$/gm,function(match,p1,p2,p3,offset,string){box.noteA.push({head:π.chop(num(p1)*1000),tail:π.chop(num(p2)*1000),lane:int(p3)});return "";});
						box.keyC = box.noteA.reduce(((p,v)=>Math.max(p,v.lane)),0);}
					box.noteA.sort(function(a,b){
						var h = a.head-b.head;
						return (h !== 0) ? h : a.tail-b.tail;});
				box.noteA = box.noteA.filter(note=>note.head>=0&&(typeof note.tail === "undefined" || note.tail>=0)); // positive notes
				box.noteA = box.noteA.filter(note=>typeof note.tail === "undefined" || note.tail>=note.head); // well-formed hold notes
				box.bpmA = box.bpmA.filter(bpm=>bpm.value!==0); // divide by zero issue when flipping bpm to µspb
				box.bpmA.forEach(bpm=>{bpm.value = π.chop(60000000/bpm.value);});
				box.bpmA = box.bpmA.filter(bpm=>bpm.value>0); // position bpms
				ll(box);
				return box;},
			lane_osu_to_ftb4 : function(lane,keyC){
				var range = 512/keyC;
				for (var i = 1; i <= 128; i++){
					if (lane < range*i){
						return i;}}},
			lane_ftb4_to_osu : function(lane,keyC){
				var range = 512/keyC;
				return Math.trunc(lane*range);},
			chartTextEncode : function(o={}){π.p(o,{which:"FtB4"});
				var box = this.dat.chartBox;
				switch (o.which){default : ;
					break;case "FtB4" :
						return "###FILE ALREADY PARSED###\n"
						+ box.bpmA.map(v=>"BPM "+π.chop(v.head/1000,3)+" "+π.chop(60000000/v.value,3)+"\n").join("")
						+ box.noteA.map(v=>π.chop(v.head/1000,3)+((typeof v.tail === "undefined")?(""):("-"+π.chop(v.tail/1000,3)))+" 0 "+π.chop(v.lane)+"\n").join("");
					break;case "o!m12" :case "o!m13" :case "o!m14" :
						return "[TimingSection]\n"
						+ box.bpmA.map(v=>π.chop(v.head/1000,3)+","+((v.value==0)?(0):(π.chop(60000/v.value,3)))+",4,1,0,0,0,0\n").join("")
						+ "\n[HitObjects]\n"
						+ box.noteA.map(v=>π.chop(this.lane_ftb4_to_osu(v.lane,box.keyC),2)+",192,"+π.chop(v.head/1000,3)+","+((typeof v.tail === "undefined")?("1"):("128"))+",0,"+((typeof v.tail === "undefined")?("0"):(π.chop(v.tail/1000,3)))+((typeof v.tail === "undefined")?(""):(":0"))+":0:0:0:\n").join("")
			}},
		},
		ctr : async function(){},
		import : function(prpSA=[]){
			if (π.vInA("chartTxtS",prpSA)){
				var box = this.dat.chartTxtDecode(this.dat.chartTxtS);
				this.dat.keyC  = box.keyC ;
				this.dat.bpmA  = box.bpmA ;
				this.dat.noteA = box.noteA;}},
	};
	return oo;
};