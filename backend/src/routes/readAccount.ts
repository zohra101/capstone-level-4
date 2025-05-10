import { Request, Response } from "express";
import { readUserAccount } from "../modules/dynamoDB/readUserAccount";
import { UserAccount } from "../modules/dynamoDB/UserAccount";


//function handler() {}; //Declare the handler as an empty function
export async function readAccount(request: Request, response: Response) {
	// Call readUserAccount with the user data
	const userAccount: UserAccount = request.query as unknown as UserAccount;

	const targetEmail = request.query.email as string; 
	// const targetPassword = request.query.password as string;

	const result = await readUserAccount(targetEmail);
	
	response.send(result);
}
