import { Request, Response } from "express";
import { authenticateDynamoDB } from "../modules/authenticateDynamoDB";


//function handler() {}; //Declare the handler as an empty function
export async function isDynamoDBAuthenticated(request: Request, response: Response) {
	const result = await authenticateDynamoDB();
	response.send(result);
}
