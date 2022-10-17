/*
Q3) Write a JavaScript program to iterate over an array inputted by the user using mapping. 
Perform the square of all elements in the original array, 
store the squares in a new array and make a mapping for the squares and display it.
*/
let arr = [ 1, 2, 3, 4, 5 ];
let result = arr.map(x => x ** 2);
console.log('New Array: '+ result); 