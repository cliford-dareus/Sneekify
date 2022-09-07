// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '0623b9d5bemsha9ffac240869a10p1e1439jsn0525471e5911',
// 		'X-RapidAPI-Host': 'youtube-music-downloader-mp3.p.rapidapi.com'
// 	}
// };

// fetch('https://youtube-music-downloader-mp3.p.rapidapi.com/v2/search?query=eminem', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

// import UniversalRouter from 'universal-router'

import RouteHandler from "./Routes";

class App {
	constructor(){
		new RouteHandler;
	}
};


new App;