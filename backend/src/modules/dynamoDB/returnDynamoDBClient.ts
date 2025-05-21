import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";

export function returnDynamoDBClient(): DynamoDBDocument {
	const apiKey = {
		region: process.env.region,
		credentials: {
			accessKeyId: process.env.accessKeyId,
			secretAccessKey: process.env.secretAccessKey,
		},
	};

	console.log(apiKey);

	// let newClient = DynamoDBDocument;

	try {
		// Moved from original line 15
		const client = new DynamoDB(apiKey);
		let newClient = DynamoDBDocument.from(client);
		// Moved fron original line 25
		return newClient;
	} catch (error) {
		console.error("Error creating DynamoDBDocument:", error);
		throw error; // Re-throw to see the crash details
	}
}
