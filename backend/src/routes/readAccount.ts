import { Request, Response } from "express";
import { readUserAccount } from "../modules/dynamoDB/readUserAccount";
import { UserAccount } from "../modules/dynamoDB/userAccount";

//function handler() {}; //Declare the handler as an empty function
export async function readAccount(request: Request, response: Response) {
	const userAccount: any = request.query;
	const result = await readUserAccount(userAccount as UserAccount);
	response.send(result);
}
