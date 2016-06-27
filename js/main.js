;(function($, window, document, undefined) {
	"use strict";

	var image = [];
	var indexElem = 0, time;

	function moveNext(){
		indexElem++;
		if(indexElem>image.length-1){
			indexElem=0;
		}
		$('img').attr('src', image[indexElem]);
	}

	$('.btn.next').on('click', function(e){
		moveNext();
		e.preventDefault();
	});
	$('.btn.autoplay').on('click', function(e){
		if($(this).val()=='play'){
			time = setTimeout (function play(){
				moveNext();
				time = setTimeout(play, 1000);
			}, 1000);
			$(this).attr('value', 'stop').text('Stop');
		}
		else {
			time = clearTimeout(time);
			$(this).attr('value', 'play').text('Play');
		}
		e.preventDefault();
	});
	$('.btn.add').on('click', function(e){
		image.push($('.inpt').val());
		$('.inpt').val('');
		e.preventDefault();
	});

	function getImageArray(){
			$.ajax({
			  url: "server.php",
			  method: "POST", // default
			  statusCode: {
			      404: function() {
			        alert( "page not found" );
			      }
			  },
			  beforeSend: function( xhr ) {
			      xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
			  }
			}).done(function(data) {
			    var object = jQuery.parseJSON(data);
			    
			    console.log(object);
			    return object;
			});
		};
	$(window).load(getImageArray());

})(jQuery, window, document);