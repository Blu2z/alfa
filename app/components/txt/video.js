'use strict';

var busy = 0
function onYouTubeIframeAPIReady () {
		busy = 1;
		console.log('loading done!');
	};

function playerInit (div, h, w, id) {
	var name = div;
	var player = new YT.Player(div, {
		height: h,
		width: w,
		videoId: id,
		events: {
			'onReady': function () {
				var btnName = 'btn_' + div;

				$('#' + div).after("<a id='" + btnName + "' class='btn_player'></a>");

				$('#' + btnName).on('click', function () {
					$(this).fadeOut(400);

					player.playVideo();
				})
			}
		}
	});
}

if (typeof Object.create !== 'function') {
	Object.create = function (obj) {
		function F() {}
		F.prototype = obj;
		return new F();
	};
}

(function ($, window, document, undefined) {
	var PlayerYT = {
		init: function (options, elem) {
			var self = this;
			var div = $(elem).attr('id');
			var videoId = $(elem).data('urlid');

			$(elem).wrap("<div class='video__wrap'></div>");

			self.options = $.extend({}, $.fn.playerYouTube.options, options);

			var time = setInterval(function(){
				if (busy) {
					clearInterval(time);

					playerInit(
						div,
						self.options.height,
						self.options.width,
						videoId
					);
				}
			},200)
		}
	};


	$.fn.playerYouTube = function (options) {
		return this.each(function() {

			var player = Object.create( PlayerYT );
			player.init( options, this );
		});
	};

	$.fn.playerYouTube.options = {
    	height: 450,
		width: 700,
	};

})( jQuery, window, document );