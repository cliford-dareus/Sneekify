

export default function Card(data, index){
    const song = data.name.split('-');

    return`
        <div>
            <div>
                <span>${index}</span>
                <img src=${data.thumbnail} alt="">
                <div>
                    <p>${song[1]}</p>
                    <p>${song[0]}</p>
                </div>
            </div>
            <div>
                <p></p>
                <a href="">play</a>
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