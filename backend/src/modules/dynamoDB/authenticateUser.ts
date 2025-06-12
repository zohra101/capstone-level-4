import { GetCommandInput, GetCommandOutput } from "@aws-sdk/lib-dynamodb";
import { readUserAccount } from "./readUserAccount";
import { returnDynamoDBClient } from "./returnDynamoDBClient";
import { UserAccount } from "./UserAccount";

export async function authenticateUser(userEmail: string, userPassword: string)
: Promise<boolean> {
const newClient = returnDynamoDBClient();
	const requestRead: GetCommandInput = {
		//Check if email already exists in DynamoDB
		TableName: "logins",
		Key: { email: userEmail },
	};
	const readResult: GetCommandOutput = await newClient.get(requestRead);
	const existingAccount: UserAccount | undefined = readResult.Item as UserAccount;


	// If result is a string (error message) or undefined, authentication fails
	if (typeof existingAccount === "string" || existingAccount === undefined) {
		return false;
	}

	// Confirm password match
	const isPasswordCorrect = userPassword === existingAccount.password;

	return isPasswordCorrect;
}