import axios, { AxiosResponse } from "axios";
import { appEngineUrl } from "./appEngineUrl";

export async function getAnswer(userQuestion: string, userContext: string): Promise<string> {
	const domain = window.location.hostname;
	const localBackendURL = "http://localhost:9000";

	let baseUrl: string;

	if (domain === "localhost") {
		baseUrl = localBackendURL;
	} else {
		baseUrl = appEngineUrl;
	}

	const backendRoute = "ai";
	const isDeployed = domain === "zohra101.github.io" || domain === appEngineUrl;

    let response: AxiosResponse<any>;

    const data = { question: userQuestion, context: userContext };

    if (isDeployed)
			response = await axios.post(`${baseUrl}${backendRoute}`, data);
		else response = await axios.post(`${localBackendURL}${backendRoute}`, data);

	let answer: string = response.data;
	if (!answer) answer = "Sorry, I don't know the answer to this question.";
	return answer;
}
