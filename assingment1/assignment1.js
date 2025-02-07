/**
Write a program using for loops(in Java, JavaScript, or C) that prints out the numbers 1 through 10 on the first line, the squares of 1 through 10 on the second line(e.g. 1, 4, 9...), the cubes on line three(e.g. 1, 8, 27...), and so on, for ten lines.Please be sure to indicate which language you are using.

Hint:How do I write a program that displays numbers 1 to 10 and their squares ?

so to solve this problem we need to first create a function then within the function we start the first for loop where
we say let i = 1 and i is less then or equal to 10 i++
then we create a variable to store the numbers in an array [1,2,3,4,5,6,7,8,9,10]
then we create another loop exg j = 1 and j is less then or equal to 10 j++
for each iteration we push into line we use Math.pow to multiply each number by each line lastly we join the line and turn the array into a string.

*/


function tenLines() {
  for (let i = 1; i <= 10; i++) {

    let line = [];

    for (let j = 1; j <= 10; j++) {

      line.push(Math.pow(j, i));

    }

    console.log(line.join(', '));

  }
}

console.log(tenLines());
