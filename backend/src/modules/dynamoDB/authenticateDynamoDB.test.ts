import { authenticateDynamoDB } from "../dynamoDB/authenticateDynamoDB";
import dotenv from "dotenv";
import path from "path";
// dotenv.config(); //Attaches the env variables in .env to the process object

const envPath = path.resolve(__dirname, "../../.env");
dotenv.config({ path: envPath });

console.log("Attempting to load .env from:", envPath);
console.log("AWS_ACCESS_KEY_ID from env:", process.env.AWS_ACCESS_KEY_ID);
console.log(
	"AWS_SECRET_ACCESS_KEY from env:",
	process.env.AWS_SECRET_ACCESS_KEY
);
console.log("AWS_REGION from env:", process.env.AWS_REGION);
describe(authenticateDynamoDB, allTests);

function allTests() {
	it("should not throw an error on import", () => {
		expect(true).toBe(true); // A basic assertion to make the test run
	});

	it("receives a response from DynamoDB", async () => {
		//ARRANGE
		const email = "starfire8152@gmail.com";
		const password = "Cust1234";

		//ACT
		const loginData = await authenticateDynamoDB(email, password);

		//ASSERT
		expect(loginData).toBeDefined();
	});

	it("authenticates with DynamoDB", async () => {
		//ARRANGE
		const email = "starfire8152@gmail.com";
		const password = "Cust1234";

		//ACT
		const isAuthenticated = await authenticateDynamoDB(email, password);
		console.log("isAuthenticated:", isAuthenticated);

		//ASSERT
		expect(isAuthenticated).toBe(true);
	});
}
