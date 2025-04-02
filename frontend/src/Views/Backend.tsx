import React, { useEffect, useState } from "react";
import axios from "axios";

export function Server() {
	const [serverResponse, setServerresponse] = useState("");
	useEffect(componentDidMount, []);
	return (
		<main>
			<h1>Server</h1>
			{serverResponse}
		</main>
	);

	function componentDidMount() {
		getResponse();
	}

	async function getResponse() {
		const response = await axios.get("http://localhost:9000/api?message=hello");
		const stringified = JSON.stringify(response);
		setServerresponse(`This is the server response: ${stringified}.`);
	}
}
