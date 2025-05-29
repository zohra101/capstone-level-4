import dotenv from "dotenv";
dotenv.config(); //Attaches the env variables in .env to the process object

import { GetCommandInput, GetCommandOutput, DeleteCommandInput } from "@aws-sdk/lib-dynamodb";
import { returnDynamoDBClient } from "./returnDynamoDBClient";
import { UserAccount } from "./UserAccount";

export async function delUserAccount(userAccount: UserAccount) {
	if (!userAccount || !userAccount.email) {
		return "Please enter the email address of the account you wish to delete.";
	}

	//Return message if email format is invalid
	const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userAccount.email);
	if (!isEmailValid) {
		console.log("Email is invalid, returning error status.");
		return "Please provide a valid email address.";
	}

	const newClient = returnDynamoDBClient();
	const requestRead: GetCommandInput = {
		//Check if email already exists in DynamoDB
		TableName: "logins",
		Key: { email: userAccount.email },
	};

	const readResult: GetCommandOutput = await newClient.get(requestRead);
	const existingAccount: UserAccount | undefined = readResult.Item as UserAccount;

	//Return message that account does not exist
	if (!existingAccount)
		return "The account you are trying to delete does not exist.";



	const request: DeleteCommandInput = {
		TableName: "logins",
		Key: { email: userAccount.email },
	};

	const response = await newClient.delete(request);

	if (response) return "The account was deleted successfully.";
}
