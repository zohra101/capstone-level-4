import { Request, Response } from "express";
import { createUserAccount } from "../modules/dynamoDB/createUserAccount";
import { UserAccount } from "../modules/dynamoDB/userAccount";

//function handler() {}; //Declare the handler as an empty function
export async function createAccount(request: Request, response: Response) {
	//Extract user account data from the request
	const userAccount: any = request.query;

	//Call createUserAccount with the user data
	const result = await createUserAccount(userAccount as UserAccount);

	//Send response back to the client
	response.send(result);
}
