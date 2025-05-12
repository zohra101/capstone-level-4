import dotenv from "dotenv";
import path from "path";

const envPath = path.resolve(__dirname, "../../.env");
dotenv.config({ path: envPath });

import { GetCommandInput, DeleteCommandInput} from "@aws-sdk/lib-dynamodb";
import { returnDynamoDBClient } from "./returnDynamoDBClient";
import { UserAccount } from "./UserAccount";

dotenv.config(); //Attaches the env variables in .env to the process object

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

	const readResult = await newClient.get(requestRead);

	//Return message that account does not exist
	const doesEmailExist = readResult.Item !== undefined;

	if (!doesEmailExist)
		return "The account you are trying to delete does not exist.";

	if (readResult.Item.email === "")
		return "No password was found for the provided email address.";

	const request: DeleteCommandInput = {
		TableName: "logins",
		Key: { email: userAccount.email },
	};

	const response = await newClient.delete(request);
	return "The account was deleted successfully.";
}