function getVars() {
	let firstName = document.getElementById('firstName').value;
	let middleInit = document.getElementById('middleInit').value;	
	let lastName = document.getElementById('lastName').value;
	let primeNumberOne = document.getElementById('primeNumberOne').value;
	let primeNumberTwo = document.getElementById('primeNumberTwo').value;
	let primeNumberThree = document.getElementById('primeNumberThree').value;
	let wordChoiceOne = document.getElementById('wordChoiceOne').value;
	let wordChoiceTwo = document.getElementById('wordChoiceTwo').value;
	let wordChoiceThree = document.getElementById('wordChoiceThree').value;
	let lineCounter = document.getElementById('lineCounter').value;
	document.getElementById('greeting').textContent = 'Welcome to the Crab Shack, ' + firstName + ' ' + middleInit + ' ' + lastName + '!';
	fizzBuzz(lineCounter, primeNumberOne, primeNumberTwo, primeNumberThree, wordChoiceOne, wordChoiceTwo, wordChoiceThree);	
	}

function fizzBuzz(lineCounter, primeNumberOne, primeNumberTwo, primeNumberThree, wordChoiceOne, wordChoiceTwo, wordChoiceThree) {
   	for(let i = 1; i <= lineCounter; i++) {
     	var word = '';  
     	if (i % (primeNumberOne * primeNumberTwo * primeNumberThree) === 0) {
       	word = word.concat(wordChoiceOne + '' + wordChoiceTwo + '' + wordChoiceThree);
     	} else if (i % (primeNumberOne * primeNumberTwo) === 0) {
       	word = word.concat(wordChoiceOne + '' + wordChoiceTwo);
     	} else if (i % (primeNumberOne * primeNumberThree) === 0) {
       	word = word.concat(wordChoiceOne + '' + wordChoiceThree);
		} else if (i % (primeNumberTwo * primeNumberThree) === 0) {
		word = word.concat(wordChoiceTwo + '' + wordChoiceThree);
		} else if (i % primeNumberOne === 0) {
		word = word.concat(wordChoiceOne);
		} else if (i % primeNumberTwo === 0) {
		word = word.concat(wordChoiceTwo);
		} else if (i % thirdDivisor === 0) {
		word = word.concat(wordChoiceThree);			
		} else {
       	word = word.concat('Order Crabs!');
     	}
	var element1 = document.createElement('li');
	var newText = document.createTextNode(' ' + word);   
	element1.appendChild(newText);    
	var pos_new = document.getElementsByTagName('ol')[0];  
	pos_new.appendChild(element1);  
  	}  
}
