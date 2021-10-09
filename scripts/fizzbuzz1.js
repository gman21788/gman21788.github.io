function getVars() {
	let firstName = document.getElementById('firstName').value;
	let middleInit = document.getElementById('middleInit').value;	
	let lastName = document.getElementById('lastName').value;
	document.getElementById('greeting').textContent = 'Welcome to the Crab Shack, ' + firstName + ' ' + middleInit + ' ' + lastName + '!';

	fizzBuzz();	
	}

function fizzBuzz() {
   for(let i = 1; i <= 140; i++) {
     var word = '';
  
     if (i % 15 === 0) {
       word = word.concat('HotHEAVY');
     }
     else if (i % 3 === 0) {
       word = word.concat('Hot');
     }
     else if (i % 5 === 0) {
       word = word.concat('HEAVY');
     }
     else {
       word = word.concat('Order Crabs!');
     }


    var element1 = document.createElement('li');

    var newText = document.createTextNode(i + ' ' + word);
    
    element1.appendChild(newText);
    
    var pos_new = document.getElementsByTagName('ul')[0];
    
    pos_new.appendChild(element1);
    
  }
  
}
