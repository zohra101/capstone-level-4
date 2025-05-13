import { Request, Response } from "express";
import { readUserAccount } from "../modules/dynamoDB/readUserAccount";
import { UserAccount } from "../modules/dynamoDB/userAccount";

//function handler() {}; //Declare the handler as an empty function
export async function readAccount(request: Request, response: Response) {
	debugger;
	//Extract user account data from the request
	const userAccount: any = request.query;

	//Call readUserAccount with the user data
	const result = await readUserAccount(userAccount as UserAccount);

	//Send response back to the client
	response.send(result);
}

