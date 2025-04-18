import express, { Request, Response } from "express";
import cors from "cors";
import { root } from "./routes/root";
import { backend  } from "./routes/backend";
import { favqApiResponse } from "./routes/favqApiResponse";
import { isDynamoDBAuthenticated } from "./routes/isDynamoDBAuthenticated";

const hostname = "localhost"; //Local domainnpm
const port = 9000; //Common backend ports are 3000, 8080, 9000
const path = "/"; //The path from where the server info will be rendered in the browser

const app = express(); //Instantiate an express.js object
app.use(cors());
app.get("/", root); //The handler runs when the path is visited in the URL
app.get("/backend", backend); //The handler runs when the path is visited in the URL
app.get("/favqApiResponse", favqApiResponse); //The handler runs when the path is visited in the URL
app.get("/isDynamoDBAuthenticated", isDynamoDBAuthenticated); //The handler runs when the path is visited in the URL
app.listen(port, hostname, handleListen); //Listen on the specified port and hostname


function handleListen() {
    console.log(`Listening on http;//${hostname}:${port}...`);
    console.log('Open a terminal and run "npm run build".');
    console.log('To debug, start this server in JavaScript Debug terminal.');
}