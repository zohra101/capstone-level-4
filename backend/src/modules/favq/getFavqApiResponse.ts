import { FavqApiResponse } from "./favqApiResponseTypes";
import axios from "axios";

export async function getFavqApiResponse() {
	const response = await axios.get("https://favqs.com/api/qotd");
	const result: FavqApiResponse = {
		quote: response.data.quote.body,
		author: response.data.quote.author,
	};

	//Add logic to handle if FAVQs is offline
	// if (!result) show a preset quote

	return result;
}