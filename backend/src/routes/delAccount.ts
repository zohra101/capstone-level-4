import { Request, Response } from "express";
import { delUserAccount } from "../modules/dynamoDB/delUserAccount";
import { UserAccount } from "../modules/dynamoDB/UserAccount";

//function handler() {}; //Declare the handler as an empty function
export async function delAccount(request: Request, response: Response) {
	// Destructure emailToSend and passwordToSend from the request body
	const { emailToSend, passwordToSend } = request.body;

	// Map the frontend  to backend UserAccount type 
	const userAccount: UserAccount = {
		email: emailToSend,
		password: passwordToSend
	};

	//Call createUserAccount with the user data
	const result = await delUserAccount(userAccount);

	//Send response back to the client
	response.send(result);
}
