import axios from "axios";
import { UserAccount } from "./UserAccount";

const backendURL = "http://localhost:9000";
const backendRoute = "/createAccount";

export async function createUserAccount(userAccount: UserAccount) {
	const { email, password } = userAccount;
    const url = `${backendURL}${backendRoute}?email=${email}&password=${password}`;

	const response = await axios.put(url);
	return response.data;
}
