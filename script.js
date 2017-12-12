
var form = document.createElement("form");
form.setAttribute('name',"login");
form.setAttribute('action',"google.com");
form.setAttribute('onsubmit',"return validate()");

var inputAge = document.createElement("input"); //Age, text
inputAge.setAttribute('type',"text");
inputAge.setAttribute('name',"age");
inputAge.setAttribute('placeholder',"Input Your Age");

var inputUserName = document.createElement("input"); //User name, text
inputUserName.setAttribute('type',"text");
inputUserName.setAttribute('name',"username");
inputUserName.setAttribute('placeholder',"Input your name");

var inputDate = document.createElement("input"); //date, text
inputDate.setAttribute('type',"text");
inputDate.setAttribute('name',"date");
inputDate.setAttribute('placeholder',"Input Date");

var submitButton = document.createElement("input"); // Submit button
submitButton.setAttribute('type',"submit");
submitButton.setAttribute('value',"Validate Me");

form.appendChild(inputAge);
form.appendChild(inputUserName);
form.appendChild(inputDate);
form.appendChild(submitButton);

document.getElementsByTagName('body')[0].appendChild(form);

function validate() {
	var usernameValid = /^user_+[0-9a-z@]/i;
	var dateValid = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;

	if(!inputAge.value || !isFinite(inputAge.value) || inputAge.value <= 0 ){
		alert("Your age is invalid")

		return false;
	}

	if(usernameValid.test(inputUserName.value) == false){
		alert("Your name is invalid")

		return false;
	}

	if (dateValid.test(inputDate.value) == false) {
		alert("Your date is invalid");

		return false;

	}




	return true;
}

