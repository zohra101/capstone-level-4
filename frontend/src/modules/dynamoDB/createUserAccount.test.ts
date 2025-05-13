import { createUserAccount } from "./createUserAccount";
import { UserAccount } from "./UserAccount";

describe("createUserAccount", allTests);

function allTests() {
	it("creates an account with valid input data", async () => {
		//ARRANGE
		const userAccount: UserAccount = {
			email: "testUser101@emails.com",
			password: "Cust1234",
			username: "testUser101",
			phone: 111111111,
		};

		//ACT
		const response = await createUserAccount(userAccount);

		//ASSERT
		expect(response.status).toBe("Your account was created successfully.");
	});

	it("throws an error for an already existing email", async () => {
		//ARRANGE
		const userAccount: UserAccount = {
			email: "starfire8152@gmail.com",
			password: "Cust1234",
			username: "Customer Two",
			phone: 8888888888,
		};

		//ACT
		const response = await createUserAccount(userAccount);

		//ASSERT
		expect(response.status).toBe(
			"An account already exists for this email address."
		);
	});

	it("throws an error when the email is missing", async () => {
		//ARRANGE
		const userAccount: UserAccount = {
			email: null,
			password: "Cust1234",
			username: "testUser2",
			phone: 2222222222,
		};

		//ACT
		const response = await createUserAccount(userAccount);

		//ASSERT
		expect(response.status).toBe(
			"A required field is missing. Please check you entries for blank fields."
		);
	});

	it("throws an error when the email format is invalid", async () => {
		//ARRANGE
		const userAccount: UserAccount = {
			email: "testUser3emails.com",
			password: "Cust1234",
			username: "testUser3",
			phone: 3333333333,
		};

		//ACT
		const response = await createUserAccount(userAccount);

		//ASSERT
		expect(response.status).toBe(
			"The provided email is not in a valid email format."
		);
	});

	it("throws an error when the password is missing", async () => {
		//ARRANGE
		const userAccount: UserAccount = {
			email: "testUser4@emails.com",
			password: "",
			username: "testUser4",
			phone: 4444444444,
		};

		//ACT
		const response = await createUserAccount(userAccount);

		//ASSERT
		expect(response.status).toBe(
			"A required field is missing. Please check you entries for blank fields."
		);
	});

	it("throws an error for an already existing username", async () => {
		//ARRANGE
		const userAccount: UserAccount = {
			email: "starfire8152@gmail.com",
			password: "Cust1234",
			username: "Customer Three",
			phone: 999999999,
		};

		//ACT
		const response = await createUserAccount(userAccount);

		//ASSERT
		expect(response.status).toBe("The provided user name already exists.");
	});

	it("throws an error when the username is missing", async () => {
		//ARRANGE
		const userAccount: UserAccount = {
			email: "testUser5@emails.com",
			password: "Cust1234",
			username: "",
			phone: 5555555555,
		};

		//ACT
		const response = await createUserAccount(userAccount);

		//ASSERT
		expect(response.status).toBe(
			"A required field is missing. Please check you entries for blank fields."
		);
	});
}
