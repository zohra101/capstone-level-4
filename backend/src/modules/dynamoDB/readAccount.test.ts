import { readAccount } from "./readAccount";
import dotenv from "dotenv";

dotenv.config(); //Attaches the env variables in .env to the process object

describe(readAccount, allTests);

function allTests() {
	it("returns an email, password, name, and phone when given an existing email", async () => {
		//ARRANGE
		const email = "starfire8152@gmail.com";
		const password = "Cust1234";

		//ACT
		const loginData = await readAccount(email, password);

		//ASSERT
		expect(loginData).toBeDefined();
		expect(loginData.email).toBe(email);
		expect(loginData.password).toBe(password);
		expect(loginData).toHaveProperty("name");
		expect(loginData).toHaveProperty("phone");
	});

	it(" the email in the result is the same as the given email", async () => {
		//ARRANGE
		const email = "starfire8152@gmail.com";
		const password = "Cust1234";

		//ACT
		const loginData = await readAccount(email, password);

		//ASSERT
		expect(loginData).toBeDefined();
		expect(loginData.email).toBe(email);
	});

	it("doesn’t return a result when the email is not in the list", async () => {
		//ARRANGE
		const email = "notlisted@emails.com";
		const password = "Cust1234";

		//ACT
		const loginData = await readAccount(email, password);

		//ASSERT
		expect(loginData).toBeUndefined();
	});

	it("doesn’t return a result when the email is an object", async () => {
		//ARRANGE
		const email = {};
		const password = "Cust1234";
		//ACT
		const loginData = await readAccount(email as any, password);

		//ASSERT
		expect(loginData).toBeUndefined();
	});

	it.only("doesn't return a result when email and password are undefined", async () => {
		//ARRANGE
		const email = undefined;
		const password = undefined;

		//ACT
		const loginData = await readAccount(email, password);

		//ASSERT
		expect(loginData).toBeUndefined();
	});
}
