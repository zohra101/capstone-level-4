import { UserAccount } from "./userAccount";
import { createUserAccount } from "./createUserAccount";

describe("createUserAccount", allTests);

function allTests() {
	it("creates an account with valid input data", async () => {
		//ARRANGE
		const userAccount: UserAccount = {
			email: "testUser25@emails.com",
			password: "Cust1234",
			username: "testUser25",
			name: "Customer 25",
			phone: 111111111,
		};

		//ACT
		const response = await createUserAccount(userAccount);

		//ASSERT
		expect(response).toBe("Your account was created successfully.");
	});

	it("returns a message for an already existing email", async () => {
		//DyhnamoDB is returning 200 even though the email exists in the logins table. Is there way to prevent duplicate values in the DynamoDB settings?
		//ARRANGE
		const userAccount: UserAccount = {
			email: "starfire8152@gmail.com",
			password: "Cust1234",
			username: "custTwo",
			name: "Customer Two",
			phone: 8888888888,
		};

		//ACT
		const response = await createUserAccount(userAccount);

		//ASSERT
		expect(response).toBe("An account already exists for this email address.");
	});

	it("throws an error when the email is missing", async () => {
		//ARRANGE
		const userAccount: UserAccount = {
			email: null,
			password: "Cust1234",
			username: "custTwo",
			name: "Customer Two",
			phone: 2222222222,
		};

		//ACT
		const response = await createUserAccount(userAccount);

		//ASSERT
		expect(response).toBe(
			"An email address is required to create an account. Please enter a valid email address."
		);
	});

	it("throws an error when the email format is invalid", async () => {
		//This test does not work with DynamoDB. DynamoDB stores the value as is. The createUserAccount function needs to catch the error.
		//ARRANGE
		const userAccount: UserAccount = {
			email: "testUser3emails.com",
			password: "Cust1234",
			username: "testUser3",
			name: "Customer Two",
			phone: 3333333333,
		};

		//ACT
		const response = await createUserAccount(userAccount);
		console.log("Response from createUserAccount:", response);

		//ASSERT
		expect(response).toBe(
			"The provided email is not in a valid email format. Please enter a valid email address."
		);
	});

	it("throws an error when the password is missing", async () => {
		//ARRANGE
		const userAccount: UserAccount = {
			email: "testUser4@emails.com",
			password: null,
			username: "testUser4",
			name: "Customer Two",
			phone: 4444444444,
		};

		//ACT
		const response = await createUserAccount(userAccount);

		//ASSERT
		expect(response).toBe(
			"A password is required to create an account. Please enter a valid email address."
		);
	});
}
