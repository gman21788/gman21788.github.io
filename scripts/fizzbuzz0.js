function getVars() {
	let firstName = document.getElementById('firstName').value;
	let middleInit = document.getElementById('middleInit').value;	
	let lastName = document.getElementById('lastName').value;
	document.getElementById('greeting').textContent = 'Welcome to the Crab Shack, ' + firstName + ' ' + middleInit + ' ' + lastName + '!';

	let numLines = prompt(`How many lines are you looking to buy ${firstName}?`);
	fizzBuzz(numLines);	
	}

function fizzbuzz(lineCounter) {
for(let i = 0; i <= lineCounter; i++) {
  var evenOdd;
  
  if (i % 2 === 0) {
    evenOdd = 'this is an even number';
  } else {
    evenOdd = 'this is an odd number';
  }

    var element_1 = document.createElement('li');

    var text = document.createTextNode(i + ' Hot & Heavy' + evenOdd);
    
    element_1.appendChild(text);
    
    var pos_new = document.getElementsByTagName('ul')[0];
    
    pos_new.appendChild(element_1);
    
  }
  
}
