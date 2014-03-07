function CordovaAudioPlayer() {
	var currentMedia, mediaTimer;
	var TIMER_INTERVAL = 50;
	var self = this;
	var internalSetCurrentTime = false;
	var startedRunning = false;
	
	this.currentTime = 0;
	this.ended = false;
	
	watch(this, 'currentTime', onCurrentTimeSet);
	
	function onCurrentTimeSet(id, oldVal, newVal) {
		if (internalSetCurrentTime) internalSetCurrentTime = false;
		else {
			if (currentMedia) {
				
				// A seek can only happen while the media is actually running.  If it isn't yet, try this in a bit.
				if (startedRunning) currentMedia.seekTo(newVal * 1000);
				else setTimeout(function() {
					onCurrentTimeSet(id, oldVal, newVal);
				}, 50);
			}
		}
	}
	
	this.setSrc = function(fileName) {
		internalSetCurrentTime = true;
		this.currentTime = 0;		
		startedRunning = false;
		
		if (currentMedia) {
			currentMedia.stop();
			currentMedia.release();
		}
		
		if (mediaTimer) clearInterval(mediaTimer);
		
		currentMedia = new Media('file:///android_asset/www/' + fileName + '.mp3', this.mediaSuccess, this.mediaError, this.mediaStatus);
	}
	
	this.play = function() {
		if (currentMedia) {
			this.ended = false;
			currentMedia.play();

			mediaTimer = setInterval($.proxy(function() {
				currentMedia.getCurrentPosition(
					
						// success
						function(position) {
							internalSetCurrentTime = true;
							self.currentTime = position;
							$(self).trigger('timeupdate');
						},
						
						// failure
						function(e) {
							console.log('error getting position: ' + e);
						});
			}, this), TIMER_INTERVAL);
		}
	}
	
	this.pause = function() {
		if (currentMedia) {
			if (mediaTimer) clearInterval(mediaTimer);
			
			currentMedia.pause();
		}
	}
	
	this.mediaSuccess = function() {
		console.log('media success');
	}
	
	this.mediaError = function(error) {
		console.log('media error: ' + error.code + ', ' + error.message);
	}
	
	this.mediaStatus = function(status) {
		console.log('status = ' + status);
		
		if (status == Media.MEDIA_STOPPED) {
			clearInterval(mediaTimer);
			self.ended = true;
			$(self).trigger('ended');
		}
		else if (status == Media.MEDIA_RUNNING) {
			startedRunning = true;
		}
	}
}