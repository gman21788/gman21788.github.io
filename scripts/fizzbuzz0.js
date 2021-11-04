function getVars() {
	let firstName = document.getElementById('firstName').value;
	let middleInit = document.getElementById('middleInit').value;	
	let lastName = document.getElementById('lastName').value;
	document.getElementById('greeting').textContent = 'Welcome to the Crab Shack, ' + firstName + ' ' + middleInit + ' ' + lastName + '!';

	let numLines = prompt(`How many lines are you looking to buy ${firstName}?`);
	fizzBuzz(numLines);	
	}

function fizzBuzz(lineCounter) {
for(let i = 0; i <= lineCounter; i++) {
  var evenOdd;
  
  if (i % 2 === 0) {
    evenOdd = 'this is an even number';
  } else {
    evenOdd = 'this is an odd number';
  }

    var element1 = document.createElement('li');

    var newText = document.createTextNode(' Hot & Heavy ' + evenOdd);
    
    element1.appendChild(newText);
    
    var pos_new = document.getElementsByTagName('ol')[0];
    
    pos_new.appendChild(element1);
    
  }
  
}
