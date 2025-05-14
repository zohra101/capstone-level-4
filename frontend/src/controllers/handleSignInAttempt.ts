import { useState } from "react";
import { readUserAccount } from "../modules/dynamoDB/readUserAccount";


export async function handleSignInAttempt(
	event: Event,
	setErrorMessage: any,
	onSignIn: any
) {
	event.preventDefault();
	
	debugger;

	const inputs = event.target as HTMLFormElement;
	const emailInput = inputs[2] as HTMLInputElement;
	const passwordInput = inputs[3] as HTMLInputElement;
	const closeButton = inputs[4] as HTMLButtonElement;

	const email = emailInput.value;
	const password = passwordInput.value;

	console.log(email, password);

	const [credentials = {email, password}, setCredentials] = useState(false);

	// const userAccount = readUserAccount(setCredentials);
	// console.log(userAccount);

	// const isAuthenticated = credentials.password === userAccount;
	// console.log(isAuthenticated);
	
	// if (isAuthenticated) {
	// 	closeButton.click();
	// 	inputs.reset();
	// 	onSignIn();
	// } else
	// 	setErrorMessage(
	// 		"The email and password entered do not match any authorized login."
	// 	);
}


