import view from '../javascript/Utils'
import { playVideo } from '../javascript/API'

export default async function Home(path){
    console.log(window.location)
    const id = window.location.hash.split('?id=')[1];

    view.innerHTML = `
        <div class="player__container">
            <div id="player" class="player"></div>
        
        <div class="player__detail">
            <p>Look at me now</p>
        </div>
    </div>
    `
    playVideo(id)
};

