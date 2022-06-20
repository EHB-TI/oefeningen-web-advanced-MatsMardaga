'use strict';

window.onload = function(){
    
    

    let num = document.getElementById('num').value;
    const rndInt = Math.floor(Math.random() * 20) + 0

    let compNum = () => {
       setTimeout(()=>{
        if(num == rndInt){
            alert('Correct guess');
        }
        else{
            alert('loser');
            console.log(rndInt);
        }
        
       }, 2000);
    };
    document.getElementById('btn').addEventListener('click', compNum);
    
};
