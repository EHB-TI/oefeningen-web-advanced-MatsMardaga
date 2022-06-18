'use strict';

function controleerLeeftijd(event){

    let age = document.getElementById('age').value;
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    if(age >= 18){
        alert("Welcome"+ " " + fname + " " + lname);
    }
    else{
        alert("You are too too young" + " " + fname + " " + lname);
    }
}


const form = document.getElementById('form');
form.addEventListener('submit', controleerLeeftijd);



