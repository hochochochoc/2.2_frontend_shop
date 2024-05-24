
// Exercise 6
document.getElementById('form').addEventListener('submit', validate);
function validate(event) {
	
	event.preventDefault();
	
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById('fAddress');
	var fLastN = document.getElementById('fLastN');
	var fPassword = document.getElementById('fPassword');
	var fPhone = document.getElementById('fPhone');

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	var errorAddress = document.getElementById("errorAddress");
	var errorLastN = document.getElementById("errorLastN");  
	var errorPassword = document.getElementById("errorPassword");
	var errorPhone = document.getElementById("errorPhone");  



	// Validate fields entered by the user: name, phone, password, and email
	
	if(fName.value === '' || fName.value === null || fName.value.length < 3){
		fName.classList.add('is-invalid');
		errorName.innerText = 'This field is required and must have at least 3 characters.';
		error++;
	} else {
		fName.classList.remove('is-invalid');
		errorName.innerText = '';
	}

	if(/[^a-zA-Z]/.test(fName.value)){
		fName.classList.add('is-invalid');
		errorName.innerText = 'Invalid first name!! Must be all letters with no digits.';
		error++;
	} else {
		fName.classList.remove('is-invalid');
		errorName.innerText = '';
	}

	

	if(fEmail.value == ''){
		error++;
	}


	if(fAddress.value === '' || fAddress.value === null || fAddress.value.length < 3){
		fAddress.classList.add('is-invalid');
		errorAddress.innerText = 'This field is required and must have at least 3 characters.';
		error++;
	} else {
		fAddress.classList.remove('is-invalid');
		errorAddress.innerText = '';
	}

	if(fLastN.value == ''){
		error++;
	}

	if(fLastN.value === '' || fLastN.value === null || fLastN.value.length < 3){
		fLastN.classList.add('is-invalid');
		errorLastN.innerText = 'This field is required and must have at least 3 characters.';
		error++;
	} else if(/[^a-zA-Z]/.test(fLastN.value)){
		fLastN.classList.add('is-invalid');
		errorLastN.innerText = 'Invalid last name!! Must be all letters with no digits.';
		error++;
	} else {
		fLastN.classList.remove('is-invalid');
		errorLastN.innerText = '';
	}

	if(fPassword.value == ''){
		error++;
	}

	if(fPhone.value == '' || isNaN(fPhone.value) || fPhone.value.length != 9){
		fPhone.classList.add('is-invalid');
		errorPhone.innerText = 'Invalid phone number!! Must be 9 digits with no letters.';
		error++;
	} else {
		fPhone.classList.remove('is-invalid');
		errorPhone.innerText = '';
	}


	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}

}
