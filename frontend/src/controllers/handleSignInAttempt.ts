import { authenticationAws } from "../modules/authentication/authenticationAws";
import { UserAccount } from "../modules/dynamoDB/UserAccount";

export async function handleSignInAttempt(event: Event): Promise<UserAccount | undefined> {
	event.preventDefault();

	const form = event.currentTarget as HTMLFormElement;
	const elements = form.elements as typeof form.elements & {
		email: HTMLInputElement;
		password: HTMLInputElement;
		closeButton: HTMLButtonElement;
	};

	const email = elements.email.value;
	const password = elements.password.value;
	const closeButton = elements.closeButton;


	console.log(email, password);

	const account = await authenticationAws(email, password);
	if (account) {
		form.reset();
	}

	return account;
}


 