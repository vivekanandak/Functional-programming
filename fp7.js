// create the code to go from studentGrades array,
// to studentFeedback (as shown in comments below)

const studentGrades = [
  {name: 'Joe', grade: 88},
  {name: 'Jen', grade: 94},
  {name: 'Steph', grade: 77},
  {name: 'Allen', grade: 60},
  {name: 'Gina', grade: 54},
];


/*
const studentFeedback = [
  'Nice Job Joe, you got an b',
  'Excellent Job Jen, you got an a',
  'Well done Steph, you got an c',
  'What happened Allen, you got an d',
  'Not good Gina, you got an f',
];
*/

const studentsFeedback = studentGrades.map(greet());

function greet(){
  return function(a){
      if(a.grade>=80 &&a.grade<90){
       return `nice job ${a.name} you got an b`;
      }
     else if(a.grade>=90){
       return `Excellent job ${a.name} you got an a`;
      }
     else if(a.grade>=70 &&a.grade<80){
       return `well done ${a.name} you got an c`;
      }
     else if(a.grade>=60 &&a.grade<70){
       return `what happened ${a.name} you got an d`;
      }
     else{
       return `Not good ${a.name} you got an f`;
      }
  }
}

console.log(studentsFeedback);
