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

	console.log(apiKey)

	const client = new DynamoDB(apiKey);
	let newClient = DynamoDBDocument.from(client);

	try {
		newClient = DynamoDBDocument.from(client);
	} catch (error) {
		console.error("Error creating DynamoDBDocument:", error);
		throw error; // Re-throw to see the crash details
	}

	return newClient;
}
