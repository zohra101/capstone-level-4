import { createUserAccount } from "./createUserAccount";

const backendURL = "http://localhost:9000";

describe(createUserAccount, allTests);

function allTests() {
	it("creates an account with valid input data", async () => {
		//ARRANGE
		const userAccount: UserAccount = {
			email: "testUser10@emails.com",
			password: "Cust1234",
			username: "testUser10",
			phone: 111111111,
			isActive: true,
		};

		//ACT
		const response = await createUserAccount();

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
			isActive: true,
		};

		//ACT
		const response = await createUserAccount();

		//ASSERT
		expect(response.status).toBe(
			"An account already exists for this account."
		);
	});

	it("throws an error when the email is missing", async () => {
		//ARRANGE
		const userAccount: UserAccount = {
			email: "",
			password: "Cust1234",
			username: "testUser2",
			phone: 2222222222,
			isActive: true,
		};

		//ACT
		const response = await createUserAccount();

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
			isActive: true,
		};

		//ACT
		const response = await createUserAccount();

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
			isActive: true,
		};

		//ACT
		const response = await createUserAccount();

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
			isActive: true,
		};

		//ACT
		const response = await createUserAccount();

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
			isActive: true,
		};

		//ACT
		const response = await createUserAccount();

		//ASSERT
		expect(response.status).toBe(
			"A required field is missing. Please check you entries for blank fields."
		);
	});
}
