import { authenticationAws } from "../modules/authentication/authenticationAws";

export async function handleSignInAttempt(event: Event) {
	event.preventDefault();

	const form = event.target as HTMLFormElement; // Cast event.target to HTMLFormElement
	const email = form.email.value;
	const password = form.password.value;
	// const closeButton = form.closeButton;

	console.log(email, password);

	const account = await authenticationAws(email, password);
	if (account) {
		// closeButton.click();
		form.reset();
	}

	return account;
}


 