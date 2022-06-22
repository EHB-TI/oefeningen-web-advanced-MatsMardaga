let getAlbums = async() =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    return await response.json();
}

let getPhotos = async()=>{
    let response2 = await fetch('https://jsonplaceholder.typicode.com/photos');
    return await response2.json();
}








window.onload = () =>{
    console.log('loaded')

    document.getElementById('btn').addEventListener('click',function(){
        const name = document.getElementById('albumname').value;
        const data = {
            name
        };
        localStorage.setItem('album',JSON.stringify(data));
    
    })

    getAlbums().then(response =>{
        addAlbumsToDom(response);
    })

    getPhotos().then(response2 =>{
        addPhotosToDom(response2);
    })


    
   addAlbumsToDom = (albums) =>{
    for(i = 0; i<20; i++){
        let p = document.createElement('p');
        p.innerText = albums[i].title;
        p.id = `album_${albums[i].id}`
        document.getElementById('albumlist').appendChild(p);
        p.addEventListener('click', selectAlbum);
    }
   }

   addPhotosToDom = (photos) =>{
    for(i=0; i<21; i++){
        let img = document.createElement('img');
        img.src = photos[i].thumbnailUrl;
        document.getElementById('photolist').appendChild(img)
        
    }
   }
 
    }
   selectAlbum = (event) =>{
    getPhotos(event.target.id).then(photos =>{
        addPhotosToDom(photos);
        
    })

   }
   



