import { authenticationAws } from "../modules/authentication/authenticationAws";
import { UserAccount } from "../modules/dynamoDB/UserAccount";

export async function handleSignInAttempt(event: Event): Promise<UserAccount | undefined> {
	event.preventDefault();

	let form: any = event.target; // Cast event.target to HTMLFormElement
	form = form.elements;
	const email = form.email.value;
	const password = form.password.value;
	const closeButton = form.closeButton;
	const inputs: any = event.target;

	console.log(email, password);

	const account = await authenticationAws(email, password);
	if (account) {
		form.reset();
	}

	return account;
}


 