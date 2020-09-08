// Assignment: Find Average
// Given an array with multiple values (e.g. [1,3,5,7,20]), write a program that prints the average of the values in the array.  Again you're not to do this by using of any of the pre-built functions in Javascript.  Again iterate through each number in the array and update the 'average' as the program retrieves each number in the array.

var arr = [1,3,5,7,20];
var sum = 0;

for(var i = 0; i < arr.length; i++)
{
    sum = sum + arr[i];
}

var avg = sum/arr.length;
console.log(avg);
