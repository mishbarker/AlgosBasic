// Assignment: Max, Min, and Average
// Given an array x (e.g. [1,5, 10, -2]), create an algorithm (sets of instructions) that prints the maximum number in the array, minimum value in the array as well as the average values in the array. 

var x = [1,5,10,-2];
var max = x[0];
var min = x[0];
var sum = 0;

for(var i = 1; i < x.length; i++)
{
    if(max > x[i])
    {
        max = x[i];
    }
    if(min < x[i])
    {
        min = x[i];
    }
    sum = sum + x[i];
}
var avg = sum / x.length;
console.log(max, min, avg);