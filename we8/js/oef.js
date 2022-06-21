let getAlbums = async() =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    return await response.json();
}

let getPhotos = async(albumId)=>{
    let response2 = await fetch(`https://jsonplaceholder.typicode.com/photos?albumID=1`);
    return await response2.json();
}





window.onload = () =>{
    console.log('loaded')

    document.getElementById('btn').addEventListener('click',function(event){
        const name = document.getElementById('albumname').value;
        const data = {
            name
        };
        localStorage.setItem('album',JSON.stringify(data));
    
    })

    getAlbums().then(response =>{
        addAlbumsToDom(response);
    })
     

   function addAlbumsToDom(albums){
    for(i = 0; i<10; i++){
        let p = document.createElement('p');
        p.innerText = albums[i].title;
        p.id = `album_${albums[i].id}`
        document.getElementById('albumlist').appendChild(p);
        p.addEventListener('click', selectAlbum);
    }
   }
   function addPhotosToDom(photos){
    console.log(photos);

    }
   }

   function selectAlbum(event){
    getPhotos(event.target.id).then(photos =>{
        addPhotosToDom(photos);
    })

   }
   



