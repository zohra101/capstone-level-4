 //Form processing messages
//  const emailSubmitMessage = "<br>" + "<h5>Your message has been sent from" + email + ".</h5>" + "<br>";
 // const scheduleSubmitMessage = "<br>" + "<h5>Your consultation request has been submitted. Confirmation will be sent to" + email + ".</h5>" + "<br>";

import { parseResponseConsultation } from "./parseResponseConsultation";
import { resolveServerResponseConsultation } from "./resolveServerResponseConsultation";

export function handleSubmitConsultation(event) {
	event.preventDefault();
	const inputs = event.target;
	const emailInput = inputs[3]; //Targets the array location
	const email = emailInput.value; //Gets the value of the array location
	window.spinner.innerHTML = "<div class='spinner-border text-primary'></div>"; //Loads the spinner
	output2(
		"<br>" + "<h5>Submitting scheduling request for " + email + "...</h5><br>"
	); //Displays the "please wait" message
	const promise = new Promise(resolveServerResponseConsultation); //Initiates a new promise
	//Then handles the fulfilled state of a promise by executing the callback function argument when the promise resolves. Chaining then methods creates a sequence of async operations where the output of the previous then becomes the input of the next.
	promise.then(parseResponseConsultation).then(function hideSpinner(resolveValue2) {//Attaches callParseResponse as the argument/callback function to be called when callServerResponse is fulfilled. When callParseResponse is fulfilled, hideSpinner is the new promise. 

		window.spinner.innerHTML = ""; //Removes the spinner from the HTML tag
		return resolveValue2; //Returns the argument of the second, hideSpinner promise so that the app knows the promise is fullfilled. 
	});
} 
