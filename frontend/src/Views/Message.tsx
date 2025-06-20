import React, { useEffect, useState } from "react";
import { handleSubmitEmail } from "../modules/email/handleSubmitEmail";
import "../../src/index.scss";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../modules/state/store";
import { selectMessageDidMount } from "../modules/state/stateSelectors";

export function Message() {
	// const [didMount, setDidMount] = useState(false);
	const messageDidMount = useSelector(selectMessageDidMount);
	const dispatch = useDispatch();

	useEffect(componentDidMount, []);
	useEffect(componentDidUpdate);
	useEffect(componentDidUnmount, []);

	return (
		<main>
			<div className="container m-3">
				<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1">
					<div className="col">
						<h3 id="sendEmail">Send a message</h3>
						<p>
							If you have any questions about my services, please fill out and
							submit the form below.
						</p>
					</div>
				</div>
				<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 center">
					<div className="col">
						<form
							id="outputTag"
							// onSubmit={handleSubmitEmail}
						>
							<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 p-2">
								<div className="col">
									<fieldset className="ms-1">
										<legend id="legend">Contact Type</legend>
										<input
											type="radio"
											id="individual"
											name="Contact Type"
											className="p-2"
											aria-label="Individual"
										/>
										<span> Individual</span>
										<input
											type="radio"
											id="company"
											name="Contact Type"
											className="p-2 ms-2"
											aria-label="Company"
										/>
										<span> Company</span>
									</fieldset>
								</div>
							</div>
							<div className="row row-cols-2 p-2"></div>
							<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 p-2">
								<div className="col">
									<span style={{ fontWeight: "bold" }}>
										<label htmlFor="contactEmail">Contact Email</label>
										<br />
									</span>
									<input
										required
										type="email"
										id="contactEmail"
										className="inputs"
										placeholder="address@domain.com"
									/>
								</div>
							</div>
							<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 p-2">
								<div className="col">
									<span style={{ fontWeight: "bold" }}>
										<label htmlFor="contactPhone">Contact Phone</label>
										<br />
									</span>
									<input
										required
										type="tel"
										pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
										id="contactPhone"
										className="inputs"
										placeholder="01 5555555555"
									/>
								</div>
							</div>
							<div className="row row-cols-2 p-2">
								<div className="col">
									<span style={{ fontWeight: "bold" }}>
										<label htmlFor="userMessage">Message</label>
										<br />
									</span>
									<textarea
										required
										id="userMessage"
										className="inputs"
										placeholder="Enter your message here."
									></textarea>
								</div>
							</div>
							<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 p-2">
								<div className="col">
									<button className="btn btn-dark">Submit</button>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div id="spinner"></div>
				<div id="outputTag2"></div>
				<br />
			</div>
		</main>
	);

	function componentDidMount() {
		// setDidMount(true);
		let action = set.messageDidMount(true);
		dispatch(action);
		console.log("The Send Message component mounted.");

		const titleTag = document.getElementById("titleTag");
		titleTag.innerHTML = "Alex M - Send Message";

		const individualTag = document.getElementById("individual");
		new bootstrap.Tooltip(individualTag);
		const companyTag = document.getElementById("company");
		new bootstrap.Tooltip(companyTag);
	}

	function componentDidUpdate() {
		if (messageDidMount) console.log("The Send Message component updated.");
	}
	function componentDidUnmount() {
		return function displayMessage() {
			console.log("The Send Message component unmounted.");
		};
	}
}
