function submitForm(){
	var firstName=document.getElementById('firstname').value;
	var lastName=document.getElementById('lastname').value;
	var phoneNumber=document.getElementById('phone').value;
	var email=document.getElementById('email').value;
	var result= "First Name: " + firstName + "\n" +
                 "Last Name: " + lastName + "\n" +
                 "Phone Number: " + phoneNumber + "\n" +
                 "Email ID: " + email;
	alert(result);
}