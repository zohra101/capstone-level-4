import { getTrivia } from "./getTrivia";

describe("getTrivia", allTests);

function allTests() {
	it("accepts a query object with an amoount, category, and type", () => {
		//ARRANGE
		const query = {
			amount: 0,
			category: 20,
			type: "multiple",
		};

		//ACT
		const result = getTrivia(query);

		//ASSERT
		expect(result).toBeDefined();
	});

	it("accepts a query object and returns a response from Open Trivia DB API", async () => {
		//ARRANGE
		const query = {
			amount: 1,
			category: 20,
			type: "multiple",
		};

		//ACT
		const result = await getTrivia(query);
		const question: string = result.question;
		const choices: Array<string> = result.choices;
		const answer: number = result.answer;

		//ASSERT
		expect(question).not.toBe("");
		expect(choices).toBeInstanceOf(Array);
		expect(Number(answer)).not.toBeNaN();
	});

	it.skip("responds with empty values if the amount is 0", async () => {
		//ARRANGE
		const query = {
			amount: 0,
			category: 20,
			type: "multiple",
		};

		//ACT
		const result = await getTrivia(query);
		const question: string = result.question;
		const choices: Array<string> = result.choices;
		const answer: number = result.answer;

		//ASSERT
		expect(question).not.toBe("");
		expect(choices).toHaveLength(0);
		expect(answer).toBeUndefined();
	});

	it.skip("responds with empty values if the query is empty", async () => {
		//ARRANGE
		const query = {} as any;

		//ACT
		const result = await getTrivia(query);
		const question: string = result.question;
		const choices: Array<string> = result.choices;
		const answer: number = result.answer;

		//ASSERT
		expect(question).not.toBe("");
		expect(choices).toHaveLength(0);
		expect(answer).toBeUndefined();
	});

	it.skip("randomizes the positio of the answer", async () => {
		//ARRANGE
	

		//ACT


		//ASSERT

	});
}
