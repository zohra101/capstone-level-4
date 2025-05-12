import { readUserAccount } from "./readUserAccount";
import { UserAccount } from "./UserAccount";

//The function should communicate with the backend.
//The backend retrieves an account from DynamoDB
//The frontend returns the response from the backend. 
//Ok to return a modified result. 
//Write at least 5 tests. 
//Code the function according to the test specifications. 
//Assert the function return type.
//Assert the datatype of the function parameter(s).


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
