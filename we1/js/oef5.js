'use strict';

let input = prompt("Give your input");

function capitalizeFirst(input){
    alert(input.slice(0,1).toUpperCase() + input.substr(1))
}

capitalizeFirst(input);

