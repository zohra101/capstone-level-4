import { getBackendRoutePrefix } from "../authentication/getBackendRoutePrefix";
import { getBaseUrl } from "../authentication/getBaseUrl";
import { UserAccount } from "./UserAccount";
import axios from "axios";

const backendRoute = "createAccount";

export async function createUserAccount(
	userAccount: UserAccount
): Promise<string> {
	console.log("createUserAccount called with:", userAccount);
	console.log("Email to validate:", userAccount.email);

	if (userAccount.password === null) {
		return "A password is required to create an account. Please enter a valid password.";
	}

	const { email, password, username, name, phone } = userAccount;
	const url = `${getBaseUrl()}${getBackendRoutePrefix()}${backendRoute}`;

	const response = await axios.post(url, { email, password, username, name, phone }); 
	return response.data;
}
