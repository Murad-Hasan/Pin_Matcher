//Generate Pin Button Activities
document.getElementById('generate-pin').addEventListener('click', function () {
    const inputNumber = document.getElementById('view-pin');
    inputNumber.value = generateRandomNumber();

})

function generateRandomNumber() {
    const randomNumber = Math.random() * 10000
    const fixRandom = randomNumber.toFixed(0)

    if (fixRandom.length === 4) {
        return fixRandom;
    }
    else {
        console.log(fixRandom, 'short number')
        return generateRandomNumber()
    }
}

//handle Calculator Activities
const calculatorBody = document.getElementById('calculator-body');
calculatorBody.addEventListener('click', function(event){
    const digits = event.target.innerText
    if (isNaN(digits)) {
        //handel backspace
        //handel clear
        if (digits === 'C') {
            const typedInput = document.getElementById('typed-pin');
            typedInput.value = '';
        }
       if (digits === '<') {
        const typedInput = document.getElementById('typed-pin');
        typedInput.value = typedInput.value.substring(0, typedInput.value.length - 1);
        
       }
    }
    else{
        const typedInput = document.getElementById('typed-pin');
        typedInput.value += digits
    }
})

// submit Button
const verifyButton = document.getElementById('verifyPin')
verifyButton.addEventListener('click' , function (){

 const generatePin = document.getElementById('view-pin').value;
 const inputedPin = document.getElementById('typed-pin').value;

  if (generatePin === inputedPin && generatePin != '') {
    displayMatchResult('block', 'none')
  }
  else if(inputedPin == '' || generatePin == ''){
    alert('Please Input same Password and don not input empty password')
  }
 
  else{
    displayMatchResult('none', 'block')
    const timeLeft = document.getElementById('left-time');
    const timeLeftNumber = parseInt(timeLeft.innerText)
    let timeCount = timeLeftNumber - 1;
    timeLeft.innerText = timeCount;
    
  }
})
// displayMatchResult
function displayMatchResult(correctStatus, incorrectStatus) {
    const correct = document.getElementById('correct-pin');
    correct.style.display = correctStatus;
    const incorrect = document.getElementById('incorrect-pin');
    incorrect.style.display = incorrectStatus;
}


