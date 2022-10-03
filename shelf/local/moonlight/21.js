moonlight.bin["21"] = function(){
	var oo = {
		nameInformalS : "Sticky Table",
		importEO : {
			colEA : {cleanFxn : v=>v,},
			rowEA : {cleanFxn : v=>v,},
		},
		exportEO : {
			elM : {eqFxn : (a,b)=>F,},
		},
		dat : {
			colEA            : [],
			colEToDspFxn     : colE=>[],
			rowEA            : [],
			rowEToDspFxn     : rowE=>[],
			elM              : {},
			
			assertCSS : function(){
				µ.maCSS(document.head,this.parent.selectorRootS,µ.cssCompile({
					[this.parent.selectorRootS                                      ] : "box-sizing:border-box;¥w:1000‰;¥h:1000‰;",
					[this.parent.selectorRootS+">*"                                 ] : "box-sizing:border-box;",
					[this.parent.selectorRootS+">table"                             ] : "border-collapse:collapse;",
					[this.parent.selectorRootS+">table>*"                           ] : "",
					[this.parent.selectorRootS+">table>thead"                       ] : "",
					[this.parent.selectorRootS+">table>tbody>tr"                    ] : "¥:hand;",
					[this.parent.selectorRootS+">table>tbody>tr:hover"              ] : "¥bgc:hsla(0,0%,25%,1);",
					[this.parent.selectorRootS+">table>*>tr>td"                     ] : "¥bw:1px;¥bs:solid dashed;¥bc:hsla(0,0%,50%,1) hsla(0,0%,25%,1);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;",
					[this.parent.selectorRootS+">table>*>tr>td>img"                 ] : "¥s:24px;",
					[this.parent.selectorRootS+">canvas.display"                    ] : "", //"¥bo:1px solid orange;",
				}));},
		},
		ctr : function(){
			this.dat.assertCSS();},
		import : function(prpSA=[]){
			if (π.vInA("tx",prpSA) || π.vInA("co",prpSA) || π.vInA("bg",prpSA)){
				this.dat.assertCSS();}
			if (π.vInA("rowEA",prpSA) || π.vInA("colEA",prpSA)){
				
				// !!! HERE - add support for sticky rows and columns. Use {passive:T} on the event listener for better performance.
				
				var rowHeadEA = [];
				rowHeadEA.push(
					["tr.row.head",this.dat.colEA.map(colE=>["td",colE.dspS])]);
				var rowBodyEA = [];
				this.dat.rowEA.forEach(rowE=>{
					rowBodyEA.push(
						["tr.row.body",{mousedown:jjj([rowE,"actionFxn"],()=>{})},rowE.cellEA.map(cellE=>{
							if (typeof cellE.dspS    !== "undefined"){return ["td",cellE.dspS];}
							if (typeof cellE.srcImgS !== "undefined"){return ["td",[["img",{d:{src:cellE.srcImgS}}]]];}
							return ["td"];
						})]);
				});
				this.dat.elM =
					[this.selectorRootS,[
						["table",[
							["thead",rowHeadEA],
							["tbody",rowBodyEA],
						]],
					]];}
			;},
	};
	return oo;
};