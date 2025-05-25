import axios from "axios";

export async function getQuote() {
	const response = await axios.get("https://favqs.com/api/qotd");
	const result = { 
        quote: response.data.quote.body, 
        author: response.data.quote.author, 
    };
	return result;
}
const FavqApiResponse = {
	quote: response.data.quote.body,
	author: response.data.quote.author,
};