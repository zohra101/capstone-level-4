import { authenticationAws } from "../modules/authentication/authenticationAws";

export async function handleSignInAttempt(event: Event, setErrorMessage: any, onSignIn: any) {
	event.preventDefault();

	const inputs = event.target as HTMLFormElement;
	const emailInput = inputs[1] as HTMLInputElement;
	const passwordInput = inputs[2] as HTMLInputElement;
	const closeButton = inputs[3] as HTMLButtonElement;

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
