import axios from "axios";
import { UserAccount } from "./UserAccount";
import { lambdaUrl } from "./lambaUrl";

const localPath = window.location.hostname;
const localBackendURL = "http://localhost:9000";

let baseUrl: string;

if (localPath === "localhost") {
	baseUrl = localBackendURL;
} else {
	baseUrl = lambdaUrl;
}

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
	const url = `${localBackendURL}${backendRoute}?email=${emailToSend}&password=${userAccount.password}`;

	const response = await axios.get(url);
	return response.data;
}
