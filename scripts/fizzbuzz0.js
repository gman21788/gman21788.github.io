function getVars() {
	let firstName = document.getElementById('firstName').value;
	let middleInit = document.getElementById('middleInit').value;	
	let lastName = document.getElementById('lastName').value;
	document.getElementById('greeting').textContent = 'Welcome to the Crab Shack, ' + firstName + ' ' + middleInit + ' ' + lastName + '!';

	let numLines = prompt(`How many lines are you looking to buy ${firstName}?`);
	fizzBuzz(numLines);	
	}

function fizzBuzz(numLinesCounter) {
	for(let i = 0; i <= numLinesCounter; i++) {
		var num;
		if (i % 2 === 0) {
			num = 'the number is even';
		} else {
			num = 'the number is odd';
		}
		var listElement = document.createElement('li');
		var textNode = document.createTextNode(i + ' Hot & Heavy ' + num;
		listElement.appendChild(textNode);
		var findPosition = document.getElementsByTagName('ul')[0];
		findPosition.appendChild(listElement);
	}
}
