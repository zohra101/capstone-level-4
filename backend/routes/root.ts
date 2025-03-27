import { Request, Response } from "express";

//function handler() {}; //Declare the handler as an empty function
export function root(request: Request, response: Response) {
    const { url } = request;
    response.send(`<h1>Express Template< /h1><p>Backend root page.</p>`);
    debugger;

    // response.send({ message: "Hello world!"});
}
