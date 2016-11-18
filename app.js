(function(){
	var app = {
		init : function(){
			this.watcher();
			 this.button1();
 		     this.hide();
 		console.log("hello world");
 	},
 	watcher : function(){
 		$('button').on("click",this.test.bind(this))
 		$("#btn1").on("click",this.button1.bind(this));
 		$("#btn2").on("click",this.button2.bind(this));
 		$("#btn3").on("click",this.button3.bind(this));
 		$("#btn4").on("click",this.button4.bind(this));
 		$("#btn5").on("click",this.button5.bind(this));
 		$("#btn6").on("click",this.button6.bind(this));

 	},
 	test : function(){
 		
 		// this.hide();
 	},

 	hide : function(){
 		this.hideinput1();
 		this.hideinput2();
 		this.hideinput3();
 		this.hideinput4();
 		this.hideinput5();
 		this.hideinput6();
 		this.hidecheck1();
 		this.hidecheck2();
 		this.hidecheck3();
 		this.hidecheck4();
 		this.hidecheck5();
 		this.hidecheck6();
 		
 	},
 	button1 : function(){
 		console.log("1")
 		$('#input1').show();

 	
 	},
 	button2 : function(){
 		$('#input2').show();
 	},
 	button3 : function(){
 		$('#input3').show();
 	},
 	button4 : function(){
 		$('#input4').show();
 	},
 	button5 : function(){
 		$('#input5').show();
 	},
 	button6 : function(){
 		$('#input6').show();
 	},
 	hidecheck1 : function(){
 		$('#check1').hide();
 	},
 	hidecheck2 : function(){
 		$('#check2').hide();
 	},

 	hidecheck3 : function(){
 		$('#check3').hide();
 	},

 	hidecheck4 : function(){
 		$('#check4').hide();
 	},

 	hidecheck5 : function(){
 		$('#check5').hide();
 	},

 	hidecheck6 : function(){
 		$('#check6').hide();
 	},
 	hideinput1 : function(){
 		$('#input1').hide();
 	},
 	hideinput2 : function(){
 		$('#input2').hide();
 	},
 	hideinput3 : function(){
 		$('#input3').hide();
 	},
 	hideinput4 : function(){
 		$('#input4').hide();
 	},
 	hideinput5 : function(){
 		$('#input5').hide();
 	},
 	hideinput6 : function(){
 		$('#input6').hide();
 	},


 };


 app.init()
})();