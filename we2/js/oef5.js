'use strict';

window.onload = function(){

    let fname;
    let lname;
    let age;
    let degree;

    let createStudent = () => {

        fname = prompt('First name:');
        lname = prompt('Last name:');
        age = prompt('Age:');
        degree = prompt('Degree:');
    }

    let showDetails = () => {
        console.log(`The student is called ${fname} ${lname}.\nHe is ${age} years old and studies ${degree}`)
    }

    document.getElementById('btn1').addEventListener('click', createStudent);
    document.getElementById('btn2').addEventListener('click', showDetails);
    
}
