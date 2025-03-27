import { authenticationAws } from "./authenticationAws";

//AWS Login Testing

describe("The authenticationAws function", () => {
	it("connects when the email and password are correct", async () => {
		//ARRANGE
		const email = "abc@logins.com";
		const password = "aaa123";

		//ACT
		const isAuthenticated = await authenticationAws(email, password);

		//ASSERT
		expect(isAuthenticated).toBe(true);
	});

	it("does not connect when the email is incorrect", async () => {
		//ARRANGE
		const email = "xyz@logins.com";
		const password = "aaa123";

		//ACT
		const isAuthenticated = await authenticationAws(email, password);

		//ASSERT
		expect(isAuthenticated).toBe(false);
	});
});
