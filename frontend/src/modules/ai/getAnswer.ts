import axios, { AxiosResponse } from "axios";
import { gitPageseUrl } from "./gitPageseUrl"; // Assuming you have this in a separate file or define it here
import { cloudFrontUrl } from "./cloudFrontUrl";
import { appEngineUrl } from "./appEngineUrl";

export async function getAnswer(
	userQuestion: string,
	userContext: string
): Promise<string> {
	const domain = window.location.hostname;
	const localBackendURL = "http://localhost:9000/"; // Added trailing slash for correct URL concatenation

	let baseUrl: string;

	// Determine the base URL based on the current domain
	if (domain === "localhost") {
		baseUrl = localBackendURL;
	} else if (domain === "zohra101.github.io") {
		// New condition for GitHub Pages
		baseUrl = appEngineUrl;
	} else {
		// Default to App Engine URL for other deployed environments (e.g., your custom domain for App Engine)
		baseUrl = baseUrl = appEngineUrl;
        ;
	}

	const backendRoute = "ai"; // Assuming 'ai' is the correct route segment

	// For axios.post, we'll always use the determined baseUrl.
	// The `isDeployed` variable is now redundant in this structure,
	// as the `baseUrl` determination already handles deployment context.

	const data = { question: userQuestion, context: userContext };

	let response: AxiosResponse<any>;
	try {
		// Construct the full URL using the determined baseUrl and backendRoute
		response = await axios.post(`${baseUrl}${backendRoute}`, data);
	} catch (error) {
		console.error("Error making API request:", error);
		// Provide a more informative answer in case of a network or API error
		return "Sorry, I'm currently unable to retrieve an answer. Please try again later.";
	}

	let answer: string = response.data;
	if (!answer) {
		answer = "Sorry, I don't know the answer to this question.";
	}
	return answer;
}
