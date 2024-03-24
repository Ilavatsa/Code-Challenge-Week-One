//Write a program that prompts the user to input student marks.
const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 r1.question('Enter student marks:',(marks) => {
    marks = parseFloat(marks);
    if (marks > 79){
        console.log('Grade:A');
    } else if (marks >= 60)
    {
        console.log('Grade:B');
    } else if (marks >= 50)
    {
        console.log('Grade:C');
    } else if (marks >= 40)
    {
        console.log('Grade:D');
    } else {
        console.log('Grade: E');
    }

    r1.close();
 });
