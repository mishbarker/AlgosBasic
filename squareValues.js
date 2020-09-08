// Assignment: Square the Values
// Given an array x (e.g. [1,5, 10, -2]), create an algorithm (sets of instructions) that squares each value in the array.  When the program is done x should have values that have been squared (e.g. [1, 25, 100, 4]).  You're not to use any of the pre-built function in Javascript.  You could for example square the value by saying x[i] = x[i] * x[i];

var x = [1,5, 10, -2];

for(var i = 0; i < x.length; i++)
{
    x[i] = x[i] * x[i];
}
console.log(x);