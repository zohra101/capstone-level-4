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

	it("throws an error for updating non-existing email address", async () => {
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

	it("throws an error if password is incorrect", async () => {
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
			"The password provided is not valid for this account."
		);
	});

	it("throws an error if user tries to update username", async () => {
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

	it("throws an error for invalid email format", async () => {
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
