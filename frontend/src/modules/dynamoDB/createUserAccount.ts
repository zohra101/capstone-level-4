import axios from "axios";
import { UserAccount } from "./UserAccount";
import { lambdaUrl } from "../lambaUrl";

const localPath = window.location.hostname;
const localBackendURL = "http://localhost:9000";

let baseUrl: string;

if (localPath === "localhost") {
	baseUrl = localBackendURL;
} else {
	baseUrl = lambdaUrl;
}

const backendRoute = "/createAccount";

export async function createUserAccount(userAccount: UserAccount): Promise<string> {
	console.log("createUserAccount called with:", userAccount);
	console.log("Email to validate:", userAccount.email);

	if (userAccount.password === null) {
		return "A password is required to create an account. Please enter a valid password.";
	}

	const emailToSend = userAccount.email === null ? "" : userAccount.email;
	const url = `${baseUrl}${backendRoute}?email=${emailToSend}&password=${userAccount.password}`;

	const response = await axios.get(url);
	return response.data;
}
