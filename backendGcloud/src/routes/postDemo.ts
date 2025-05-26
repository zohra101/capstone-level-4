import { Request, Response } from "express";

//function handler() {}; //Declare the handler as an empty function
export function postDemo(request: Request, response: Response) {
    // const data = ({ message: "hello"}) ;
    const data = { 
        origin: request.headers.origin,
        query: request.query,
        body: request.body
     };
    response.send(data);
}
