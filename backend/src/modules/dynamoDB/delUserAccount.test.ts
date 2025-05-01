import { response } from "express";
import { delUserAccount } from "./delUserAccount";

describe(delUserAccount, allTests);

function allTests() {
    it("successfully deletes a user account by email address", async () => {
			//ARRANGE
			const targetEmail = {
				email: "deleteMe@emails.com",
			};

			//ACT
			delUserAccount(targetEmail);

			//ASSERT
			expect(response.statusCode).toBe(200);
		});

	it("successfully deletes an active user account by userID", async () => {
		//ARRANGE
		const accountToDelete = {
			userId: 1001,
			isActive: true,
		};

		//ACT
		delUserAccount(accountToDelete);

		//ASSERT
		expect(response.statusCode).toBe(200);
	});

	it("returns 404 when deleting a user that doesn't exist", async () => {
		//ARRANGE
		const accountToDelete = {
			userId: 9999,
			isActive: true,
		};

		//ACT
		delUserAccount(accountToDelete);

		//ASSERT
		expect(response.statusCode).toBe(404);
	});

	it("returns 400 if input is null", async () => {
		//ARRANGE
		const accountToDelete = null;

		//ACT
		delUserAccount(accountToDelete);

		//ASSERT
		expect(response.statusCode).toBe(400);
	});

	it("returns 409 if account is already inactive", async () => {
		//ARRANGE
		const accountToDelete = {
			userId: 1005,
			isActive: false,
		};

		//ACT
		delUserAccount(accountToDelete);

		//ASSERT
		expect(response.statusCode).toBe(409);
	});
}
