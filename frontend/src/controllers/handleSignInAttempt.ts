import { readUserAccount } from "../modules/dynamoDB/readUserAccount";


export async function handleSignInAttempt(event: Event) {
	// event.preventDefault();

	const inputs = event.target as HTMLFormElement;
	const emailInput = inputs[2] as HTMLInputElement;
	const passwordInput = inputs[3] as HTMLInputElement;
	const closeButton = inputs[4] as HTMLButtonElement;

	const email = emailInput.value;
	const password = passwordInput.value;

	console.log(email, password);

	const userAccount = {
		email, password
	}

	const account = await readUserAccount(userAccount);

	return account || null;
}


