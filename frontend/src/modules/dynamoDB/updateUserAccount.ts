import { getBackendRoutePrefix } from "../authentication/getBackendRoutePrefix";
import { getBaseUrl } from "../authentication/getBaseUrl";
import { UserAccount } from "./UserAccount";
import axios from "axios";

const backendRoute = "updateAccount";

export async function updateUserAccount(
	userAccount: UserAccount
): Promise<string> {
	console.log("updateUserAccount called with:", userAccount);


	if (userAccount.password === null) {
		return "A password is required to update an account. Please enter a valid password.";
	}
	const { email, password, name, phone } = userAccount;
	const url = `${getBaseUrl()}${getBackendRoutePrefix()}${backendRoute}`;

	const response = await axios.post(url, { email, password, name, phone }); 
	return response.data;
}
