import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";
import dotenv from "dotenv";

dotenv.config(); //Attaches the env variables in .env to the process object

export async function authenticateDynamoDB(email = "", password = "") {
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
		Key: { email: email },
	};

	const response = await niceClient.get(request);
	const matchingLogin = response.Item;
	if (!matchingLogin) {
		//Handles undefined error from password field
		console.log("User not found.");
		return false; //Handle user not found
	}

	// In authenticateDynamoDB.ts
	console.log("Attempting to connect to DynamoDB with region:", apiKey.region);
	console.log("Querying DynamoDB with email:", email);
	console.log("DynamoDB Response:", response);
	console.log("Matching Login Item:", matchingLogin);


	const isAuthenticated = password === matchingLogin.password;
	return isAuthenticated;
}
