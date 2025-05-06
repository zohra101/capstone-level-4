import { response } from "express";
import { createUserAccount } from "./createUserAccount";

describe(createUserAccount, allTests);

function allTests() {
	it("creates an account with valid input data", async () => {
		//ARRANGE
		const userAccount: UserAccount = {
			email: "testUser1@emails.com",
			password: "Cust1234",
			username: "testUser1",
			phone: 111111111,
			isActive: true,
		};

		//ACT
		createUserAccount(userAccount);

		//ASSERT
		expect(response.statusCode).toBe(200);
	});

	it("throws an error for an already existing email", async () => {
		//ARRANGE
		const userAccount: UserAccount = {
			email: "starfire8152@gmail.com",
			password: "Cust1234",
			username: "Customer Two",
			phone: 8888888888,
			isActive: true,
		};

		//ACT
		createUserAccount(userAccount);

		//ASSERT
		expect(response.statusCode).toBe(400);
	});

	it("throws an error when the email is missing", async () => {
		//ARRANGE
		const userAccount: UserAccount = {
			email: "",
			password: "Cust1234",
			username: "testUser2",
			phone: 2222222222,
			isActive: true,
		};

		//ACT
		createUserAccount(userAccount);

		//ASSERT
		expect(response.statusCode).toBe(400);
	});

	it("throws an error when the email format is invalid", async () => {
		//ARRANGE
		const userAccount: UserAccount = {
			email: "testUser3emails.com",
			password: "Cust1234",
			username: "testUser3",
			phone: 3333333333,
			isActive: true,
		};

		//ACT
		createUserAccount(userAccount);

		//ASSERT
		expect(response.statusCode).toBe(400);
	});

	it("throws an error when the password is missing", async () => {
		//ARRANGE
		const userAccount: UserAccount = {
			email: "testUser4@emails.com",
			password: "",
			username: "testUser4",
			phone: 4444444444,
			isActive: true,
		};

		//ACT
		createUserAccount(userAccount);

		//ASSERT
		expect(response.statusCode).toBe(400);
	});

	it("throws an error for an already existing username", async () => {
		//ARRANGE
		const userAccount: UserAccount = {
			email: "starfire8152@gmail.com",
			password: "Cust1234",
			username: "Customer Three",
			phone: 999999999,
			isActive: true,
		};

		//ACT
		createUserAccount(userAccount);

		//ASSERT
		expect(response.statusCode).toBe(400);
	});

	it("throws an error when the username is missing", async () => {
		//ARRANGE
		const userAccount: UserAccount = {
			email: "testUser5@emails.com",
			password: "Cust1234",
			username: "",
			phone: 5555555555,
			isActive: true,
		};

		//ACT
		createUserAccount(userAccount);

		//ASSERT
		expect(response.statusCode).toBe(400);
	});

	it.skip("generates a unique userId for each new account", async () => {
		//ARRANGE
		//ACT
		//ASSERT
	});

	it.skip("hashes the password before storing", async () => {
		//ARRANGE
		//ACT
		//ASSERT
	});

	it.skip("sets createdAt to the current date and time", async () => {
		//ARRANGE
		//ACT
		//ASSERT
	});

	it.skip("sets isActive to true by default when not provided", async () => {
		//ARRANGE
		//ACT
		//ASSERT
	});

	it.skip("sets isActive to false when explicitly provided as false", async () => {
		//ARRANGE
		//ACT
		//ASSERT
	});

	it.skip("trims whitespace from the username and email", async () => {
		//ARRANGE
		//ACT
		//ASSERT
	});
}
