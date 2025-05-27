import { lambdaUrl } from "../lambaUrl";
import axios from "axios";

export async function authenticationAws(email = "", password = ""): Promise<boolean> {
	
const domain = window.location.hostname;
	const localBackendURL = "http://localhost:9000/"; // Added trailing slash for correct URL concatenation

	let baseUrl: string;

	// Determine the base URL based on the current domain
	if (domain === "localhost") {
		baseUrl = localBackendURL;
	} else if (domain === "zohra101.github.io") {
		// New condition for GitHub Pages
		baseUrl = lambdaUrl;
	} else {
		// Default to App Engine URL for other deployed environments (e.g., your custom domain for App Engine)
		baseUrl = baseUrl = lambdaUrl;
		;
	}

	const backendRoute = "authDynamoDB";

	const credentials = {
		email: userEmail,
		password: userPassword,
	};

	const response = await axios.post(`${baseUrl}${backendRoute}`, data)

	// const matchingLogin = response.Item;
	// if (!matchingLogin) {
	// 	//Handles undefined error from password field
	// 	console.log("User not found.");
	// 	return false; //Handle user not found
	// }
	// const isAuthenticated = password === matchingLogin.password;
	// return isAuthenticated;
}
