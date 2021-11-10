function getVars() {
	let firstName = document.getElementById('firstName').value;
	let middleInit = document.getElementById('middleInit').value;	
	let lastName = document.getElementById('lastName').value;
	let firstDivisor = 3;
	let secondDivisor = 5;
	let thirdDivisor = 7;
	document.getElementById('greeting').textContent = 'Welcome to the Crab Shack, ' + firstName + ' ' + middleInit + ' ' + lastName + '!';
	fizzBuzz(firstDivisor, secondDivisor, thirdDivisor);	
	}

function isDivisible(firstDivisor, secondDivisor) {
	if (firstDivisor % secondDivisor === 0) {
		return true;
	} else {
		return false;
	}
}

function fizzBuzz(firstDivisor, secondDivisor, thirdDivisor) {
   	for(let i = 1; i <= 140; i++) {
     		var word = '';  
     		if (i % (firstDivisor * secondDivisor * thirdDivisor) === 0) {
       		word = word.concat('HotHEAVYcRaBs!');
     		} else if (i % (firstDivisor * secondDivisor) === 0) {
       		word = word.concat('Hot');
     		} else if (i % (firstDivisor * thirdDivisor) === 0) {
       		word = word.concat('Heavy');
		} else if (i % (secondDivisor * thirdDivisor) === 0) {
		word = word.concat('Salty');
		} else if (i % firstDivisor === 0) {
		word = word.concat('Spicy');			
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
