'use strict';

window.onload = function () {
    document.getElementById('btn').addEventListener('click', askDetails);


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

        this.setCourses = function (courses) {
            this.courses.push(courses);
        };

        this.showDetails = function () {
            let txt = `The student is called ${this.fname} ${this.lname}. \nHe/she is ${this.age} years old and studies ${this.degree}.
            His/her courses are: ${this.courses.join(', ')}.`;
            return txt;
        };
    }

    function askDetails() {
        //slaag de values op van wat er in de input velden staat.
        let fname = document.getElementById('fname').value;
        let lname = document.getElementById('lname').value;
        let age = document.getElementById('age').value;
        //slaag value van de geselecteerde radio button op in let degree.
        //querySelector pakt 1 element mee.
        let degree = document.querySelector('input[type=radio]:checked').value;

        //slaag alle aangevinkte values op in een lijst.
        //querySelectoraAll, pakt alle aangeduide values mee.
         let courses = document.querySelectorAll('input[type=checkbox]:checked');

        //nieuw student object
        let student = new Student(fname, lname, age, degree);
        //wanneer student correct gemaakt is springt hij in if, zet object in lijst en maakt input velden leeg, toont dan groene message.
        if (student) {

            listOfStudent.push(student);
            for(let c of courses){
                student.setCourses(c.value);
            }
            console.log(student);


            document.getElementById('fname').value = '';
            document.getElementById('lname').value = '';
            document.getElementById('age').value = '';
            document.getElementById('rmd').value = '';
            document.getElementById('we').value = '';
            document.getElementById('wa').value = '';
            document.getElementById('dwd').value = '';
            

            addAlert(true,'Student object created succesfully!');
        }
        //toont rode error
        else{
            addAlert(false,'Student not created');
        }

    }

    function showStudents() {
        for (let s of listOfStudent) {
            let p = document.createElement('p');
            p.innerHTML = s.showDetails();
            document.getElementById('content').appendChild(p);
        }

    }
    //functie voor alert.
    function addAlert(state, message) {
        let alert = '';

        //als state true is dan if, anders else.
        if (state) {
            alert = 
            `<div class="alert alert-success" role="alert">${message}</div>`;
        }
        else {
            alert = 
            `<div class="alert alert-danger" role="alert">${message}</div>`;
        }
        //plaats alert op deze plaats in HTML
        document.getElementById('messages').innerHTML = alert;
    }
}