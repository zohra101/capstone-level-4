import { Request, Response } from "express";
import { createUserAccount } from "../modules/dynamoDB/createUserAccount";

//function handler() {}; //Declare the handler as an empty function
export async function createAccount(request: Request, response: Response) {
	// Extract user account data from the request body
	const userAccount = request.body;

	// Call createUserAccount with the user data
	const result = await createUserAccount(userAccount); 

	// Send response back to the client
	response.send(result);
}
