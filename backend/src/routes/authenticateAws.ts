import { Request, Response } from "express";
import { readUserAccount } from "../modules/dynamoDB/readUserAccount";
import { authenticateUser } from "../modules/dynamoDB/authenticateUser";
import { UserAccount } from "../modules/dynamoDB/UserAccount";

//function handler() {}; //Declare the handler as an empty function
export async function authenticateAws(request: Request, response: Response) {
	const { email, password } = request.body; // Extract email and password from the query object
	console.log("request.body:", request.body);

	let isAuthenticated = await authenticateUser(email, password);

	if (isAuthenticated) {
		const userAccount: UserAccount = request.body; // Assuming request.body has the necessary UserAccount properties
		try {
			const result = await readUserAccount(userAccount);
			console.log("Authentication successful. Result:", result);
			response.status(200).json(result); // Send a 200 OK status with the user account data
		} catch (error) {
			console.error("Error reading user account after authentication:", error);
			response.status(500).send("Error retrieving user account."); // Send a 500 status for server errors
		}
	} else {
		console.log("Authentication failed.");
		response.status(401).send("Invalid login attempt."); // Send a 401 Unauthorized status
	}

	if (isAuthenticated) {
		//Add the correct userAccount argument to the readUserAccount
		const userAccount: UserAccount = request.body;
		const result = await readUserAccount(userAccount); // Pass them as separate arguments
		console.log("Result:", result);

		response.send(result);
	}

}
