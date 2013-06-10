$(window).load(function(){
	$('.load').delay(1000).fadeOut();
	$('#wrap, footer').fadeIn(200);

		var $load = $('footer').load(function(){});
		if($load)
		{
			$('#cont_video').delay(1000).show();
		}else{
			$('#cont_video').hide();
		}
});
$(document).ready(function(){

	var $play = $('.tubular-play').click(function(){$('.tubular-play').fadeOut(1000);$('.tubular-pause').show();});
	var $playp = $('.tubular-pause').click(function(){$('.tubular-play').show();$('.tubular-pause').hide();});

	if ($play){
		$('.tubular-pause').hide();
		$('.tubular-play').show();
	}else if($playp){
		$('.tubular-pause').hide();
		$('.tubular-play').show();
	}else{
		$('.tubular-play').show();
		$('.tubular-pause').show();
	};
	$('#cont_video').tubular({
		videoId: '6v2L2UGZJAM',
		playButtonClass: 'tubular-play',
		pauseButtonClass: 'tubular-pause'
	});
	
	$window = $(window);
                
    $('section[data-type="background"]').each(function(){
     var $bgobj = $(this);  
      	$(window).scroll(function() {						
			var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
			var coords = '80% '+ yPos + 'px';
			$bgobj.css({ backgroundPosition: coords });
		});
	});
});
