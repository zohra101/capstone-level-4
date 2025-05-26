import { Request, Response } from "express";

//function handler() {}; //Declare the handler as an empty function
export function api(request: Request, response: Response) {
    // const data = ({ message: "hello"}) ;
    const data = { 
        origin: request.headers.origin,
        query: request.query,
     };
    response.send(data);
}
