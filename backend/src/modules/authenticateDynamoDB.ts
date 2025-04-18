import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";
import {
	region,
	accessKeyId,
	secretAccessKey,
} from "../../.aws/credentials.js";

export async function authenticateDynamoDB(email = "", password = "") {

const apiKey = {
		region: region,
		credentials: {
			accessKeyId: accessKeyId,
			secretAccessKey: secretAccessKey,
		},
	};

	const client = new DynamoDB(apiKey);
	const niceClient = DynamoDBDocument.from(client);

	const request = {
		TableName: "logins",
		Key: { email: "abc@logins.com" },
	};

	const response = await niceClient.get(request);
	const matchingLogin = response.Item;
    if (!matchingLogin) {//Handles undefined error from password field
        console.log("User not found.")
        return false; //Handle user not found
    }
	const isAuthenticated = (password === matchingLogin.password);
	return (`DynamoDB authenticated: ${isAuthenticated}`);
}
