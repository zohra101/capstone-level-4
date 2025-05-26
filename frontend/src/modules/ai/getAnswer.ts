import axios from "axios";

export async function getAnswer(userQuestion: string, userContext: string): Promise<string> {
    const url = "http://localhost:9000/ai";
	const data = { question: userQuestion, context: userContext };
	const response = await axios.post(url, data);
    let answer: string = response.data;
    if (!answer) answer = "Sorry, I don't know the answer to this question.";
    return answer;
}
