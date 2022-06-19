'use strict';

let student = {
    fname: 'Default',
    age: 0,
    degree: 'digX',
    courses: [],

    setPersonalDetails: function(){
        this.fname = prompt('Name:');
        this.age = prompt('age:');
        this.degree = prompt('degree:');
    },

    addCourse: function(course){
        this.courses.push(course);
    },

    showStudent(){
        console.log(`De student heet: ${this.fname}. \nHij/zij is ${this.age} jaar oud en studeert: ${this.degree}`);
        console.log(`Zijn/haar vakken zijn: ${this.courses.join(', ')}. `);
    }
}

student.setPersonalDetails();
while(true){
    let c = prompt('Course:');
    if(c){
        student.addCourse(c);
    }
    else{
        break;
    }
}

student.showStudent();
