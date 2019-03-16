/* CODING CHALLENGE 1
calculate Mark and John's BMI to be able to compare them using boolean, and printing the result to the console.
BMI = mass / (height * height)
mass in kg and height in meters


var mark = {
    name: 'Mark',
    mass: 50,
    height: 1.50,
    bmiCalc: function() {
        console.log(this.mass / (this.height * this.height));
    }
};

var john = {
    name: 'John',
    mass: 60,
    height: 1.74,
    bmiCalc: function() {
        console.log(this.mass / (this.height * this.height));
    }
};

mark.bmiCalc();
john.bmiCalc();

console.log('Is Mark\'s BMI higher than John\'s? ' + Boolean(mark.bmiCalc > john.bmiCalc));

*/

/* CODING CHALLENGE 2
Calculate the average score for each basketball team and log the winner to the console, keeping in mind a draw might be possible.
John's team scored: 89, 120, 103 points
Mike's team scored: 116, 94, 123 points
Mary's team scored: 97, 134, 105 points


var johnsAverage = (89 + 120 + 103) / 3;
var mikesAverage = (116 + 94 + 123) / 3;
var marysAverage = (97 + 134 + 105) / 3;

console.log('John\'s team average is ' + johnsAverage + ', Mike\'s team average is ' + mikesAverage + ', Mary\'s team average is ' + marysAverage);

if (johnsAverage > mikesAverage && johnsAverage > marysAverage) {
    console.log('John\'s team has won with ' + johnsAverage + ' points!');
}
else if (mikesAverage > johnsAverage && mikesAverage > marysAverage) {
    console.log('Mike\'s team has won with ' + mikesAverage + ' points!');
}
else if (marysAverage > johnsAverage && marysAverage > mikesAverage) {
    console.log('Mary\'s team has won with ' + marysAverage + ' points!');
}
else if (johnsAverage === mikesAverage && johnsAverage > marysAverage) {
    console.log('John and mike\'s team have won with ' + johnsAverage + ' points!');
}
else if (marysAverage === johnsAverage && marysAverage > mikesAverage) {
    console.log('Mary and John\'s team have won with ' + marysAverage + ' points!');
}
else if (marysAverage === mikesAverage && marysAverage > johnsAverage) {
    console.log('Mary and Mike\'s team have won with ' + marysAverage + ' points!');
}
else { //all have the same score 
    console.log('John, Mary and Mike\'s team have won with ' + marysAverage + ' points!');
}

*/

/* CODING CHALLENGE 3
Create a tip calculator function to calculate the tips depending on the bills. Use arrays for the tips and for the final payment including the bill and tips.
use a tip of 20% of the bill if its less than 50 euros, 15% when the bill is between 50 and 200 euros and 10% if the bill is more than 200 euros.
bills: 124 euro, 48 euro, 268 euro


function tipCalc(bill) {
    var perc;
    if (bill < 50) {
        perc = 0.2;
    }
    else if (bill >= 50 && bill <= 200) {
        perc = 0.15;
    }
    else { //(bill > 200) 
        perc = 0.1;
    }
    return perc * bill;
}

var bill = [124, 48, 268];
var tips = [tipCalc(bill[0]),
            tipCalc(bill[1]),
            tipCalc(bill[2])];
var finalBill = [bill[0] + tips[0],
                 bill[1] + tips[1],
                 bill[2] + tips[2]];

console.log(tips, finalBill);

*/

/* CODING CHALLENGE 4
create the tip calculator again. But this time John's family has gone to 5 restaurants. And a loop should be used to help with the calculations.
*/

var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalBill = [];

        for (var i = 0; i < this.bills.length; i++) {
            var perc;
            var bill = this.bills[i];
            if (bill < 50) {
                perc = 0.2;
            }
            else if (bill >= 50 && bill <= 200) {
                perc = 0.15;
            }
            else { //(bill > 200) 
                perc = 0.1;
            }
            this.tips[i] = perc * bill;
            this.finalBill[i] = bill + bill * perc;
        }
    }
}

john.calcTips();
console.log(john);

