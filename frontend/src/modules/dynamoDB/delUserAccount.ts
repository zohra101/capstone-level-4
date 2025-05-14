import axios from "axios";
import { UserAccount } from "./UserAccount";

const backendURL = "http://localhost:9000";
const backendRoute = "/delAccount";

export async function delUserAccount(userAccount: UserAccount) {
	console.log("createUserAccount called with:", userAccount);
	console.log("Email to validate:", userAccount.email);

    if (
			userAccount.email === null ||
			userAccount.email === "" ||
			userAccount.email === undefined
		) {
			return "Please enter the email address of the account you wish to delete.";
		}

	const emailToSend = userAccount.email === null ? "" : userAccount.email;
	const url = `${backendURL}${backendRoute}?email=${emailToSend}&password=${userAccount.password}`;

	const response = await axios.put(url);
	return response.data;
}
