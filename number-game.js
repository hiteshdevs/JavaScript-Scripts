	var winningNumber = 25;

	var numberInput = +prompt("Enter a number");

	if (numberInput === winningNumber) {
		alert('your guess is right')
	} 
	else {
		if (numberInput >= winningNumber) {
			alert(`${numberInput} is high `);
		}
		else{
			alert(`${numberInput} is low`);
		}
	}
