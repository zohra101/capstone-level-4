import { Request, Response } from "express";
import { getAnswer } from "../modules/getAnswer";

//function handler() {}; //Declare the handler as an empty function
export async function ai(request: Request, response: Response) {
	// console.log("request.query:", request.query);
	// const { question, context }: any = request.query;
	const { question, context }: any = request.body; //Get URL-encoded data
	console.log("request.body:", request.body);
	const answer = await getAnswer(question, context);
	console.log("Answer:", answer);
	response.send(answer);
}