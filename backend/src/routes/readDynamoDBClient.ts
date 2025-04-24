import { Request, Response } from "express";
import { returnDynamoDBClient } from "../modules/dynamoDB/returnDynamoDBClient";


//function handler() {}; //Declare the handler as an empty function
export async function readDynamoDBClient(request: Request, response: Response) {
	const query: any = request.query;
	const { email, password } = query; // Extract email and password from the query object
	const result = await returnDynamoDBClient(email, password); // Pass them as separate arguments
	response.send(result);
}
