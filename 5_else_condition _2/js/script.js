console.log("You are at " + window.location);

const number = parseInt(prompt('Enter a number'));
(number >= 0) ? console.log(number) :
    (number < 0) ? console.log(-number) : console.log('Invalid number');