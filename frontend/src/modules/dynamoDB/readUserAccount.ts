import { getBackendRoutePrefix } from "../authentication/getBackendRoutePrefix";
import { getBaseUrl } from "../authentication/getBaseUrl";
import { UserAccount } from "./UserAccount";
import axios from "axios";

const backendRoute = "readAccount";

export async function readUserAccount(
	userAccount: UserAccount
): Promise<UserAccount | string> {
	const { email, password } = userAccount;
	const url = `${getBaseUrl()}${getBackendRoutePrefix()}${backendRoute}`;

	const response = await axios.post(url, { email, password }); 
	return response.data as UserAccount | undefined;
}
