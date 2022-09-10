
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
		'X-RapidAPI-Host': 'youtube-music-downloader-mp3.p.rapidapi.com'
	}
};

export async function fetchDownload(id){
    const response = await fetch(`https://youtube-music-downloader-mp3.p.rapidapi.com/get_download_url?id=${id}`, options)
    const data = response.json();
    console.log(data)
    return data
}

export async function fetchResults (name){
    const response = await fetch(`https://youtube-music-downloader-mp3.p.rapidapi.com/v2/search?query=${name}&page=2`, options)
    const results = await response.json()
    return results.result;
};


export const playVideo = (id) =>{
      // 2. This code loads the IFrame Player API code asynchronously.
      let tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      let firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      onYouTubeIframeAPIReady()

      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: id,
          playerVars: {
            'playsinline': 1
          },
        });
      }

      function onPlayerReady(event) {
        event.target.playVideo();
      }

      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }

      console.log(player)
}