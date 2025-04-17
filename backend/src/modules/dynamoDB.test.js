import { authenticateDynamoDB } from "./authenticateDynamoDB";
import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";
import {
	region,
	accessKeyId,
	secretAccessKey,
} from "../../.aws/credentials";

describe(authenticateDynamoDB, allTests);

function allTests() {
	it("receives a response from DynamoDB", async () => {
		//ARRANGE
		const apiKey = {
			region: region,
			credentials: {
				accessKeyId: accessKeyId,
				secretAccessKey: secretAccessKey,
			},
		};

		//ACT
		const client = new DynamoDB(apiKey);
		const niceClient = DynamoDBDocument.from(client);

		const request = {
			TableName: "logins",
			Key: { email: "abc@logins.com" },
		};

		const response = await niceClient.get(request);
        	const result = response.Item;

		//ASSERT
		expect(result).toBeDefined();
	});

	it("authenticates with DynamoDB", async () => {
		//ARRANGE
		const apiKey = {
			region: region,
			credentials: {
				accessKeyId: accessKeyId,
				secretAccessKey: secretAccessKey,
			},
		};

		//ACT
		const client = new DynamoDB(apiKey);
		const niceClient = DynamoDBDocument.from(client);

		const request = {
			TableName: "logins",
			Key: { email: "abc@logins.com" },
		};

		const response = await niceClient.get(request);

		if (!matchingLogin) {
			//Handles undefined error from password field
			console.log("User not found.");
			return false; //Handle user not found
		}
		const isAuthenticated = (password = matchingLogin.password);

		//ASSERT
        expect(isAuthenticated).toBe(true);
	});
}
