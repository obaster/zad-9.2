var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);
var newName = 'Marian';

if (allNames.indexOf(newName) === -1) {
	console.log('Name ' + newName + ' has not appeared yet');
	allNames.push(newName);
	console.log(allNames);
} else {
	console.log('Name ' + newName + ' has already appeared');
}