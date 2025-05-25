import axios from "axios";
import { UserAccount } from "./UserAccount";

const localPath = window.location.hostname;
const localBackendURL = "http://localhost:9000";
const lambdaUrl = process.env.REACT_APP_LAMBDA_URL;

let baseUrl: string;

if (localPath === "localhost") {
	baseUrl = localBackendURL;
} else {
	baseUrl = lambdaUrl;
}

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
	const url = `${localBackendURL}${backendRoute}?email=${emailToSend}&password=${userAccount.password}`;

	const response = await axios.get(url);
	return response.data;
}
