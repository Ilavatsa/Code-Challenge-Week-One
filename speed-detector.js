const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.question('Enter car speed:',(speed) => {
    speed = parseFloat(speed);
    const speedLimit = 70;
    const demeritPoints = Math.floor((speed - speedLimit) / 5);
    if (speed <= speedLimit)
    {
        console.log('OK');
    } else {
        console.log('Points: ${demeritPoints}');
        if (demeritPoints > 12) {
            console.log('Lincense suspended');
        }
    }
    r1.close();
});