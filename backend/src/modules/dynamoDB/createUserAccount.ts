import dotenv from "dotenv";
dotenv.config();

import { returnDynamoDBClient } from "./returnDynamoDBClient";
import { GetCommandInput, PutCommandInput } from "@aws-sdk/lib-dynamodb";
import { UserAccount } from "./UserAccount";

// console.log("Test Environment - Region:", process.env.region);
// console.log("Test Environment - Access Key ID:", process.env.accessKeyId);
// console.log(
// 	"Test Environment - Secret Access Key:",
// 	process.env.secretAccessKey
// );

export async function createUserAccount(
	userAccount: UserAccount
): Promise<string> {
	console.log("createUserAccount called with:", userAccount);
	console.log("Email to validate:", userAccount.email);

	const isEmailNullOrEmpty =
		userAccount.email === null || userAccount.email === "";
	if (isEmailNullOrEmpty) {
		console.log("Email is blank, returning error status.");
		return "An email address is required to create an account. Please enter a valid email address.";
	}

	const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userAccount.email);
	if (!isEmailValid) {
		console.log("Email is invalid, returning error status.");
		return "The provided email is not in a valid email format. Please enter a valid email address.";
	}

	const isPasswordNull = userAccount.password === null;
	if (isPasswordNull) {
		console.log("Password is blank, returning error status.");
		return "A password is required to create an account. Please enter a valid email address.";
	}

	const newClient = returnDynamoDBClient();

	const requestRead: GetCommandInput = {
		//Check if email already exists in DynamoDB
		TableName: "logins",
		Key: { email: userAccount.email },
	};

	//Return message that email already exists
	const readResult = await newClient.get(requestRead);
	if (readResult.Item)
		return "An account already exists for this email address.";

	const requestCreate: PutCommandInput = {
		TableName: "logins",
		Item: {
			email: userAccount.email,
			password: userAccount.password,
			username: userAccount.username,
			name: userAccount.name,
			phone: userAccount.phone,
		},
	};

	const response = await newClient.put(requestCreate);
	const isAccountCreated = response.$metadata.httpStatusCode === 200;

	let message: string;

	if (isAccountCreated) message = "Your account was created successfully.";
	return message;
}
