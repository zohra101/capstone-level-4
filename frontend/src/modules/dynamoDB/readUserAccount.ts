import { UserAccount } from "./UserAccount";
import axios from "axios";

const backendURL = "http://localhost:9000";
const backendRoute = "/readAccount";

export async function readUserAccount(userAccount: UserAccount) {
	const { email, password } = userAccount;
    const url = `${backendURL}${backendRoute}?email=${email}&password=${password}`;

	const response = await axios.get(url);
	// return response.data;

	if (!response.data.userAccount.email) 
	return "No account was found for the provided email address.";
}

