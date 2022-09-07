



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
    const response = await fetch(`https://youtube-music-downloader-mp3.p.rapidapi.com/v2/search?query=${name}`, options)
    const results = await response.json()
    return results.result;
};