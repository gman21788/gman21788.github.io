function getVars() {
	let firstName = document.getElementById('firstName').value;
	let middleInit = document.getElementById('middleInit').value;	
	let lastName = document.getElementById('lastName').value;
	let firstDivisor = 3;
	let secondDivisor = 5;
	
	document.getElementById('greeting').textContent = 'Welcome to the Crab Shack, ' + firstName + ' ' + middleInit + ' ' + lastName + '!';

	fizzBuzz(firstDivisor, secondDivisor);	
	}

function isDivisible(firstDivisor, secondDivisor) {
	if (firstDivisor % secondDivisor === 0) {
		return true;
	} 
	else {
		return false;
	}
}


function fizzBuzz(firstDivisor, secondDivisor) {
   for(let i = 1; i <= 140; i++) {
     var word = '';
  
     if (i % (firstDivisor * secondDivisor) === 0) {
       word = word.concat('HotHEAVY');
     }
     else if (i % firstDivisor === 0) {
       word = word.concat('Hot');
     }
     else if (i % secondDivisor === 0) {
       word = word.concat('HEAVY');
     }
     else {
       word = word.concat('Order Crabs!');
     }


    var element1 = document.createElement('li');

    var newText = document.createTextNode(i + ' ' + word);
    
    element1.appendChild(newText);
    
    var pos_new = document.getElementsByTagName('ol')[0];
    
    pos_new.appendChild(element1);
    
  }
  
}
