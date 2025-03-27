//Extract the server resoponse and parse it
import { parseQotdResponse } from "./parseQotdResponse";

export function extractQotdResponse(resolveValue) {
	const promise = resolveValue.text();
	promise.then(parseQotdResponse);
	console.log("Quote of the Day was extracted.");
}
