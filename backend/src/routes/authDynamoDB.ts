import { Request, Response } from "express";
import { authenticateDynamoDB } from "../modules/dynamoDB/authenticateDynamoDB";


//function handler() {}; //Declare the handler as an empty function
export async function authDynamoDB(request: Request, response: Response) {
	const query: any = request.query;
	const { email, password } = query; // Extract email and password from the query object
	const result = await authenticateDynamoDB(email, password); // Pass them as separate arguments
	response.send(result);
}
