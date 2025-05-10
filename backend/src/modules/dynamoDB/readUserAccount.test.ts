import { UserAccount } from "./UserAccount";
import { readUserAccount } from "./readUserAccount";

describe("readUserAccount", allTests);

function allTests() {
	it("the object has the properties password, name, usrname, phone, and isActive when given an existing email", async () => {
		//ARRANGE
		const targetEmail: string = "abc@logins.com"

		//ACT
		const response = await readUserAccount(targetEmail);


		//ASSERT
		expect(response).toHaveProperty("password");
		expect(response).toHaveProperty("name");
		expect(response).toHaveProperty("username");
		expect(response).toHaveProperty("phone");
		expect(response).toHaveProperty("isActive");
	});

	it("returns a message when the email is not in the table", async () => {
		//ARRANGE
		const targetEmail: string = "noemail@logins.com";

		//ACT
		const response = await readUserAccount(targetEmail);

		//ASSERT
		expect(response).toBe("No account was found for the provided email address.");
	});

	
	it("returns a message when the password is not in the table", async () => {
		//ARRANGE
		const targetEmail: string = "def@logins.com";

		//ACT
		const response = await readUserAccount(targetEmail);

		//ASSERT
		expect(response).toBe(
			"No password was found for the provided email address."
		);
	});

	it("returns a message when the name is not in the table", async () => {
		//ARRANGE
		const targetEmail: string = "testUser24@emails.com";

		//ACT
		const response = await readUserAccount(targetEmail);

		//ASSERT
		expect(response).toBe(
			"No name was found for the provided email address."
		);
	});

	it("returns a message when the username is not in the table", async () => {
		//ARRANGE
		const targetEmail: string = "alex.marjanovic.ba.tw@gmail.com";

		//ACT
		const response = await readUserAccount(targetEmail);

		//ASSERT
		expect(response).toBe("No username was found for the provided email address.");
	});
}
