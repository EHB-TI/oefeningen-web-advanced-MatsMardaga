'use strict';

window.onload =() =>{

    async function getData(){
        let resp = await fetch('https://jsonplaceholder.typicode.com/posts');
        return await resp.json();
    }

    getData().then(resp => {
        addDataToDom(resp);
    });

    function addDataToDom(resp){
        document.getElementById('message').innerText = JSON.stringify(resp);
    }
}