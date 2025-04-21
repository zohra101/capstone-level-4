import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";
import dotenv from "dotenv";

dotenv.config(); //Attaches the env variables in .env to the process object

export async function returnDynamoDBClient(email: string, password: string) {
	const apiKey = {
		region: process.env.region,
		credentials: {
			accessKeyId: process.env.accessKeyId,
			secretAccessKey: process.env.secretAccessKey,
		},
	};

	const client = new DynamoDB(apiKey);
	const niceClient = DynamoDBDocument.from(client);

	const request = {
		TableName: "logins",
		Key: {
			email: email,
		},
	};

	const response = await niceClient.get(request);
	const loginData = response.Item;

	if (!loginData.password) {
		//Handles undefined error from password field
		console.log("User not found.");
		return false; //Handle user not found
	}

	return loginData;
}
