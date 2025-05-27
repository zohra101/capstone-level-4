import { Request, Response } from "express";
import { readUserAccount } from "../modules/dynamoDB/readUserAccount";
import { authenticateUser } from "../modules/dynamoDB/authenticateUser";

//function handler() {}; //Declare the handler as an empty function
export async function authenticateAws(request: Request, response: Response) {
	// const query: any = request.query;

	const { email, password } = request.body; // Extract email and password from the query object
	console.log("request.body:", request.body);

	let isAuthenticated = await authenticateUser(email, password);

	if (isAuthenticated) {
		//Add the correct userAccount argument to the readUserAccount
		const userAccount: any = request.body;
		const result = await readUserAccount(userAccount); // Pass them as separate arguments
		console.log("Result:", result);

		response.send(result);
	}

	return "Invalid login attempt."
}
