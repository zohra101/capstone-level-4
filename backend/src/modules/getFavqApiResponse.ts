import { FavqApiResponse } from "./favqApiResponseTypes";
import axios from "axios";

export async function getFavqApiResponse() {
	const response = await axios.get("https://favqs.com/api/qotd");
	const result = {
		quote: response.data.quote.body,
		author: response.data.quote.author,
	};
	return result;
}