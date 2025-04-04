//Parse the response and display the qotd on the index page
import { output } from "../../utils/output.js";

export function parseQotdResponse(resolveValue) {
	let quote = "";
	let author = "";

	const response = JSON.parse(resolveValue); //Parse the JSON string
	const quoteData = response.quote; //Access the quote object that contains the quote data

	quote = quoteData.body; //Access the property that contains the quote text
	console.log(`Quote: ${quote}`);

	author = quoteData.author; //Access the property that contains the author text
	console.log(`Author: ${author}`);

	console.log("Quote of the Day was parsed.");

	output(quote, "qotdQuoteTag");
	output(author, "qotdAuthorTag");
}
