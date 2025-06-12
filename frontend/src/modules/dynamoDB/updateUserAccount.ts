import { getBackendRoutePrefix } from "../authentication/getBackendRoutePrefix";
import { getBaseUrl } from "../authentication/getBaseUrl";
import { UserAccount } from "./UserAccount";
import axios from "axios";

const backendRoute = "updateAccount";

export async function updateUserAccount(
	userAccount: UserAccount
): Promise<UserAccount | string> {
	console.log("updateUserAccount called with:", userAccount);
	console.log("Email to validate:", userAccount.email);

	if (userAccount.password === null) {
		return "A password is required to update an account. Please enter a valid password.";
	}

	const emailToSend = userAccount.email === null ? "" : userAccount.email;
	const url = `${getBaseUrl()}${getBackendRoutePrefix()}${backendRoute}?email=${emailToSend}&password=${
		userAccount.password
	}&&name=${userAccount.name}&phone=${userAccount.phone}`;

	const response = await axios.get(url);
	return response.data as UserAccount | undefined;
}
