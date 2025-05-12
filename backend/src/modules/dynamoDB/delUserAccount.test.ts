
import { delUserAccount } from "./delUserAccount";
import { UserAccount } from "./UserAccount";

describe(delUserAccount, allTests);

function allTests() {
    it("successfully deletes a user account by email address", async () => {
			//ARRANGE
			const deletedAccount: UserAccount = {
				email: "deleteMe1@emails.com",
				password: "Test1234",
			};

			//ACT
			const response = await delUserAccount(deletedAccount);

			//ASSERT
			expect(response).toBe("The account was deleted successfully.");
		});

	it("returns error when deleting an account that doesn't exist", async () => {
		//ARRANGE
		const deletedAccount: UserAccount = {
			email: "deleteMe2@emails.com.com",
			password: "Test1234",
		};

		//ACT
		const response = await delUserAccount(deletedAccount);

		//ASSERT
		expect(response).toBe("The account you are trying to delete does not exist.");
	});


	it("returns an error if the email format is invalid", async () => {
		// ARRANGE
		const deletedAccount: UserAccount = {
			email: "notvaldiemail",
			password: "Test1234",
		};

		// ACT
		const response = await delUserAccount(deletedAccount);

		// ASSERT
		expect(response).toBe("Please provide a valid email address.");
	});

	it("returns an error if the provided user account object is empty", async () => {
		// ARRANGE
		const deletedAccount: UserAccount = {};

		// ACT
		const response = await delUserAccount(deletedAccount);

		// ASSERT
		expect(response).toBe(
			"Please enter the email address of the account you wish to delete."
		);
	});

	it("returns an error if the provided user account object has a null email", async () => {
		// ARRANGE
		const deletedAccount: UserAccount = {
			email: null,
			password: "Test1234",
		};

		// ACT
		const response = await delUserAccount(deletedAccount);

		// ASSERT
		expect(response).toBe(
			"Please enter the email address of the account you wish to delete."
		);
	});

}
