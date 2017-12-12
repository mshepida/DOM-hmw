
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
inputUserName.setAttribute('placeholder',"Your name:(user_[name])");

var inputDate = document.createElement("input"); //date, text
inputDate.setAttribute('type',"text");
inputDate.setAttribute('name',"date");
inputDate.setAttribute('placeholder',"Input Date (dd/mm/yyyy)");

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

	var date = new Date();
	var currDate = date.getDate();
	if(currDate<10) currDate = "0" + currDate;
	var currMonth = date.getMonth() + 1;
	if(currMonth<10) currMonth = "0" + currMonth;
	var currYear = date.getFullYear();
	var fullDate = currDate + "/" + currMonth + "/" + currYear;


	if (! /^[0-9]+$/.test(inputAge.value)) {
        alert("Your age is invalid");


        return false;
}


	if(usernameValid.test(inputUserName.value) == false){
		alert("Your name is invalid");

		return false;
	}

	if (inputDate.value !== fullDate) {
		alert("Your date is invalid");

		return false;

	}

	return true;
}

