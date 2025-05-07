import { response } from "express";
import { updateUserAccount } from "./updateUserAccount";

describe(updateUserAccount, allTests);

function allTests() {
	it("updates an account with valid input data", async () => {
		//ARRANGE
		const updatedAccount: UserAccount = {
			email: "updatedUser@emails.com",
			password: "NewPass123",
			username: "Was ABC",
			phone: 6666666666,
	
			isActive: true,
		};

		//ACT
		updateUserAccount(updatedAccount);

		//ASSERT
		expect(response.statusCode).toBe(200);
	});

	it("throws an error for updating non-existing userId", async () => {
		//ARRANGE
		const updatedAccount: UserAccount = {
			email: "nonexistent@emails.com",
			password: "Pass999",
			username: "ghostUser",
			phone: 9999999999,
			isActive: true,
		};

		//ACT
		updateUserAccount(updatedAccount);

		//ASSERT
		expect(response.statusCode).toBe(404);
	});

	it("throws an error for duplicate email", async () => {
		//ARRANGE
		const updatedAccount: UserAccount = {
			email: "starfire8152@gmail.com", // already exists
			password: "Update123",
			username: "anotherUser",
			phone: 7777777777,
			isActive: true,
		};

		//ACT
		updateUserAccount(updatedAccount);

		//ASSERT
		expect(response.statusCode).toBe(400);
	});

	it("throws an error for missing username", async () => {
		//ARRANGE
		const updatedAccount: UserAccount = {
			email: "testUserUpdate@emails.com",
			password: "Test1234",
			username: "",
			phone: 6666666666,
			isActive: true,
		};

		//ACT
		updateUserAccount(updatedAccount);

		//ASSERT
		expect(response.statusCode).toBe(400);
	});

	it("throws an error for invalid email format", async () => {
		//ARRANGE
		const updatedAccount: UserAccount = {
			email: "bademailformat.com",
			password: "Test1234",
			username: "validUser",
			phone: 5555555555,
			isActive: true,
		};

		//ACT
		updateUserAccount(updatedAccount);

		//ASSERT
		expect(response.statusCode).toBe(400);
	});
}
