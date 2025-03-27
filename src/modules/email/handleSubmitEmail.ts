//Form processing messages
//const emailSubmitMessage = "<br>" + "<h5>Your message has been sent from" + email + ".</h5>" + "<br>";
//const scheduleSubmitMessage = "<br>" + "<h5>Your consultation request has been submitted. Confirmation will be sent to" + email + ".</h5>" + "<br>";

 import { output } from "../../utils/output";
 import { parseResponseEmail } from "../email/parseResponseEmail";
 import { resolveServerResponseEmail } from "../email/resolveServerResponseEmail";

//Submit handler
export function handleSubmitEmail(event) {
	event.preventDefault();
	const inputs = event.target;
	const emailInput = inputs[3]; //Targets the array location
	const email = emailInput.value; //Gets the value of the array location

	const spinner = document.getElementById("spinner");

	spinner.innerHTML = "<div class='spinner-border text-primary'></div>"; //Loads the spinner
	output("<br>" + "<h5>Submitting for " + email + "...</h5><br>"); //Displays the "please wait" message

	const promise = new Promise(resolveServerResponseEmail); //Initiates a new promise
	//Then handles the fulfilled state of a promise by executing the callback function argument when the promise resolves. Chaining then methods creates a sequence of async operations where the output of the previous then becomes the input of the next.

	promise.then(parseResponseEmail).then(function hideSpinner(resolveValue) {
		//Attaches emailParseResponse as the argument/callback function to be called when emailServerResponse is fulfilled. When emailParseResponse is fulfilled, hideSpinner is the new promise.

		spinner.innerHTML = ""; //Removes the spinner from the HTML tag

		return resolveValue; //Returns the argument of the second, hideSpinner promise so that the app knows the promise is fullfilled.
	});
}
