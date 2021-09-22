function getVars() {
	let firstName = document.getElementById('firstName').value;
	let lastName = document.getElementById('lastName').value;
	let middleInit = document.getElementById('middleInit').value;
	document.getElementById('greeting').textContent = 'Welcome to the Crab Shack, ' + firstName + ' ' + middleInit + ' ' + lastName + '!';
	}
