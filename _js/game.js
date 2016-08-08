
// objeto principal do game


var BubbleShoot = window.BubbleShoot || {};

 BubbleShoot.Game = (function($){

 var Game = function(){
 	var curBubble;
 	var numBubbles;
	var MAX_BUBBLES = 70;
	this.init = function(){

	 $(".but_start_game").bind("click",startGame);
	 numBubbles = MAX_BUBBLES;
	};

	var getNextBubble = function(){
	var bubble = BubbleShoot.Bubble.create();
	  	bubble.getSprite().addClass("cur_bubble");
	 	$("#board").append(bubble.getSprite());
		return bubble;
	};



	var startGame = function(){
		$(".but_start_game").unbind("click");
	 	 BubbleShoot.ui.hideDialog();
	 	 curBubble = getNextBubble();
	 	$("#game").bind("click",clickGameScreen);
		};
	};

	


  return Game;

 })(jQuery);