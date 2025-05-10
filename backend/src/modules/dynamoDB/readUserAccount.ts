import dotenv from "dotenv";
import path from "path";

const envPath = path.resolve(__dirname, "../../.env");
dotenv.config({ path: envPath });

import { returnDynamoDBClient } from "./returnDynamoDBClient";
import { GetCommandInput } from "@aws-sdk/lib-dynamodb";
import { UserAccount } from "./UserAccount";

export async function readUserAccount(targetEmail: string): Promise<UserAccount | string | undefined> {
	const request: GetCommandInput = {
		TableName: "logins",
		Key: { email: targetEmail },
	};

	const newClient = returnDynamoDBClient();
	const response = await newClient.get(request);
	const userAccount = response.Item as UserAccount | undefined;

	if (!userAccount) {
		return "No account was found for the provided email address.";
	}

	if (
		userAccount.password === "" ||
		userAccount.password === null ||
		userAccount.password === undefined
	) {
		return "No password was found for the provided email address.";
	}

	if (
		userAccount.name === "" ||
		userAccount.name === null ||
		userAccount.name === undefined
	) {
		return "No name was found for the provided email address.";
	}

	if (
		userAccount.username === "" ||
		userAccount.username === null ||
		userAccount.username === undefined
	) {
		return "No username was found for the provided email address.";
	}

	return userAccount;
}
