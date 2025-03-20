import { authenticationAws } from "../modules/authentication/authenticationAws.js";

export async function handleSignInAttempt(event = new Event(), setErrorMessage, onSignIn) {
	event.preventDefault();

	const inputs = event.target;
	const emailInput = inputs[1];
	const passwordInput = inputs[2];
	const closeButton = inputs[3];

	const email = emailInput.value;
	const password = passwordInput.value;

	// const resolveValue = await authenticationSimulationDB(email, password);
	// const isAuthenticated = resolveValue;
	const isAuthenticated = await authenticationAws(email, password);
	if (isAuthenticated) {
		closeButton.click();
		inputs.reset();
		onSignIn();
	} else
		setErrorMessage(
			"The email and password entered do not match any authorized login."
		);
}
