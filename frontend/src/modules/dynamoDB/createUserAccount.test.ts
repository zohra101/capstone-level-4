import { createUserAccount } from "./createUserAccount";
import { UserAccount } from "./UserAccount";

describe("createUserAccount", allTests);

function allTests() {
	it("creates an account with valid input data", async () => {
		//ARRANGE
		const userAccount: UserAccount = {
			email: "testUser123@emails.com",
			password: "Cust1234",
			username: "testUser101",
			phone: 111111111,
		};

		//ACT
		const response = await createUserAccount(userAccount);

		//ASSERT
		expect(response).toBe("Your account was created successfully.");
	});

	it("returns a message when an account already exists for the email", async () => {
		//ARRANGE
		const userAccount: UserAccount = {
			email: "starfire8152@gmail.com",
			password: "Cust1234",
		};

		//ACT
		const response = await createUserAccount(userAccount);

		//ASSERT
		expect(response).toBe("An account already exists for this email address.");
	});

	it("nothing happens when the email is missing", async () => {
		//ARRANGE
		const userAccount: UserAccount = {
			email: null,
			password: "Cust1234"
		};

		//ACT
		const response = await createUserAccount(userAccount);

		//ASSERT
		expect(response).toBe(
			"An email address is required to create an account. Please enter a valid email address."
		);
	});

	it("returns a message when the email format is invalid", async () => {
		//ARRANGE
		const userAccount: UserAccount = {
			email: "testUser3emails.com",
			password: "Cust1234",
		};

		//ACT
		const response = await createUserAccount(userAccount);

		//ASSERT
		expect(response).toBe(
			"The provided email is not in a valid email format. Please enter a valid email address."
		);
	});

	it("returns a message when the password is missing", async () => {
		//ARRANGE
		const userAccount: UserAccount = {
			email: "testUser46@emails.com",
			password: null,
		};

		//ACT
		const response = await createUserAccount(userAccount);

		//ASSERT
		expect(response).toBe(
			"A password is required to create an account. Please enter a valid password."
		);
	});

}
