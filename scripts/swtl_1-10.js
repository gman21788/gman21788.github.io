alert('Welcome to The Crab Shack!');
var fullName = prompt('Please enter your full name: ', 'Full Name');
var cityOfBirth = prompt('Please enter the city you were born: ', 'City of Birth');
var combinedMsg = fullName + ' from ' + 'cityOfBirth';
var numberOfCrabs = prompt('Please enter the number of crabs you're ordering: ', 0);
if (numberOfCrabs >= 1) {
	alert('Wow ${combinedMsg} you're about to enjoy some amazing crabs!');
}
