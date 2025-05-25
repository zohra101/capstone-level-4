import { UserAccount } from "./UserAccount";
import axios from "axios";

const localPath = window.location.hostname;
const localBackendURL = "http://localhost:9000";
const lambdaUrl = process.env.REACT_APP_LAMBDA_URL;

let baseUrl: string;

if (localPath === "localhost") {
	baseUrl = localBackendURL;
} else {
	baseUrl = lambdaUrl;
}

const backendRoute = "/readAccount";

export async function readUserAccount(userAccount: UserAccount): Promise<string> {
	const { email, password } = userAccount;
    const url = `${localBackendURL}${backendRoute}?email=${email}&password=${password}`;

	const response = await axios.get(url);
	return response.data;
}

