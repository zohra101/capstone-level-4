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

import { updateUserAccount } from "./updateUserAccount";
import { UserAccount } from "./UserAccount";

describe("updateUserAccount", allTests);

function allTests() {
	it("updates an account with valid input data", async () => {
		//ARRANGE
		const updatedAccount: UserAccount = {
			email: "starfire8152@gmail.com",
			password: "Cust1234",
			name: "Updated Name",
			phone: 555555555,
		};

		//ACT
		const response = await updateUserAccount(updatedAccount);

		//ASSERT
		expect(response).toBe("Your account updated successfully.");
	});

	it("returns a message for updating non-existing email address", async () => {
		//ARRANGE
		const updatedAccount: UserAccount = {
			email: "nonexistent@emails.com",
			password: "Pass999",
			username: "ghostUser",
			name: "Update Name",
			phone: 3333333333,
		};

		//ACT
		const response = await updateUserAccount(updatedAccount);

		//ASSERT
		expect(response).toBe(
			"No record was found for this email address. An account must be created before it can be updated."
		);
	});

	it("returns a message if password is incorrect", async () => {
		//ARRANGE
		const updatedAccount: UserAccount = {
			email: "starfire8152@gmail.com", // already exists
			password: "WrongPass123",
			phone: 7777777777,
		};

		//ACT
		const response = await updateUserAccount(updatedAccount);

		//ASSERT
		expect(response).toBe(
			"The credentials provided are not valid for this account."
		);
	});

	it.skip("returns a message if user tries to update username", async () => {
		//ARRANGE
		const updatedAccount: UserAccount = {
			email: "starfire8152@gmail.com",
			password: "Cust1234",
			username: "Update User Name",
		};

		//ACT
		const response = await updateUserAccount(updatedAccount);

		//ASSERT
		expect(response).toBe(
			"Usernames cannot be changed. The username field should not be populated."
		);
	});

	it("returns a message for invalid email format", async () => {
		//ARRANGE
		const updatedAccount: UserAccount = {
			email: "bademailformat.com",
			password: "Test1234",
		};

		//ACT
		const response = await updateUserAccount(updatedAccount);

		//ASSERT
		expect(response).toBe(
			"The provided email is not in a valid email format. Please enter a valid email address."
		);
	});
}
