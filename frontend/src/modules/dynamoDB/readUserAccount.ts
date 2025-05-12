import { UserAccount } from "./UserAccount";
import axios from "axios";

const backendURL = "http://localhost:9000";
const backendRoute = "/readAccount";

export async function readUserAccount(userAccount: UserAccount) {
		const response = await axios.get(`${backendURL}${backendRoute}`);
		const stringified = JSON.stringify(response); 
}