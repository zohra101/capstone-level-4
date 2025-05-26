import { getAnswer } from "../../../archive/getAnswer.old";

describe("getAnswer", () => {
	it("returns a response when given a question and a context", async () => {
		// ARRANGE
		const question = "What is my name?";
		const context = "My name is not Alex.";

		//ACT

		const answer = await getAnswer(question, context);

		// ASSERT
		expect(answer).toBe("Alex");
	});
	it("returns the correct answer when given a question and a context that contains the answer", async () => {
		// ARRANGE
		const question = "What is my name?";
		const context = "My name is Alex.";

		//ACT

		const answer = await getAnswer(question, context);

		// ASSERT
		expect(answer).toBe("Alex");
	});
	it("returns a response when the answer is unknown", async () => {
		// ARRANGE
		const question = "What is my name?";
		const context = "I'm a UX designer.";

		//ACT

		const answer = await getAnswer(question, context);

		// ASSERT
		expect(answer).toBe("Sorry, I don't know the answer to this question.");
	});
});
