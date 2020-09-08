// Assignment: Eliminate Negative Numbers
// Given an array x (e.g. [1,5, 10, -2]), create an algorithm (sets of instructions) that replaces any negative number with the value of 0.  When the program is done x should have no negative values (e.g. [1, 5, 10, 0]).

var x = [1,5,10,-2];

for(var i = 0; i < x.length; i++)
{
    if(x[i] < 0) {
        x[i] = 0;
    }
}
console.log(x);