import dotenv from "dotenv";
import path from "path";

const envPath = path.resolve(__dirname, "../../.env");
dotenv.config({ path: envPath });

import { returnDynamoDBClient } from "./returnDynamoDBClient";
import { UserAccount } from "./userAccount";
import { GetCommandInput, UpdateCommandInput } from "@aws-sdk/lib-dynamodb";

dotenv.config(); //Attaches the env variables in .env to the process object

export async function updateUserAccount(
	userAccount: UserAccount
): Promise<UserAccount | string> {
	console.log("updateUserAccount called with:", userAccount);
	console.log("Email to validate:", userAccount.email);

	const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userAccount.email);
	if (!isEmailValid) {
		console.log("Email is invalid, returning error status.");
		return "The provided email is not in a valid email format. Please enter a valid email address.";
	}

	const newClient = returnDynamoDBClient();
	const requestRead: GetCommandInput = {
		//Check if email already exists in DynamoDB
		TableName: "logins",
		Key: { email: userAccount.email },
	};
	const readResult = await newClient.get(requestRead);

	//Return message that account does not exist
	const doesEmailExist = readResult.Item;
	if (!doesEmailExist)
		return "No record was found for this email address. An account must be created before it can be updated.";

	//Return error if password is incorrect
	const isPasswordCorrect = readResult.Item.password === userAccount.password;
	if (!isPasswordCorrect)
		return "The password provided is not valid for this account.";

	//Return error if username is entered because it should never be updated
	const isUsernameEntered = userAccount.username !== undefined;

	if (isUsernameEntered)
		return "Usernames cannot be changed. The username field should not be populated.";

	//Update account information
	const request: UpdateCommandInput = {
		TableName: "logins",
		Key: { email: userAccount.email },
		AttributeUpdates: {
			name: { Value: userAccount.name },
			phone: { Value: userAccount.phone },
		},
	};

	await newClient.update(request);
	return "Your account updated successfully.";
}
