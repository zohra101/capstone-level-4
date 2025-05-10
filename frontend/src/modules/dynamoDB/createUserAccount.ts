import axios from "axios";

const backendURL = "http://localhost:9000";

export async function createUserAccount(
	userAccount: UserAccount): Promise<{ status: string }> {
	console.log("createUserAccount called with:", userAccount);
	console.log("Email to validate:", userAccount.email);

	const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userAccount.email);
	console.log("Is email valid?", isEmailValid);

	if (!isEmailValid) {
		console.log("Email is invalid, returning error status.");
		return { status: "Please enter a valid email address." };
	}

	console.log("Email is valid, proceeding with axios.put");

	const response = await aixos.put(
		`${backendURL}/createAccount/${JSON.stringify(userAccount)}`);

	const statusCode = response.data.statusCode;
	const exceptionName = response.data.exceptionName;

	if (statusCode === 200)
		return { status: "Your account was created successfully."};

	if (statusCode === 400 && exceptionName === "ValidationException")
		return {
			status:
				"A required field is missing. Please check you entries for blank fields.",
		};
}
