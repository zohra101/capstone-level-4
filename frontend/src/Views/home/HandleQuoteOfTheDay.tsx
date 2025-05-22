import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectDidMount } from "../../modules/state/stateSelectors";
import { set } from "../../modules/state/store";

export function HandleQuoteOfTheDay() {
	// const [didMount, setDidMount] = useState(false);
	const didMount = useSelector(selectDidMount);
	const [quote, setQuote] = useState("");
	const [author, setAUthor] = useState("");

	const dispatch = useDispatch();

	useEffect(componentDidMount, []);
	useEffect(componentDidUpdate, [didMount]);
	useEffect(componentDidUnmount, []);

	return (
		<div className="ms-5 center">
			<div className="card w-50 m-5 list-group-item-color1 boxShadow ">
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
					<br />
				</div>
			</div>
		</div>
	);

	async function getQuote() {
		const domain = window.location.hostname;
		const isDeployed = domain === "zohra101.github.io"
		// || domain === "d19khr1ql2iv95.cloudfront.net"
		;

		let response: AxiosResponse;

		if (isDeployed)
			response = await axios.get(
				"https://pva375oymcqo2jvjv73hn5zere0rastx.lambda-url.us-east-2.on.aws/favqApiResponse"
			);
		else response = await axios.get("http://localhost:9000/favqApiResponse");

		const { quote, author } = response.data;
		if (!response.data) {
			setQuote(
				`“I have not failed. I've just found 10,000 ways that won't work.”`
			);
			setAUthor(`Thomas A. Edison`);
		}
		else {
			setQuote(`"${quote}"`);
			setAUthor(`${author}`);
		};
	}

	function componentDidMount() {
		// setDidMount(true);
		let action = set.didMount(true);
		dispatch(action);
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
