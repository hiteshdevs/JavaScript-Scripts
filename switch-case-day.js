	var day = prompt("Enter day");
	var dayCheck = parseInt(day); 

	switch(dayCheck){
		case 0:
		      alert('sunday');
		      break;
		case 1:
		      alert('monday');
		      break;
		case 2:
		      alert('turday');
		      break;
		case 3:
		      alert('wednesday');
		      break;
		case 4:
		      alert('thurday');
		      break;
		case 5:
		      alert('friday');
		      break;
		case 6:
		      alert('satday');
		      break;
		default:
		      alert('not a day');
		      break;
	}
