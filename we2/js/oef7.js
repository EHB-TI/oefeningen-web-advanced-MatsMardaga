'use strict';

window.onload = function () {
    document.getElementById('btn1').addEventListener('click', askDetails);
    document.getElementById('btn2').addEventListener('click', showStudents);

    let listOfStudent = [];

    function Student(fname, lname, age, degree) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.degree = degree;
        this.courses = [];

        this.setDetails = function (details) {
            [this.fname, this.lname, this.age, this.degree] = details;
        };

        this.setCourses = function (...courses) {
            this.courses = [...this.courses, ...courses];
        };

        this.showDetails = function () {
            let txt = `The student is called ${this.fname} ${this.lname}. \nHe/she is ${this.age} years old and studies ${this.degree}.
            His/her courses are: ${this.courses.join(', ')}.`;
            return txt;
        };
    }

    function askDetails() {
        let data = [];

        data.push(prompt('First name:'))
        data.push(prompt('Last name:'))
        data.push(prompt('Age:'))
        data.push(prompt('Degree:'))

        let student = new Student();
        student.setDetails(data);

        while (true) {
            let c = prompt('Course:');
            if (c) {
                student.setCourses(c);
            }
            else {
                break;
            }
        }

        listOfStudent.push(student);
    }

    function showStudents(){
        for(let s of listOfStudent){
            let p = document.createElement('p');
            p.innerHTML = s.showDetails();
            document.getElementById('content').appendChild(p);
        }

    }
}