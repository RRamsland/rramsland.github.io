$(document).ready(function(){

	$(".menuButton").click(function(){
		$(".navbar").slideToggle();
	});

    var fullScreen;
    var img = new Image;
    img.src = $('.fullImage').css('background-image').replace(/url\(|\)$/ig, "");
    var bgImgWidth = img.width;

    $('.artThumb').click(function(){
        fullScreen = $(this).attr('src').replace('Art-Thumbs','Art');
        //$(".fullImage").attr('src',fullScreen);
        $(".fullImage").css('background','url("http://rramsland.github.io' + fullScreen + '") no-repeat scroll 50% 50% / contain padding-box border-box');
        $(".contentFade").show();
        $(".fullImage").slideDown();
    });

    function exitFullscreen(){
        $('.fullImage').slideUp();
        $(".contentFade").hide();
    }

    $('.fullImage').click(function(){
        exitFullscreen();
    });
    $('.contentFade').click(function(){
        exitFullscreen();
    });

    $(document).keyup(function(e) {
        if (e.keyCode == 27) { // escape key maps to keycode `27`
            exitFullscreen();
        }
    });


});