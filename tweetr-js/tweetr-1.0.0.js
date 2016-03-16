/*
** Package:    	tweetr.js
** Version:     1.0.0
** Author:      Jim Forsyth (jpforsyth.com)
** Copyright:   2016 Jim Forsyth
** License:     MIT
**
** Description:
** A simple JQuery class/object that opens a Twitter messaging window (with a pre-filled username) in the center of a user's screen, complete with a background overlay and close button.
**
** Options:
** width:         (Optional) The width of the pop-up window. Defaults to 640 (integer)
** height:        (Optional) The height of the pop-up window Defaults to 480 (integer)
** btnText:       (Optional) The text used on the close button. Defaults to 'Close' (string)
**
** Configuration 1 (default):
** Tweetr.init();
**
** Configuration 2 (custom):
** $(function(){
**	Tweetr.init({width:800,height:600,btnText:'Close'});
** });
**
** Example:
** <a href="javascript:void(0)" onclick="Tweetr.open('jpforsyth'); return false;">Tweet</a>
**
** Notes:
** You need to include tweetr.css and tweetr-1.0.0.js in the head of the page on which you want to use tweetr.js, e.g.:
** <link rel="stylesheet" href="tweetr/tweetr.min.css" />
** <script type="text/javascript" src="tweetr/tweetr-1.0.0.min.js"></script>
**
*/

$(function(){
	Tweetr = new tweetr();
});

var tweetr = function() {

	// Set vals
	this.settings = [];
	this.defaults = {
		width: 640,
		height: 480,
		btnText: 'Close'
	};

	// Configure object
	this.init = function(settings) {
		var settings = settings || false;
		if (settings === false) {
			this.settings['width'] = this.defaults['width'];
			this.settings['height'] = this.defaults['height'];
			this.settings['btnText'] = this.defaults['btnText'];
		} else {
			this.settings['width'] = (settings['width'] !== null) ? settings['width'] : this.defaults['width'];
			this.settings['height'] = (settings['height'] !== null) ? settings['height'] : this.defaults['height'];
			this.settings['btnText'] = (settings['btnText'] !== null) ? settings['btnText'] : this.defaults['btnText'];
		}
	}

	// Open pop-up
	this.open = function(username) {
		var self = this;
		$('body').append('<div id="twrOverlay" class="loading" />');
		$('#twrOverlay').fadeIn(300, function(){
			$(this).removeClass('loading').append('<div class="twrOverlay-valign"><div class="twrOverlay-valign-cell"><span class="twrOverlay-closeBtn"><a href="#" onclick="Tweetr.close(); return false;">'+self.settings['btnText']+'</a></span></div></div>');
		});
		var popup = { w : this.settings['width'], h : this.settings['height'] }
		var browser = { x : window.screenX, y : window.screenY, w : window.innerWidth, h : window.innerHeight }
		var xpos = browser['x'] + (browser['w']/2) - (popup['w']/2);
		var ypos = browser['y'] + (browser['h']/2) - (popup['h']/2);
		this.twrWindow = window.open('https://twitter.com/intent/tweet?screen_name='+username,'twrWindow','width='+popup['w']+',height='+popup['h']+',toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left='+xpos+',top='+ypos+'');
		var self = this;
		this.t = setInterval(function(){
			self.checkWindowStatus();
		},500);
	}

	// Check if window has been closed
	this.checkWindowStatus = function() {
		var self = this;
		if (self.twrWindow && self.twrWindow.closed) {
			clearInterval(self.t);
			self.close();
		}
	}

	// Close the window
	this.close = function() {
		var self = this;
		if (this.twrWindow && !this.twrWindow.closed) this.twrWindow.close();
		$('span.twrOverlay-closeBtn').fadeOut(100, function(){
			$('#twrOverlay').fadeOut(300, function(){
				$(this).remove();
			});
		})
	}

}
