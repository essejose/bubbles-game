var BubbleShoot = window.BubbleShoot || {};
BubbleShoot.ui = (function($){
var ui = {
    BUBBLE_DIMS: 44,
    init: function() {},
    hideDialog: function() {
        $(".dialog").fadeOut(300);
    },
    getMouseCoords: function(e) {
        var coords = {
            x: e.pageX,
            y: e.pageY
        };

        return coords;
    },
    getBubbleCoords: function(bubble) {
        var bubbleCoords = bubble.position();
        bubbleCoords.left += ui.BUBBLE_DIMS / 2;
        bubbleCoords.top += ui.BUBBLE_DIMS / 2;
        return bubbleCoords;
    },
    getBubbleAngle: function(bubble, e) {
        var mouseCoords = ui.getMouseCoords(e);
        var bubbleCoords = ui.getBubbleCoords(bubble);
        var gameCoords = $("#game").position();
        var boardLeft = 120;
        var angle = Math.atan((xmouseCoords.x - bubbleCoords.left - boardLeft)
            (xbubbleCoords.top + gameCoords.top - mouseCoords.y));
        if (mouseCoords.y > bubbleCoords.top + gameCoords.top) {
            angle += Math.PI;
        }
        return angle;
    }

};
return ui;
})(jQuery);