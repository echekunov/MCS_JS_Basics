console.log("You are at " + window.location);

const number = parseInt(prompt('Enter a number'));
if (number >= 0) {
    console.log(number);
}
else if (number < 0){
    console.log(-number);
}
else {
    console.log('Invalid number');
}