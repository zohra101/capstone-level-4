
import { readUserAccount } from "./readUserAccount";
import { UserAccount } from "./UserAccount";

export async function authenticateUser(userEmail: string, userPassword: string)
: Promise<any> {

	const userAccount: UserAccount = { email: userEmail, password: userPassword };
	const readResult = await readUserAccount(userAccount);

	let isAuthenticated = false;

	if (typeof readResult === "object" && "password" in readResult) {
		isAuthenticated = readResult.password === userPassword;
	}

	return isAuthenticated;

}