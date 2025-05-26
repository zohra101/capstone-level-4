import axios from "axios";
import { appEngineUrl } from "./appEngineUrl";

export async function getAnswer(userQuestion: string, userContext: string): Promise<string> {

    const localPath = window.location.hostname;
    const localBackendURL = "http://localhost:9000";
    
    let baseUrl: string;
    
    if (localPath === "localhost") {
        baseUrl = localBackendURL;
    } else {
        baseUrl = appEngineUrl;
    }
    
    const backendRoute = "/ai";

	const data = { question: userQuestion, context: userContext };
	const response = await axios.post(baseUrl, data);
    let answer: string = response.data;
    if (!answer) answer = "Sorry, I don't know the answer to this question.";
    return answer;
}
