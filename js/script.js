$(document).ready(function(){

	$(".menuButton").click(function(){
		$(".navbar").slideToggle();
	});

    var fullScreen;
    var img = new Image;
    img.src = $('.fullImage').css('background-image').replace(/url\(|\)$/ig, "");
    var bgImgWidth = img.width;
    var imgTitle;

    $('.artThumb').click(function(){
        fullScreen = $(this).attr('src').replace('Art-Thumbs','Art');
        imgTitle = $(this).attr('title');
        $(".fullImage").css('background','url("http://rramsland.github.io' + fullScreen + '") no-repeat scroll 50% 50% / contain padding-box border-box');
        $(".contentFade").show();
        $(".fullImage").slideDown();
        $(".picTitle").text(imgTitle);
        $(".picTitle").show();

    });

    function exitFullscreen(){
        $('.fullImage').slideUp();
        $(".contentFade").hide();
        $(".picTitle").hide();
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