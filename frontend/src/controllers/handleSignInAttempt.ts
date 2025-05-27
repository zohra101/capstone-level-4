import { authenticationAws } from "../modules/authentication/authenticationAws";

export async function handleSignInAttempt(event: Event) {
	// event.preventDefault();
	// const emailInput = inputs[2] as HTMLInputElement;
	// const passwordInput = inputs[3] as HTMLInputElement;
	// const closeButton = inputs[4] as HTMLButtonElement;

	// const email = emailInput.value;
	// const password = passwordInput.value;

	const form = event.target.elements;
	const email = form.email.value;
	const password = form.password.value;
	// const closeButton = form.closeButton;
	const inputs = event.target as HTMLFormElement;

	console.log(email, password);

	const userAccount = {
		email, password
	}

	const account = await authenticationAws(email, password);
	if (account) {
	// closeButton.click();
	inputs.reset();
	}

	return account;
}


 