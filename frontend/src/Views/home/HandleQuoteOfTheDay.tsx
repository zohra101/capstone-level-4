import React, { useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../../modules/state/store";
import {
	selectAuthor,
	selectQotdDidMount,
	selectQuote,
} from "../../modules/state/stateSelectors";
import { cloudFrontUrl } from "./cloudFrontUrl";
import { data } from "react-router";

export function HandleQuoteOfTheDay() {
	// const [didMount, setDidMount] = useState(false);
	const qotdDidMount = useSelector(selectQotdDidMount);

	const quote = useSelector(selectQuote);
	const author = useSelector(selectAuthor);

	// const [quote, setQuote] = useState("");
	// const [author, setAUthor] = useState("");

	const dispatch = useDispatch();

	useEffect(componentDidMount, []);
	useEffect(componentDidUpdate, [qotdDidMount]);
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
		const localBackendURL = "http://localhost:9000";

		let baseUrl: string;

		if (domain === "localhost") {
			baseUrl = localBackendURL;
		} else {
			baseUrl = cloudFrontUrl;
		}

		const backendRoute = "/favqApiResponse";
		const isDeployed =
			domain === "zohra101.github.io" ||
			domain === cloudFrontUrl;

		let response: AxiosResponse;

		if (isDeployed) response = await axios.post(`${baseUrl}${backendRoute}`, data);
		else response = await axios.post(`${backendRoute}`, data);

		const { quote, author } = response.data;
		if (!response.data) {
			dispatch(
				set.quote(
					`“I have not failed. I've just found 10,000 ways that won't work.”`
				)
			);
			dispatch(set.author(`Thomas A. Edison`));
		} else {
			dispatch(set.quote(quote));
			dispatch(set.author(author));
		}
	}

	function componentDidMount() {
		// setDidMount(true);
		let action = set.qotdDidMount(true);
		dispatch(action);
		getQuote();
		console.log("The HandleQuoteOfTheDay component mounted.");
	}

	function componentDidUpdate() {
		if (qotdDidMount) console.log("The HandleQuoteOfTheDay component updated.");
	}

	function componentDidUnmount() {
		console.log("The  HandleQuoteOfTheDay component unmounted.");
	}
}
