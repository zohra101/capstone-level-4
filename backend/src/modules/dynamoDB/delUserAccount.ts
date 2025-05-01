import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DeleteCommandInput, DynamoDBDocument } from "@aws-sdk/lib-dynamodb";
import dotenv from "dotenv";

dotenv.config(); //Attaches the env variables in .env to the process object

export async function delUserAccount(targetEmail: string) {
	const apiKey = {
		region: process.env.region,
		credentials: {
			accessKeyId: process.env.accessKeyId,
			secretAccessKey: process.env.secretAccessKey,
		},
	};

	const client = new DynamoDB(apiKey);
	const niceClient = DynamoDBDocument.from(client);

	const request: DeleteCommandInput = {
		TableName: "logins",
		Key: { email: targetEmail },
	};

	const response = await niceClient.delete(request);
	debugger;
	return response;
}
''