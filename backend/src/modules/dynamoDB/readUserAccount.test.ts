import { UserAccount } from "../dynamoDB/UserAccount";
import { readUserAccount } from "./readUserAccount";

describe("readUserAccount", allTests);

function allTests() {
	it("the object has the properties password, name, usrname, phone, and isActive when given an existing valid email and valid password", async () => {
		//ARRANGE
		const userAccount: UserAccount= {
			email: "starfire8152@gmail.com",
			password: "Cust1234",
		} as any;

		//ACT
		const response = await readUserAccount(userAccount);

		//ASSERT
		expect(response).toHaveProperty("password");
		expect(response).toHaveProperty("name");
		expect(response).toHaveProperty("username");
		expect(response).toHaveProperty("phone");
		expect(response).toHaveProperty("isActive");
	});

	it("returns a message when the email is not in the table", async () => {
		//ARRANGE
		const userAccount: UserAccount = {
			email: "noemail@logins.com",
			password: undefined,
		} as any;

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
		} as any;

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
		} as any;

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
		} as any;

		//ACT
		const response = await readUserAccount(userAccount);

		//ASSERT
		expect(response).toBe(
			"No username was found for the provided email address."
		);
	});
}
