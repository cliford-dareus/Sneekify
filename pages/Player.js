import view from '../javascript/Utils'

export default async function Home(path){
    console.log(path)

    view.innerHTML = `
        <h1>Search, listen and download your favorites songs and videos.</h1>
    `
};