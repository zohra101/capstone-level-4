import { getBaseUrl } from "./getBaseUrl";
import { UserAccount } from "./UserAccount";
import axios from "axios";

const backendRoute = "/delAccount";

export async function delUserAccount(
	userAccount: UserAccount
): Promise<string> {
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
	const url = `${getBaseUrl()}${backendRoute}?email=${emailToSend}&password=${
		userAccount.password
	}`;

	const response = await axios.get(url);
	return response.data;
}
