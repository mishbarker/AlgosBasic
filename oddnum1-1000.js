// Assignment: Odd Numbers
// Write a program that would print all the odd numbers from 1 to 1000

var num = 0;

for(var i=1; i<1001; i++)
{
    if(i % 2 === 1) {
        console.log(i);
    }
}