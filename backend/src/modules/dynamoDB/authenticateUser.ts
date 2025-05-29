import { readUserAccount } from "./readUserAccount";
import { UserAccount } from "./UserAccount";

export async function authenticateUser(userEmail: string, userPassword: string)
: Promise<boolean> {
	const result = await readUserAccount({
		email: userEmail,
		password: userPassword,
	});

	// If result is a string (error message) or undefined, authentication fails
	if (typeof result === "string" || result === undefined) {
		return false;
	}

	// Confirm password match
	const isPasswordCorrect = userPassword === result.password;

	return isPasswordCorrect;
}