// --- START: Mock window object for testing ---
// This line checks if 'window' is currently undefined.
// It typically will be undefined when running tests in Node.js.
if (typeof global.window === "undefined") {
	// If 'window' is undefined, we create a basic mock version of it.
	// We only include the 'location' property and within that, 'hostname',
	// because that's what your code specifically needs.
	// We're setting the 'hostname' to 'localhost' as a common default for tests.
	// The 'as any' is a TypeScript thing to tell TypeScript that it's okay
	// to add this property to the 'global' object even if its types don't officially declare 'window'.
	global.window = {
		location: {
			hostname: "localhost", // You can change this to 'example.com' or whatever makes sense for your test
		},
	} as any;
}

// --- END: Mock window object for testing ---

// Now, and ONLY now, import the file that uses window.location.hostname.
// It's crucial that the mock above comes *before* this import.

import { createUserAccount } from "./createUserAccount";
import { delUserAccount } from "./delUserAccount";
import { UserAccount } from "./UserAccount";

describe("delUserAccount", allTests);

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
		await createUserAccount(deletedAccount);
	});

	it("returns a message when deleting an account that doesn't exist", async () => {
		//ARRANGE
		const deletedAccount: UserAccount = {
			email: "deleteMe2@emails.com.com",
			password: "Test1234",
		};

		//ACT
		const response = await delUserAccount(deletedAccount);

		//ASSERT
		expect(response).toBe(
			"The account you are trying to delete does not exist."
		);
	});

	it("returns a message if the email format is invalid", async () => {
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

	it("returns a message if the provided user account object is empty", async () => {
		// ARRANGE
		const deletedAccount: any = {};

		// ACT
		const response = await delUserAccount(deletedAccount);

		// ASSERT
		expect(response).toBe(
			"Please enter the email address of the account you wish to delete."
		);
	});

	it("returns a message if the provided user account object has a null email", async () => {
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
