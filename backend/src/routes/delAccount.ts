import { Request, Response } from "express";
import { delUserAccount } from "../modules/dynamoDB/delUserAccount";
import { UserAccount } from "../modules/dynamoDB/UserAccount";

//function handler() {}; //Declare the handler as an empty function
export async function delAccount(request: Request, response: Response) {
	//Extract user account data from the request body
	const userAccount: UserAccount = request.query as any;


	//Call createUserAccount with the user data
	const result = await delUserAccount(userAccount); 

	//Send response back to the client
	response.send(result);
}
