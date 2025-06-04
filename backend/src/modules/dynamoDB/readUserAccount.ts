import dotenv from "dotenv";
import { returnDynamoDBClient } from "./returnDynamoDBClient";
import { GetCommandInput } from "@aws-sdk/lib-dynamodb";
import { UserAccount } from "./UserAccount";

dotenv.config();

export async function readUserAccount(
	userAccount: UserAccount
): Promise<UserAccount | string | undefined> {
	
	const request: GetCommandInput = {
		TableName: "logins",
		Key: { email: userAccount.email },
	};

	console.log("Email key being used:", userAccount.email);

	const newClient = returnDynamoDBClient();
	const response = await newClient.get(request);
	const readResult = response.Item as UserAccount;

	// if (!readResult) {
	// 	return "No account was found for the provided email address.";
	// }

	// if (
	// 	readResult.password === "" ||
	// 	readResult.password === null ||
	// 	readResult.password === undefined
	// ) {
	// 	return "No password was found for the provided email address.";
	// }

	// if (
	// 	readResult.name === "" ||
	// 	readResult.name === null ||
	// 	readResult.name === undefined
	// ) {
	// 	return "No name was found for the provided email address.";
	// }

	// if (
	// 	readResult.username === "" ||
	// 	readResult.username === null ||
	// 	readResult.username === undefined
	// ) {
	// 	return "No username was found for the provided email address.";
	// }

	//Add ifMatchingLogin logic
	return readResult;
}
