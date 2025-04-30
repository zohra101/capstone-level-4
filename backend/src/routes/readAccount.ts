import { Request, Response } from "express";
import { readUserAccount } from "../modules/dynamoDB/readUserAccount";

//function handler() {}; //Declare the handler as an empty function
export async function readAccount(request: Request, response: Response) {
	//Extract user account data from the request body
	const email = request.query.email as string;
	const password = request.query.password as string;

	// Call readUserAccount with the user data
	const result: UserAccount = await readUserAccount(email, password);

	//Send response back to the client
	response.send(result);
}
