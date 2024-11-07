var videoId;
function main() {
	const queryString = window.location.search;
	console.log(queryString);
	const urlParams = new URLSearchParams(queryString);
	const url = urlParams.get("url");
	console.log(url);
	// urlParams.delete("url");
	// let src = `${url.replace("/watch?v=", "/embed/")}`;
	// console.log(src);
	const search = new URL(url).searchParams;
	const youtubeParams = new URLSearchParams(search);
	console.log(youtubeParams.toString());
	videoId = youtubeParams.get("v");
	console.log(videoId);

	// 2. This code loads the IFrame Player API code asynchronously.
	var tag = document.createElement('script');

	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

main();
var width = window.innerWidth - 20;
var height = width / 640 * 390;
console.log(width + ", " + height);

// https://stackoverflow.com/questions/7853904/how-to-detect-when-a-youtube-video-finishes-playing/11726088#11726088
// https://developers.google.com/youtube/iframe_api_reference
// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
// https://stackoverflow.com/questions/12256382/youtube-iframe-api-not-triggering-onyoutubeiframeapiready
// function onYouTubeIframeAPIReady() {
window.onYouTubeIframeAPIReady = function() {
  player = new YT.Player('player', {
    // height: '390',
    // width: '640',
    height: height,
    width: width,
    // videoId: 'M7lc1UVf-VE',
    videoId: videoId,
    playerVars: {
      'playsinline': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
// function onPlayerReady(event) {
window.onPlayerReady = function(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
window.onPlayerStateChange = function onPlayerStateChange(event) {
  // if (event.data == YT.PlayerState.PLAYING && !done) {
  //   setTimeout(stopVideo, 6000);
  //   done = true;
  // }
	if(event.data === 0) {          
    // alert('done');
    console.log('done')
	}
}
function stopVideo() {
	console.log("Stopping video...");
  player.stopVideo();
}
