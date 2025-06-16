import { Request, Response } from "express";
import { readUserAccount } from "../modules/dynamoDB/readUserAccount";
import { UserAccount } from "../modules/dynamoDB/UserAccount";


//function handler() {}; //Declare the handler as an empty function
export async function readAccount(request: Request, response: Response) {
	//Extract user account data from the request
	// const userAccount: UserAccount = request.query as any;
	const userAccount: UserAccount = request.body as any;

	//Call readUserAccount with the user data
	const result = await readUserAccount(userAccount as UserAccount);

	//Send response back to the client
	response.send(result);
}

