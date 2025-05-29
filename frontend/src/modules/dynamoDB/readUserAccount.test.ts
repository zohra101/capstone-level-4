
// --- START: Mock window object for testing ---
// This line checks if 'window' is currently undefined.
// It typically will be undefined when running tests in Node.js.
if (typeof global.window === 'undefined') {
	// If 'window' is undefined, we create a basic mock version of it.
	// We only include the 'location' property and within that, 'hostname',
	// because that's what your code specifically needs.
	// We're setting the 'hostname' to 'localhost' as a common default for tests.
	// The 'as any' is a TypeScript thing to tell TypeScript that it's okay
	// to add this property to the 'global' object even if its types don't officially declare 'window'.
	global.window = {
	  location: {
		hostname: 'localhost', // You can change this to 'example.com' or whatever makes sense for your test
	  },
	} as any;
  }

  // --- END: Mock window object for testing ---
  
  // Now, and ONLY now, import the file that uses window.location.hostname.
  // It's crucial that the mock above comes *before* this import.

  import { UserAccount } from "./UserAccount";
  import { readUserAccount } from "./readUserAccount";

describe("readUserAccount", allTests);

function allTests() {
	it("the object has the properties password, name, username, and phone, when given an existing valid email and valid password", async () => {
		//ARRANGE
		const userAccount: UserAccount = {
			email: "starfire8152@gmail.com",
			password: "Cust1234",
		};

		//ACT
		const response = await readUserAccount(userAccount);

		//ASSERT
		expect(response).toHaveProperty("email");
		expect(response).toHaveProperty("password");
		expect(response).toHaveProperty("name");
		expect(response).toHaveProperty("username");
		expect(response).toHaveProperty("phone");
	});

	it("returns a message when the email is not in the table", async () => {
		//ARRANGE
		const userAccount: UserAccount = {
			email: "noemail@logins.com",
			password: undefined,
		};

		//ACT
		const response = await readUserAccount(userAccount);

		//ASSERT
		expect(response).toBe(
			"No account was found for the provided email address."
		);
	});

	it("returns a message when the password is not in the table", async () => {
		//ARRANGE
		const userAccount: UserAccount = {
			email: "def@logins.com",
			password: undefined,
		};

		//ACT
		const response = await readUserAccount(userAccount);

		//ASSERT
		expect(response).toBe(
			"No password was found for the provided email address."
		);
	});

	it("returns a message when the name is not in the table", async () => {
		//ARRANGE
		const userAccount: UserAccount = {
			email: "testUser24@emails.com",
			password: "Cust1234",
		};

		//ACT
		const response = await readUserAccount(userAccount);

		//ASSERT
		expect(response).toBe("No name was found for the provided email address.");
	});

	it("returns a message when the username is not in the table", async () => {
		//ARRANGE
		const userAccount: UserAccount = {
			email: "alex.marjanovic.ba.tw@gmail.com",
			password: "Main1234@",
		};

		//ACT
		const response = await readUserAccount(userAccount);

		//ASSERT
		expect(response).toBe(
			"No username was found for the provided email address."
		);
	});
}
