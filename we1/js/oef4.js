'use strict';

function controleerLeeftijd(event){
  event.preventDefault();

  let age = document.getElementById('age').value;
  if(age >= 18){
    console.log('welcome feller');
  }
  else{
    console.log("You are too too young");
  }
}

const form = document.getElementById('form');
form.addEventListener('submit', controleerLeeftijd);
