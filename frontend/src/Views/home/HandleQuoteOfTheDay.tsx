//Fetch the response from the server and extract it
import React, { useState, useEffect } from "react";
// import { extractQotdResponse } from "../../modules/Qotd/extractQotdResponse";
import axios from "axios";

// const proxy = "https://corsproxy.io/?url=";
// const baseUrl = "https://favqs.com/api";
// const endPoint = "/qotd";

export function HandleQuoteOfTheDay() {
	const [didMount, setDidMount] = useState(false);
	const [quote, setQuote] = useState("");
	const [author, setAUthor] = useState("");

	useEffect(componentDidMount, []);
	useEffect(componentDidUpdate, [didMount]);
	useEffect(componentDidUnmount, []);

	return (
		<div className="center">
			<div className="card w-50 m-4 list-group-item-color1 boxShadow ">
				<div className="card-header blockquote-header text-center">
					<span className="badge text-bg-primary m-1">NEW!</span>
					<i className="bi bi-book"></i> Quote of the Day
					<hr />
				</div>
				<div className="card-body">
					<blockquote
						id="qotdQuoteTag"
						className="blockquote mb-3"
					>
						{quote}
					</blockquote>
					<footer
						id="qotdAuthorTag"
						className="blockquote-footer mt-2 list-group-item-text1"
					>
						{author}
					</footer>
				</div>
			</div>
		</div>
	);

	async function getQuote() {
		const response = await axios.get("http://localhost:9000/favqApiResponse");
		const quote = response.data.quote;
		const author = response.data.author;
		setQuote(`"${quote}"`);
		setAUthor(`${author}`);
	}

	function componentDidMount() {
		// const url = proxy + baseUrl + endPoint;
		// const promise = fetch(url);
		// promise.then(extractQotdResponse);

		setDidMount(true);
		getQuote();
		console.log("The HandleQuoteOfTheDay component mounted.");
	}

	function componentDidUpdate() {
		if (didMount) console.log("The HandleQuoteOfTheDay component updated.");
	}

	function componentDidUnmount() {
		console.log("The  HandleQuoteOfTheDay component unmounted.");
	}
}
