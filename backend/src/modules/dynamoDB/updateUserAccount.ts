import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument, GetCommandInput } from "@aws-sdk/lib-dynamodb";
import dotenv from "dotenv";


dotenv.config(); //Attaches the env variables in .env to the process object

export async function updateUserAccount(targetEmail: string, targetPassword: string): Promise<UserAccount | undefined> {
    if (typeof targetEmail === "object") return undefined;
    if (targetEmail === undefined || targetPassword === undefined) return undefined;

    const apiKey = {
        region: process.env.region,
        credentials: {
            accessKeyId: process.env.accessKeyId,
            secretAccessKey: process.env.secretAccessKey,
        },
    };
    //Connect to DynamoDB
    const client = new DynamoDB(apiKey);
    const niceClient = DynamoDBDocument.from(client);

    const request: GetCommandInput = {
        TableName: "logins",
        Key: { email: targetEmail },
    };


    const response = await niceClient.get(request);
    let userAccount = response.Item as UserAccount;
    if (userAccount && userAccount.password !== targetPassword)
        userAccount = undefined;

    return userAccount;
}
