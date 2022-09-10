

export default function Card(data, index){
    const song = data.name.split('-');
    const time = data.duration.toString();
    const min = time.slice(0,1);
    const sec = time.slice(1);

    return`
        <div class="card">
            <div  class="card__top">
                <span>${index}</span>
                <img src=${data.thumbnail} alt="">
                <div>
                    <p class="title">${song[1]}</p>
                    <p class="artist">${song[0]}</p>
                </div>
            </div>
            <div class="card__bottom">
                <p>${min}:${sec}</p>
                <a href="#/player?id=${data.id}">play</a>
                <a href="#" data-id=${data.id} id="download__btn">download</a>
            </div>
        </div>
    `
}


// album
// : 
// {album_id: 'MPREb_gyHXekea3ID', name: 'Fan of A Fan The Album (Expanded Edition)'}
// artists
// : 
// (2) [{…}, {…}]
// duration
// : 
// 226
// id
// : 
// "QszExcBLiWA"
// name
// : 
// "Chris Brown, Tyga - Ayo"
// thumbnail
// : 
// "https://lh3.googleusercontent.com/g-4YLsE5PCo48eKM-SpaJmvfqQzqG69gheHpY-yXjlrlvfMJbE1nIoB4WLZXmzInDeCzjRiGYQBNzMecmg=w120-h120-l90-rj"
// title
// : 
// "Ayo"