import axios from "axios";
import dotenv from "dotenv";

dotenv.config(); //Attaches the env variables in .env to the process object

export async function createUserAccount(userAccount: UserAccount) {

	const request = {
		Item: {
			userId: userAccount.userId,
			email: userAccount.email,
			password: userAccount.password,
			username: userAccount.username,
			phone: userAccount.phone,
			createdAt: userAccount.createdAt,
			isActive: userAccount.isActive ?? true, // Default to true if not provided
		},
	};

	const response = await axios.put(request);
	return response;
}
