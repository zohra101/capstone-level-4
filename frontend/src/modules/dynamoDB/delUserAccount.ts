import { getBackendRoutePrefix } from "../authentication/getBackendRoutePrefix";
import { getBaseUrl } from "../authentication/getBaseUrl";
import { UserAccount } from "./UserAccount";
import axios from "axios";

const backendRoute = "delAccount";

export async function delUserAccount(
	userAccount: UserAccount
): Promise<string> {
	console.log("delUserAccount called with:", userAccount);

	const emailToSend = userAccount.email === null ? "" : userAccount.email;
	const passwordToSend = userAccount.password === null ? "" : userAccount.password;
	const url = `${getBaseUrl()}${getBackendRoutePrefix()}${backendRoute}`;

	const response = await axios.post(url, { emailToSend, passwordToSend }); 
	return response.data;
}
