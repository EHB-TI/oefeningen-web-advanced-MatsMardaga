async function getConfig(){
    let resp = await fetch('oef3.json');
    let data = await resp.json();
    config = data;
}


window.onload = ()=>{
    getConfig();
    
    async function getData(searchparameter){ 
        let url = `${config.baseurl}t=${searchparameter}${config.apikey}`
        let resp = await fetch(url);
        let data = await resp.json();
        return data;
    }

    showMovieOnCard =(movie)=>{
        document.getElementById('movie-title').innerText = movie.Title;
        document.getElementById('movie-plot').innerText = movie.Plot;
        document.getElementById('movie-text').innerText = movie.Released;
        document.getElementById('movie-poster').setAttribute('src', movie.Poster);
        document.getElementById('moviecard').style.display = 'block';
    }

    let voegTijdToe = (movie2) =>{
        document.getElementById('time-wasted').innerText = movie2.Runtime;
       // document.getElementById('time-wasted').innerText = movie.Runtime;
        console.log('test');
    }

    let submitForm = event =>{
        event.preventDefault();
        let value = document.getElementById('inputTitle').value;
        getData(value).then(result =>{
            console.log(result);
            showMovieOnCard(result);
            voegTijdToe(result)
            
        });
    }

    document.getElementById('searchform').addEventListener('submit', submitForm);
    //document.getElementById('add-time').addEventListener('click', voegTijdToe);

    document.getElementById('moviecard').style.display = 'none';

}