'use strict';

let Student = {
   fname: 'Default',
   lname: ' default',
   age: 0,
   degree: 'default',
   courses: [],

   setDetails(details){
      [this.fname, this.lname, this.age, this.degree] = details;
   },
   setCourses(...courses){
      this.courses = [...this.courses, ...courses];

   },
   showDetails(){
      console.log(`test of courses: ${this.courses.join(', ')}.`)
   }
};

function askCourses(){
   while(true){
      let c = prompt('Course:');
      if(c){
         Student.setCourses(c);
      }
      else{
         break;
      }
   }
}

let data = [];

data.push(prompt('First name:'))
data.push(prompt('Last name:'))
data.push(prompt('Age:'))
data.push(prompt('Degree:'))
Student.setDetails(data);
askCourses();
Student.showDetails();
