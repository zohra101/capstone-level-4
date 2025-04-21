import { authenticateDynamoDB } from "./authenticateDynamoDB";
import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";
import { region, accessKeyId, secretAccessKey } from "../../.aws/credentials";

describe(authenticateDynamoDB, allTests);

function allTests() {
	it("should not throw an error on import", () => {
		expect(true).toBe(true); // A basic assertion to make the test run
	});

	it("receives a response from DynamoDB", async () => {
		//ARRANGE
		const email = "starfire8152@gmail.com";
		const password = "Cust1234##";

		//ACT
		const loginData = await readAccount(email, password);

		//ASSERT
		expect(result).toBeDefined();
	});

	it("authenticates with DynamoDB", async () => {
		//ARRANGE
		const email = "starfire8152@gmail.com";
		const password = "Cust1234##";


		//ACT
		const loginData = await readAccount(email, password);

		if (!matchingLogin) {
			//Handles undefined error from password field
			console.log("User not found.");
			return false; //Handle user not found
		}

		const isAuthenticated = password === matchingLogin.password;

		//ASSERT
		expect(isAuthenticated).toBe(true);
	});
}
