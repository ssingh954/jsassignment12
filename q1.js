/*
Q1) JavaScript program to map Employee Records according to Employee IDs.
Employee: { id, name, salary }
*/
//a) Print an array of all employee ids
const id = [67, 48, 29];
const doubled = id.map(item => item);
console.log('Print an array of all employee ids:'); 
console.log(doubled); 
console.log('\r\n'); 


//b) Print count of employees
const name1 =["Hitanshu", "Ninad", "Amandeep"];
const result = name1.length;
console.log('Number of employees: ' + result+'\r\n');


//c) Print the name of the employee according to their id { key: value }
const array = {
    67: "Hitanshu",
    48: "Ninad",
    29: "Amandeep"
  }
console.log('Print the name of the employee: ');
for (const [key, val] of Object.entries(array)) {
    console.log(key+':', val)
}
console.log('\r\n'); 


//d) Store the salaries of all employees in an array
const salary= [ 75000, 82000, 98000 ];
const sal = salary.map(item => item);
console.log('print salaries of all employees in an array'); 
console.log(sal); 
console.log('\r\n'); 


//e) Calculate the average salary the company is paying to its employees
const average = salary.reduce((a, b) => a + b, 0) / salary.length;
console.log('Calculate the average salary the company: '+ average);