$(document).ready(function(){
	var thumbImage;
	var FullImage;
	var artID;

	$(".menuButton").click(function(){
		$(".navbar").slideToggle();
	});

	//$(".artProjectThumb").click(function(){;
	//	$(this).toggleClass("FullView");
	//	$(".fadeBack").toggle();
	//});

	$('.artProjectThumb').click(function(){

		var thumbImage = $(this).css('background-image');
        var FullImage = thumbImage.replace('Art-Thumbs', 'Art') ;//+ '!important';
        //window.FullImage=FullImage;

        
    if ($(this).hasClass('FullView')) 
    {
        $(this).height($(this).find('.artProjectThumb').height());
        $(this).removeClass('FullView');
        $(".fadeBack").hide();
    } 
  else {
        //alert($(this).attr('id'));
        var artID ="#"+$(this).attr('id'); 
        //window.artID=artID;
        //alert($(this).css('background-image'));
        //alert($(this).css('background'));
        //alert(FullImage);

            //url("/Art-Thumbs/Alone.jpg")
        $(artID).css('background-image',FullImage);
		//$(".FullView").css('background-image',FullImage+'!important');


		$(artID).on('load', function(){
			// hide/remove the loading image
			//$('#loader_img').hide();
			alert("Image Loaded");
		});

        
        //alert(FullImage);
        //alert($(".FullView").css('background-image'));

        $(this).height('');
        $(this).addClass('FullView');
        $(".fadeBack").show();

        
    }
	});

	$('.fadeBack').click(function(){
		//$('.artProjectThumb').click();
        $('.artProjectThumb').removeClass('FullView');
        $(".fadeBack").hide();
	});

	$(document).keyup(function(e) {
     if (e.keyCode == 27) { // escape key maps to keycode `27`
        //$('.artProjectThumb').click();
        $('.artProjectThumb').removeClass('FullView');
        $(".fadeBack").hide();
    }
	});




	var keys = [];
    var dark = '68,65,82,75';
	$(document).keydown(function(e) {
                keys.push( e.keyCode );
                if ( keys.toString().indexOf( dark ) >= 0 ){
 					
                	$('<link>').appendTo('head').attr({type : 'text/css', rel : 'stylesheet'}).attr('href', '/darkTheme.css');

                    keys = [];
                }
            }
        )






});