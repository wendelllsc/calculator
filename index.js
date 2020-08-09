var numberPicked = '';
var operation;
var actualNumber;
var oldNumber;
var result = 0;
var view;

window.onload = function(){
    view = document.getElementById('view');
}

function pickNumber(element){
    numberPicked += element.innerHTML;
    actualNumber = numberPicked;
    view.innerText = numberPicked;
}
function pickOperation(element){
    if(oldNumber != null && actualNumber != null){
        equals();
    }else{
        operation = element;
        oldNumber = actualNumber;
        numberPicked = '';
        actualNumber = null;
    }
}

function equals(){
    switch (operation.id) {
        case 'op-div':
            if (result === 0 || result === null) {
                result = parseFloat(oldNumber) / parseFloat(actualNumber);
            } else {
                result /= numberPicked;
            }
            view.innerText = result;
            actualNumber = null;
            oldNumber = null;
            numberPicked = '';
            break;
        case 'op-sub':
            if (result === 0 || result === null) {
                result = parseFloat(oldNumber) - parseFloat(actualNumber);
            } else {
                result -= numberPicked;
            }
            view.innerText = result;
            actualNumber = null;
            oldNumber = null;
            numberPicked = '';
            break;
        case 'op-mult':
            if (result === 0 || result === null) {
                result = parseFloat(oldNumber) * parseFloat(actualNumber);
            } else {
                result *= numberPicked;
            }
            view.innerText = result;
            actualNumber = null;
            oldNumber = null;
            numberPicked = '';
            break;
        case 'op-adc':
            if (result === 0 || result === null) {
                result = parseFloat(oldNumber) + parseFloat(actualNumber);
            } else {
                result += parseFloat(numberPicked);
            }
            view.innerText = result;
            actualNumber = null;
            oldNumber = null;
            numberPicked = '';
            break;
        case 'op-percent':
            if (result === 0 || result === null) {
                result = (parseFloat(oldNumber) * parseFloat(actualNumber))/100;
            } else {
                result += parseFloat(numberPicked);
            }
            view.innerText = result;
            actualNumber = null;
            oldNumber = null;
            numberPicked = '';
            break;
        default:
            return numberPicked;
            break;
    }
}
function limpar(){
    numberPicked = '';
    operation = null;
    actualNumber = null;
    oldNumber = null;
    result = 0;
    view.innerText = null;
}