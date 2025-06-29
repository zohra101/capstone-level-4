import { UserAccount } from "../dynamoDB/UserAccount";
import { lambdaUrl } from "./lambaUrl";
import axios from "axios";

export async function authenticationAws(
	userEmail = "",
	userPassword = ""
): Promise<UserAccount | undefined> {
	const domain = window.location.hostname;
	const localBackendURL = "http://localhost:9000/"; // Added trailing slash for correct URL concatenation

	let baseUrl: string;

	// Determine the base URL based on the current domain
	if (domain === "localhost") {
		baseUrl = localBackendURL;
	} else {
		// Default to App Engine URL for other deployed environments (e.g., your custom domain for App Engine)
		baseUrl = lambdaUrl;
	}

	const backendRoute = "authenticateAws";

	const data = {
		email: userEmail,
		password: userPassword,
	};

	// const response = await axios.post(`${baseUrl}${backendRoute}`, data);
	// let account = response.data;
	// if (!account) account = undefined;
	// return account;

	try {
		const response = await axios.post(`${baseUrl}${backendRoute}`, data);
		let account = response.data;
		if (typeof account === "string") account = undefined;
		return account;
	} catch (error) {
		// Here you swallow the error and return undefined on failure
		return undefined;
	}
}
