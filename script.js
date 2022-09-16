$("document").ready(function () {
// Variables
let result = 0;
let previousEntry = 0;
let operation = null;
let currentEntry = '0'
updateScreen(result);

$('.button').click(function (e) {
    var buttonPressed = $(this).text()
    console.log(buttonPressed)

	
if(buttonPressed === 'C') {
    result = 0;
    currentEntry = '0';
} else if(buttonPressed === 'CE'){
    currentEntry = '0'
} else if(buttonPressed === 'del'){
    currentEntry = currentEntry.substring(0, currentEntry.length-1)
} else if(buttonPressed === '+/-'){
    currentEntry *= -1
} else if(buttonPressed === '.'){
    currentEntry += '.';
} else if(isNumber(buttonPressed)){ /* Number */
    if(currentEntry === '0')currentEntry = buttonPressed;
    else currentEntry = currentEntry+buttonPressed;
} else if(isOperator(buttonPressed)){   /* Operator */
    previousEntry = parseFloat(currentEntry)
    operation = buttonPressed;
    currentEntry = ' ';
} else if(buttonPressed === '%'){
    currentEntry = currentEntry/100;
} else if(buttonPressed === 'sqrt'){
    currentEntry = Math.sqrt(currentEntry);
} else if(buttonPressed === '1/x'){
    currentEntry = 1/currentEntry;
} else if(buttonPressed === 'pi') {
    currentEntry = Math.PI;
} else if(buttonPressed === '='){
    currentEntry = operate(previousEntry, currentEntry, operation)
    operation = null
}

updateScreen(currentEntry)

});
})

updateScreen  = function(displayValue){
    var displayValue = displayValue.toString();
    $('.screen').html(displayValue.substring(0, 10))
}

isNumber = function(value) {
    return !isNaN(value);
}

isOperator = function(value) {
    return value === '/' || value === '+' || value === '-' || value === '*'
}

operate = function(a,b,operation){
    a = parseFloat(a);
    b = parseFloat(b);
    console.log(a,b,operation)
    if(operation === '+') return a+b;
    if(operation === '-') return a-b;
    if(operation === '/') return a/b;
    if(operation === '*') return a*b;


}