import { Request, Response } from "express";
import { getFavqApiResponse } from "../modules/getFavqApiResponse";

//function handler() {}; //Declare the handler as an empty function
export async function favqApiResponse(request: Request, response: Response) {
	const result = await getFavqApiResponse();
	response.send(result);

}
