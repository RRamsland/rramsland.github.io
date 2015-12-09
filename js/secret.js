$(document).ready(function(){
	$(".secret").trigger('load');
	var keys = [];
    var konami = '38,38,40,40,37,39,37,39,66,65';
 
   $(document).keydown(function(e) {
                keys.push( e.keyCode );
                if ( keys.toString().indexOf( konami ) >= 0 ){
 					$(".secret").trigger('play');
                    keys = [];
                }
            }
        );

});