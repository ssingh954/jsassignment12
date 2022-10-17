/*
Q2) Write a program in JavaScript to map the student ids, names and scores.
*/
const id = [1, 2, 3];
const name1 = ["Hitanshu", "Ninad", "Amandeep"];
const scores = [ 90, 88, 92 ]

//a) Add data for 3 students (use map functions)
var array= [{id:1,name:'Hitanshu',scores:90},{id:2,name:'Ninad',scores:88},{id:3,name:'Amandeep',scores:92}];
const data = array.map(item => item);
console.log('Add data for 3 students:'); 
console.log(data); 
console.log('\r\n'); 

//b) Get Student Names using map functions
const student_nm = name1.map(item => item);
console.log('Student Names: '+ student_nm); 
console.log('\r\n'); 

//c) Delete Student Scores using map functions
var sc = scores.filter(function(item){ return item != 90 && item != 88 && item != 92 })
console.log('Delete Student Scores using map functions:'); 
console.log(sc);
console.log('\r\n'); 

//d) Display 1 parameter (only value), 2 parameters (value + key), and 3 parameters (value + key + map) for the student
const fullArr = {
    "id": [ 1, 2, 3 ],
    "name": [ 'Hitanshu', 'Ninad', 'Amandeep' ],
    "scores": [ 90, 88, 92 ]
  }
console.log('One parameter only value: '); 
for (const [key, val] of Object.entries(fullArr)) {  
    console.log(val)
}
console.log('\r\n'); 

//2 parameters (value + key)
console.log('Two parameter value + key: '); 
for (const [key, val] of Object.entries(fullArr)) {  
    console.log(key, val)
}
console.log('\r\n');

//THree parameters (value + key + map)
console.log('Three parameter value + key + map: '); 
for (const [key, val] of Object.entries(fullArr)) {  
    console.log(key, val)
    const mapped = Object.entries(fullArr).map(([k,v]) => `${k}=>[${v}]`);
    console.log(mapped);    
}

