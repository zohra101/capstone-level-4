import axios, { AxiosResponse } from "axios";
import { appEngineUrl } from "../authentication/appEngineUrl";

export async function getAnswer(
	userQuestion: string,
	userContext: string
): Promise<string> {
	const domain = window.location.hostname;
	const localBackendURL = "http://localhost:8080/"; // Added trailing slash for correct URL concatenation

	let baseUrl: string;

	// Determine the base URL based on the current domain
	if (domain === "localhost") {
		baseUrl = localBackendURL;
		// baseUrl = appEngineUrl;
	} else {
		// Default to App Engine URL for other deployed environments (e.g., your custom domain for App Engine)
		baseUrl = appEngineUrl;
	}

	const backendRoute = "ai";

	// For axios.post, we'll always use the determined baseUrl.
	// The `isDeployed` variable is now redundant in this structure,
	// as the `baseUrl` determination already handles deployment context.

	const data = { question: userQuestion, context: userContext };

	let response: AxiosResponse<any>;
	try {
		// Construct the full URL using the determined baseUrl and backendRoute
		const url = `${baseUrl}${backendRoute}`;
		response = await axios.post(url, data);

	} catch (error) {
		console.log("Error making API request.");
		return "Sorry, I'm currently unable to retrieve an answer. Please try again later.";
	}

	let answer: string = response.data;
	if (!answer) {
		answer = "Sorry, I don't know the answer to this question.";
	}
	return answer;
}
