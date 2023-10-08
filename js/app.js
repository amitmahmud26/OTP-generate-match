function generatePin() {
    const random = Math.floor(Math.random() * 9000) + 1000;
    return random;
}

function getPin() {
    let pin = generatePin();
    
    if (pin >= 1000 && pin <= 9999) {
        return pin;
    } else {
        return getPin();
    }
}

function setValueOfTextElement(elementID, value){
    const element = document.getElementById(elementID);
    element.value = value;
}

function getFieldValue(fieldID){
    const value = document.getElementById(fieldID).value;
    return value;
}

// generate button
document.getElementById("generate-pin").addEventListener('click', function(){
    const randomPin = generatePin();
    setValueOfTextElement("random-value-field",randomPin);
    console.log(randomPin);
});

// submit button
document.getElementById("calculator").addEventListener('click', function(event){
    const number = event.target.innerText;
    console.log(number);
    const typedNumberField = document.getElementById("typed-numbers");
    const prevTypedNumber = typedNumberField.value;
    if(isNaN(number)){
        console.log(number);
        if(number === 'C'){
            typedNumberField.value = '';
        }
        else if(number === '<'){
            const newNumber = prevTypedNumber.split('');
            newNumber.pop();
            const remainingNumber = newNumber.join('');
            typedNumberField.value = remainingNumber;
        }
    }
    else{
        const newTypedNumber = prevTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
});

document.getElementById("btn-submit").addEventListener('click', function(){
    const randomValue = getFieldValue("random-value-field");
    const typedValue = getFieldValue("typed-numbers");
    if(randomValue !== '' && typedValue !== '' && randomValue === typedValue){
        document.getElementById("matched").style.visibility = 'visible';
        document.getElementById("not-matched").style.visibility = 'hidden';
    }
    if(randomValue !== '' && typedValue !== '' && randomValue !== typedValue){
        document.getElementById("not-matched").style.visibility = "visible";
        document.getElementById("matched").style.visibility = "hidden";
    }
});