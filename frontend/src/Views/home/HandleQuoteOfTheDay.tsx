import React, { useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../../modules/state/store";
import {
	selectAuthor,
	selectQotdDidMount,
	selectQuote,
} from "../../modules/state/stateSelectors";
import { lambdaUrl } from "../../modules/authentication/lambaUrl";
import { cloudFrontUrl } from "../../modules/authentication/cloudFrontUrl";

export function HandleQuoteOfTheDay() {
	const qotdDidMount = useSelector(selectQotdDidMount);

	const quote = useSelector(selectQuote);
	const author = useSelector(selectAuthor);

	const dispatch = useDispatch();

	useEffect(componentDidMount, []);
	useEffect(componentDidUpdate, [qotdDidMount]);
	useEffect(componentDidUnmount, []);

	return (
		<div
			id="qotd"
			className="row justify-content-center"
		>
			<div className="col-12 col-lg-8 offset-lg-2">
				<div className="card w-100 m-5 list-group-item-color1 boxShadow">
					<div className="card-header blockquote-header text-center">
						<span className="badge text-bg-primary m-1 ">NEW!</span>
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

			<div className="col-12 col-lg-4">
				{/* Placeholder or additional content */}
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
			baseUrl = lambdaUrl;
		}

		const backendRouteLocal = "/favqApiResponse";
		const backendRouteDeployed = "favqApiResponse";

		const isDeployed =
			domain === "zohra101.github.io" || domain === cloudFrontUrl;

		let response: AxiosResponse;

		if (isDeployed)
			response = await axios.get(`${baseUrl}${backendRouteDeployed}`);
		else response = await axios.get(`${localBackendURL}${backendRouteLocal}`);

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
