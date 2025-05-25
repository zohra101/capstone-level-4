import { getQuote } from "./getQuote";

describe("getQuote", allTests);

function allTests() {
	it("receives a response from FavQs API", async () => {
		//ARRANGE

		//ACT
		const result = await getQuote();

		//ASSERT
		expect(result).toBeDefined();
	});

	it("receives a response from FavQs API", async () => {
		//ARRANGE
		let result: { author: string; quote: string };

		//ACT
		result = await getQuote();

		//ASSERT
		expect(result).toHaveProperty("author");
		expect(result).toHaveProperty("quote");
	});

	it("receives responses which are different from FavQs API", async () => {
		//ARRANGE
		let result1: { author: string; quote: string };
		let result2: { author: string; quote: string };

		//ACT
		result1 = await getQuote();
		result2 = await getQuote();

		//ASSERT
		expect(result1).toHaveProperty("author");
		expect(result1).toHaveProperty("quote");
		expect(result2).toHaveProperty("author");
		expect(result2).toHaveProperty("quote");
		expect(result1.author).not.toBe(result2.author);
		expect(result1.quote).not.toBe(result2.quote);
	});
}
