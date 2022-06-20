'use strict';

window.onload = function(){

let student = {
    fname: 'Default',
    lname: ' default',
    age: 0,
    degree: 'default',
    courses: [],

    setDetails(details) {
        [this.fname, this.lname, this.age, this.degree] = details;
    },
    setCourses(...courses) {
        this.courses = [...this.courses, ...courses];

    },
    showDetails() {
        console.log(`The student is called: ${this.fname} ${this.lname}. \nHe/she is ${this.age} years old and studies ${this.degree}.`);
        console.log(`His/her courses are: ${this.courses.join(', ')}.`);
    }
};

function askCourses() {
    while (true) {
        let c = prompt('Course:');
        if (c) {
            student.setCourses(c);
        }
        else {
            break;
        }
    }
}

function askDetails() {
    let data = [];

    data.push(prompt('First name:'))
    data.push(prompt('Last name:'))
    data.push(prompt('Age:'))
    data.push(prompt('Degree:'))
    student.setDetails(data);
    askCourses();
    student.showDetails();
}

document.getElementById('btn1').addEventListener('click', askDetails);


}