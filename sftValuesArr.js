// Assignment: Shifting the values in the array
// Given an array x (e.g. [1,5, 10, 7, -2]), create an algorithm (sets of instructions) that shifts each number by one (to the front).  For example when the program is done x (assuming it was [1,5,10,7,-2]) should become [5,10,7,-2, 0]. 

var x = [1,5,10,7,-2];

for(var i = 0; i < x.length; i++)
{
    x[i] = x[i+1];    
}
x[x.length - 1] = 0;
console.log(x);