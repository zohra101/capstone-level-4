import { Request, Response } from "express";
import { delUserAccount } from "../modules/dynamoDB/delUserAccount";

//function handler() {}; //Declare the handler as an empty function
export async function delAccount(request: Request, response: Response) {
	//Extract user account data from the request body
	const userAccount: any = request.query;


	//Call createUserAccount with the user data
	const result = await delUserAccount(userAccount); 

	//Send response back to the client
	response.send(result);
}
