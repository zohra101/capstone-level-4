import express from "express";
import cors from "cors";
import { root } from "./routes/root";
// import { backend  } from "../archive/backend";
import { favqApiResponse } from "./routes/favqApiResponse";
// import { authDynamoDB } from "./routes/authDynamoDB";
import serverless from "serverless-http";
import dotenv from "dotenv";
// import { readDynamoDBClient } from "./routes/readDynamoDBClient";
import { createAccount } from "./routes/createAccount";
import { readAccount } from "./routes/readAccount";
import { updateAccount } from "./routes/updateAccount";
import { delAccount } from "./routes/delAccount";

dotenv.config();
console.log("Dotenv configured");
console.log("Current mode:", process.env.mode); 

const hostname = "localhost"; //Local domainnpm
const port = 9000; //Common backend ports are 3000, 8080, 9000
// const path = "/"; //The path from where the server info will be rendered in the browser

const app = express(); //Instantiate an express.js object

app.use(cors());
app.use(json()); //Configures Express to receive JSON parameters from Axios. 

app.get("/", root); //The handler runs when the path is visited in the URL
app.get("/favqApiResponse", favqApiResponse); //The handler runs when the path is visited in the URL

app.get("/createAccount", createAccount); //The handler runs when the path is visited in the URL
app.get("/readAccount", readAccount); //The handler runs when the path is visited in the URL
app.get("/updateAccount", updateAccount); //The handler runs when the path is visited in the URL
app.get("/delAccount", delAccount); //The handler runs when the path is visited in the URL

// app.post("/createAccount", createAccount); //The handler runs when the path is visited in the URL
// app.post("/readAccount", readAccount); //The handler runs when the path is visited in the URL
// app.post("/updateAccount", updateAccount); //The handler runs when the path is visited in the URL
// app.post("/delAccount", delAccount); //The handler runs when the path is visited in the URL

app.use((req, res, next) => {
	console.warn(
		`Backend: No matching route found for ${req.method} ${req.originalUrl}.`
	);
	res.status(404).send("Cannot " + req.method + " " + req.originalUrl);
});

console.log("Current mode:", process.env.mode); // Force logging the mode

const isRunningLocally = process.env.mode === "development";

if (isRunningLocally) 
	app.listen(port, hostname, handleListen); //Listen on the specified port and hostname
 else console.log("Server not starting locally because mode is:", process.env.mode);


function handleListen() {

    console.log(`Listening on http;//${hostname}:${port}...`);
    console.log('Open a terminal and run "npm run build".');
    console.log('To debug, start this server in JavaScript Debug terminal.');
}

export const handler = serverless(app); //Convert Express app into a serverless app compatible with AWS Lambda
