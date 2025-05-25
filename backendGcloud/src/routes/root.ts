import { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

//function handler() {}; //Declare the handler as an empty function
export function root(request: Request, response: Response) {
    response.send(`<h1>Google Cloud</h1><h6>Backend root page. Mode = ${process.env.mode}</h6>`)
}
