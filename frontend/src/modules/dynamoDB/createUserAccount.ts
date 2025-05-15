import axios from "axios";
import { UserAccount } from "./UserAccount";

const backendURL = "http://localhost:9000";
const backendRoute = "/createAccount";

export async function createUserAccount(userAccount: UserAccount) {
	console.log("createUserAccount called with:", userAccount);
	console.log("Email to validate:", userAccount.email);

	if (userAccount.password === null) {
		return "A password is required to create an account. Please enter a valid password.";
	}

	const emailToSend = userAccount.email === null ? "" : userAccount.email;
    const url = `${backendURL}${backendRoute}?email=${emailToSend}&password=${userAccount.password}`;

	const response = await axios.get(url);
	return response.data;
}
