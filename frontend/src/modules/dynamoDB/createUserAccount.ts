import axios from "axios";

const backendURL = "http://localhost:9000";

export async function createUserAccount(): Promise<{ status: string }> {

	const userAccount =  {
		email: "testUser10@emails.com",
		password: "Cust1234",
		username:  "testUser10",
		phone: 111111111,
		isActive: true
		};

	const response = await axios.put(`${backendURL}/createAccount/${userAccount}`);
	const statusCode = response.data.statusCode;
	const exceptionName = response.data.exceptionName;

	if (statusCode === 200) 
	return {status: "Your account was created successfully."};

	if (statusCode === 400 && exceptionName === "ValidationException")
		return { status: "A required field is missing. Please check you entries for blank fields." };

}
