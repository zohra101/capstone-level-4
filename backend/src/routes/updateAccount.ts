import { Request, Response } from "express";
import {  } from "../modules/dynamoDB/createUserAccount";
import { updateUserAccount } from "../modules/dynamoDB/updateUserAccount";

//function handler() {}; //Declare the handler as an empty function
export async function updateAccount(request: Request, response: Response) {
	//Extract user account data from the request body
	const userAccount = request.body;

	//Call createUserAccount with the user data
	const result = await updateUserAccount(userAccount); 

	//Send response back to the client
	response.send(result);
}
