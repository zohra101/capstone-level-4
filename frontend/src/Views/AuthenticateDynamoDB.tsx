import React, { useEffect, useState } from "react";
import axios from "axios";

export function AuthenticateDynamoDB() {
	const [serverResponse, setServerresponse] = useState("");
	useEffect(componentDidMount, []);
	return (
		<main>
			<h1>Authenticate Dyanamo DB</h1>
			{serverResponse}
		</main>
	);

	function componentDidMount() {
		getResponse();
	}

	async function getResponse() {
		const response = await axios.get(
			"http://localhost:9000/isDynamoDBAuthenticated"
		);
		const stringified = JSON.stringify(response);
		setServerresponse(`This is the server response: ${stringified}.`);
	}
}
