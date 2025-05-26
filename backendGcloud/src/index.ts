import express, { json, Request, Response, urlencoded } from "express";
import cors from "cors";
import { root } from "./routes/root";
import { api } from "./routes/api";
import { ai } from "./routes/ai";
import dotenv from "dotenv";
import { postDemo } from "./routes/postDemo";


dotenv.config();
console.log("Dotenv configured");
console.log("Current mode:", process.env.mode); 

const hostname = "localhost"; //Local domainn.
const port: any = process.env.PORT; //Common backend ports are 3000, 8080, 9000.

const app = express(); //Instantiate an express.js object.
app.use(cors()); //Allows communcation with the frontend.
app.use(urlencoded());//Allows data to be received from Postman through x-www-form-urlencoded.
app.use(json()); //Configures Express to receive JSON parameters from Axios. 

app.get("/", root); //The handler runs when the path is visited in the URL.
app.get("/api", api); //The handler runs when the path is visited in the URL.
// app.get("/ai", ai); //The handler runs when the path is visited in the URL.
app.post("/postDemo", postDemo); //Use the HTTP POST method to listen on this route. POST is like a channle that the client and server can use to speak privately on. 
app.post("/ai", ai); //Use the HTTP POST method to receive data securely and unaltered (without special characters like 20%).


app.listen(port, hostname, handleListen); //Listen on the specified port and hostname.

function handleListen() {
    console.log(`Listening on http;//${hostname}:${port}...`);
    console.log('Open a terminal and run "npm runstart2".');
    console.log('To debug, start this server in JavaScript Debug terminal.');
}