import view from '../javascript/Utils';
import { fetchDownload, fetchResults } from '../javascript/API';
import Card from '../components/Card';
import Form from '../components/Form';

export default async function Home(path){
    view.innerHTML = Form();

    document.getElementById('form').addEventListener('submit',fetchData);
    const input = document.getElementById('input');

    async function fetchData(e){
        e.preventDefault;
        const name = input.value;

        console.log(name)
        const results = await fetchResults(name)
        console.log(results)
        renderResults(results.songs);
    }

};

function renderResults(results){
    const resultHTML = document.getElementById('result__container');

    resultHTML.innerHTML = `
        ${results.map((song, index) => Card(song, index) ).join('')
        }
    `
    document.getElementById('download__btn').addEventListener('click',(e) => getDownload(e));
};


async function getDownload(e){
    const prompt = document.getElementById("download__prompt");
    prompt.innerHTML = "";


    const data = await fetchDownload(e.target.dataset.id);
    const song = data.result.download_url;

    prompt.style.display = 'block';
    const link = document.createElement('a');
    link.href = song;
    link.innerText = 'comfirm';
    prompt.appendChild(link);
}