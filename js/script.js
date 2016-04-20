$(document).ready(function(){
	var thumbImage;
	var FullImage;
	var artID;

	$(".menuButton").click(function(){
		$(".navbar").slideToggle();
	});


	$('.artProjectThumb').click(function(){

		var thumbImage = $(this).css('background-image');
        var FullImage = thumbImage.replace('Art-Thumbs', 'Art');
        
        if ($(this).hasClass('FullView')) 
        {
            $(this).height($(this).find('.artProjectThumb').height());
            $(this).removeClass('FullView');
            $(".fadeBack").hide();
        } 
        else {
            var artID ="#"+$(this).attr('id'); 
            $(artID).css('background-image',FullImage);
    		$(artID).on('load', function(){
    			alert("Image Loaded");
    		});

            $(this).height('');
            $(this).addClass('FullView');
            $(".fadeBack").show();

            
        }
	});

	$('.fadeBack').click(function(){
        $('.artProjectThumb').removeClass('FullView');
        $(".fadeBack").hide();
	});

	$(document).keyup(function(e) {
        if (e.keyCode == 27) { // escape key maps to keycode `27`
            $('.artProjectThumb').removeClass('FullView');
            $(".fadeBack").hide();
        }
	});


var fullScreen;

    $('.artThumb').click(function(){
        fullScreen = $(this).attr('src').replace('Art-Thumbs','Art');

        $(".fullImage").attr('src',fullScreen);
        $(".contentFade").show();
        $(".fullImageContainer").show();

    });














});