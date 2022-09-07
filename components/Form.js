



export default function Form(){
    return `
        <h1>Search, listen and download your favorites songs and videos.</h1>
        <form action="" id="form">
            <input id="input" type="text" placeholder="Enter a song">
            <button type="submit">Search</button>
        </form>

        <div id="result__container"></div>
        <div id="download__prompt"></div>
    `
}