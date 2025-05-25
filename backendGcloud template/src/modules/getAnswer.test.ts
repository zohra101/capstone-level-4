import { getAnswer } from "./getAnswer";

describe("getAnswer",{timeout: 100000}, ()=> {

    it("accepts a question and a context, then returns a repponse", async () => {
		//ARRANGE
        const question = "Which name is also used to describe the Amazon rainforest in English?";
        const context = "The Amazon rainforest, also known in English as Amazonia or the Amazon Jungle.";

        //ACT
		const response = await getAnswer(question, context);

		//ASSERT
        expect(response).toBeDefined();
     
	});

    it("responds with the correct answer if the answer is within the context", async () => {
        //ARRANGE
        const question = "Which name is also used to describe the Amazon rainforest in English?";
		const context = "The Amazon rainforest, also known in English as Amazonia or the Amazon Jungle.";
        
        //ACT
        const response = await getAnswer(question, context);

        //ASSERT
        expect(response).toBe("Amazonia");
    });

    it(" doesn't provide an answer if the answer is not in the context", async () => {
		//ARRANGE
        const question = "Which name is also used to describe the Amazon rainforest in English?";
		const context =
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

		//ACT
        const response = await getAnswer(question, context);

		//ASSERT
        expect(response).toBeUndefined();
    });

    it(" doesn't provide an answer if there is no question", async () => {
		//ARRANGE
        const question = undefined;
		const context = "The Amazon rainforest, also known in English as Amazonia or the Amazon Jungle.";

		//ACT
        const response = await getAnswer(question, context);

		//ASSERT
        expect(response).toBeUndefined();
	});

    it(" doesn't provide an answer if there is no context", async () => {
		//ARRANGE
        const question = "Which name is also used to describe the Amazon rainforest in English?";
		const context = undefined;

		//ACT
        const response = await getAnswer(question, context);

		//ASSERT
        expect(response).toBeUndefined();
	});

    it(" doesn't provide an answer if there is no question and no context", async () => {
		//ARRANGE
        const question = undefined;
        const context = undefined;

        //ACT
        const response = await getAnswer(question, context);

        //ASSERT
        expect(response).toBeUndefined();
    });	

    it(" doesn't provide an answer if either the question or context are empty strings", async () => {
        //ARRANGE
        const question = "";
        const context = "";

        //ACT
        const response1 = await getAnswer(question, "placeholder context");
        const response2 = await getAnswer("placeholder question", context);
        const response3 = await getAnswer(question, context);
        
        //ASSERT
        expect(response1).toBeUndefined();
        expect(response2).toBeUndefined();
        expect(response3).toBeUndefined();
        });

})
