'use strict'
let config = null;

async function getConfig(){

    let resp = await fetch('oef3.json');
    let data = await resp.json();
    let config = data;
}

window.onload = () =>{

    getConfig();

    async function getData(param){
        let url = `${oef3.baseurl}s=${param}${oef3.apikey}`;
        let resp = await fetch(url);
        let data = await resp.json();
        console.log(data);
    }

    let submitForm = event =>{
        event.preventDefault();
        let value = document.getElementById('inputTitle').value;
        let result = getData(value);
    }

    document.getElementById('searchform').addEventListener('submit', submitForm);
    document.getElementById('moviecard').style.display = 'none';

}