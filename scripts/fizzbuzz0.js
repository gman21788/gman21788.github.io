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



    //creates new element & stores in variable
    var element_1 = document.createElement('li');
    
    //text node variable and components
    var text = document.createTextNode(i + ' Easy Peasy ||' + evenOdd);
    
    //text node and new element attach
    element_1.appendChild(text);
    
    //element's postition
    var pos_new = document.getElementsByTagName('ul')[0];
    
    //corrects position
    pos_new.appendChild(element_1);
    
  }
  
}
