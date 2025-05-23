import axios from "axios";
import { UserAccount } from "./UserAccount";

const backendURL = "http://localhost:9000";
const backendRoute = "/updateAccount";

export async function updateUserAccount(userAccount: UserAccount) {
	console.log("updateUserAccount called with:", userAccount);
	console.log("Email to validate:", userAccount.email);

	if (userAccount.password === null) {
		return "A password is required to create an account. Please enter a valid password.";
	}

	const emailToSend = userAccount.email === null ? "" : userAccount.email;
	const url = `${backendURL}${backendRoute}?email=${emailToSend}&password=${userAccount.password}&&name=${userAccount.name}&phone=${userAccount.phone}`;

	const response = await axios.get(url);
	return response.data;
}
