import React, { useEffect, useState } from "react";
import axios from "axios";

export function TestBackend() {
	const [serverResponse, setServerresponse] = useState("");
	useEffect(componentDidMount, []);
	return (
		<main>
			<h1>Capstone Backend</h1>
			{serverResponse}
		</main>
	);

	function componentDidMount() {
		getResponse();
	}

	async function getResponse() {
		const response = await axios.get(
			"http://localhost:9000/backend?message=backendResponding"
		);
		const stringified = JSON.stringify(response);
		setServerresponse(`This is the server response: ${stringified}.`);
	}
}
