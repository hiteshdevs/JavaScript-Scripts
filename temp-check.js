	var temp = prompt("Enter temperture");
	var tempo = parseInt(temp); 

	if(tempo < 0) {
		alert('temperture is too low');
	} 

	else if(tempo <= 10) {
		alert('temperture is low');
	} 

	else if(tempo <= 20) {
		alert('temperture is cold n stromy');
	} 

	else if(tempo <= 30) {
		alert('temperture is Sunny weather');
	}

	else if(tempo <= 40) {
		alert('temperture is hot day');
	} 

	else if(tempo <= 50) {
		alert('temperture is too hot turn on the AC');
	} 

	else {
		alert('You are not on earth !!')
	}


