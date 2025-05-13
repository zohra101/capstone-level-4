import { Request, Response } from "express";

//function handler() {}; //Declare the handler as an empty function
export function root(request: Request, response: Response) {
    const { url } = request;
    response.send(`<h1>Capstone Level 4 Express</h1><p>Backend root page.</p>`);

    // response.send({ message: "Hello world!"});
}
