import { describe, it, expect } from "@jest/globals";
import { DynamoDB } from "@aws-sdk/client-dynamodb";
import {region, accessKeyId, secretAccessKey } from "../../../.aws/js";

//AWS Region Testing

describe("The authenticationAws function region", () => {
	it("connects when the region is correct", async () => {
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

		//ASSERT
		expect(client.isConnected).toBe(true);
	});

	it("doesn't connect when the region is wrong", async () => {
		//ARRANGE
		const apiKey = {
			region: "ap-south-1",
			credentials: {
				accessKeyId: accessKeyId,
				secretAccessKey: secretAccessKey,
			},
		};

		//ACT
		const client = new DynamoDB(apiKey);

		//ASSERT
		expect(client.isConnected).toBe(false);
	});

	it("doesn't connect when the region is empty", async () => {
		//ARRANGE
		const apiKey = {
			region: "",
			credentials: {
				accessKeyId: accessKeyId,
				secretAccessKey: secretAccessKey,
			},
		};

		//ACT
		const client = new DynamoDB(apiKey);

		//ASSERT
		expect(client.isConnected).toBe(false);
	});
});

//AWS Access Key ID Testing

describe("The authenticationAws function accessKeyId", () => {
	it("connects when the access key is correct", async () => {
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

		//ASSERT
		expect(client.isConnected).toBe(true);
	});
	it("doesn't connect when the access key is wrong", async () => {
		//ARRANGE
		const apiKey = {
			region: region,
			credentials: {
				accessKeyId: "1234",
				secretAccessKey: secretAccessKey,
			},
		};

		//ACT
		const client = new DynamoDB(apiKey);

		//ASSERT
		expect(client.isConnected).toBe(false);
	});
	it("doesn't connect when the access key is empty", async () => {
		//ARRANGE
		const apiKey = {
			region: region,
			credentials: {
				accessKeyId: "",
				secretAccessKey: secretAccessKey,
			},
		};

		//ACT
		const client = new DynamoDB(apiKey);

		//ASSERT
		expect(client.isConnected).toBe(false);
	});
	// it("doesn't connect when the access key is a number", async () => {});
	// it("doesn't connect when the access key is a boolean", async () => {});
	// it("doesn't connect when the access key is a object", async () => {});
});

//AWS API Key Testing

describe("The authenticationAws function apiKey", () => {
	it("connects when the api key is correct", async () => {
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

		//ASSERT
		expect(client.isConnected).toBe(true);
	});

	it("doesn't connect when the api key is wrong", async () => {
		//ARRANGE
		const apiKey = {
			region: region,
			credentials: {
				accessKeyId: accessKeyId,
				secretAccessKey: "secretAccessKey2",
			},
		};

		//ACT
		const client = new DynamoDB(apiKey);


		//ASSERT
		expect(client.isConnected).toBe(false);
	});
	
	it("doesn't connect when the api key is empty", async () => {
		//ARRANGE
		const apiKey = {
			region: region,
			credentials: {
				accessKeyId: accessKeyId,
				secretAccessKey: "",
			},
		};

		//ACT
		const client = new DynamoDB(apiKey);

		//ASSERT
		expect(client.isConnected).toBe(false);
	});
	// it("doesn't connect when the api key is a number", async () => {});
	// it("doesn't connect when the api key is a boolean", async () => {});
	// it("doesn't connect when the api key is a object", async () => {});
});

describe