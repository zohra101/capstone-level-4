import React, { useEffect, useState } from "react";
import "../../index";
import { createUserAccount } from "../../modules/dynamoDB/createUserAccount";
import { UserAccount } from "../../modules/dynamoDB/UserAccount";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../../modules/state/store";
import {
	selectViewAccountDidMount,
	selectFeedbackMessage,
} from "../../modules/state/stateSelectors";

export function CreateAccount() {
	// State for lifecycle tracking
	// const [didMount, setDidMount] = useState(false);
	const createAccountDidMount = useSelector(selectViewAccountDidMount);
	const dispatch = useDispatch();

	// State for displaying feedback messages from the backend
	// const [feedbackMessage, setFeedbackMessage] = useState<string>("");
	const messageToDisplay = useSelector(selectFeedbackMessage);

	// Lifecycle hooks
	useEffect(componentDidMount, []);
	useEffect(componentDidUpdate);
	useEffect(componentDidUnmount, []);

	// Function to handle form submission
	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		// Add event type for type safety
		event.preventDefault(); // Prevent default form page reload

		// Get input values from the form elements
		const form: any = event.target;
		const inputs = form.elements;

		// Construct the UserAccount object
		const newUserAccount: UserAccount = {
			email: inputs.userEmailCreate.value,
			password: inputs.userPasswordCreate.value,
			username: inputs.userNameCreate.value,
			name: inputs.usersNameCreate.value,
			phone: inputs.userPhoneCreate.value,
		};

		console.log("Attempting to create account with:", newUserAccount);

		// Call the frontend createUserAccount function and await the result
		// Based on backend/frontend function return, this is expected to be a string message
		const resultMessage = await createUserAccount(newUserAccount);

		// Update the feedback message state with the result
		// setFeedbackMessage(resultMessage); // Use the setter to update state

		let action = set.feedbackMessage(resultMessage);
		dispatch(action);
	}

	return (
		// Connect the handleSubmit function to the form's onSubmit even
		<main>
			<div className="container m-3">
				<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1">
					<div className="col">
						<h3 id="createAccount">Create an account</h3>
						<p>
							An account allows you to view consultation notes and proposals for
							projects. To create an account, please complete the fields below
							and submit the form.
						</p>
					</div>
				</div>
				<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 center">
					<div className="col">
						<form
							id="createAccountForm"
							onSubmit={handleSubmit}
						>
							<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 p-2">
								<div className="col">
									<span style={{ fontWeight: "bold" }}>
										<label htmlFor="userEmailCreate">Email</label>
										<br />
									</span>
									<input
										required
										type="email"
										id="userEmailCreate"
										className="inputs"
										placeholder="address@domain.com"
									/>
								</div>
							</div>
							<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 p-2">
								<div className="col">
									<span style={{ fontWeight: "bold" }}>
										<label htmlFor="userNameCreate">Username</label>
										<br />
									</span>
									<input
										required
										type="userName"
										id="userNameCreate"
										className="inputs"
										placeholder="YourUserName"
									/>
								</div>
							</div>
							<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 p-2">
								<div className="col">
									<span style={{ fontWeight: "bold" }}>
										<label htmlFor="usersNameCreate">Name</label>
										<br />
									</span>
									<input
										required
										type="usersName"
										id="usersNameCreate"
										className="inputs"
										placeholder="YourName"
									/>
								</div>
							</div>
							<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 p-2">
								<div className="col">
									<span style={{ fontWeight: "bold" }}>
										<label htmlFor="userPasswordCreate">Password</label>
										<br />
									</span>
									<input
										required
										type="password"
										id="userPasswordCreate"
										className="inputs"
										placeholder="Strong25@pass#"
									/>
								</div>
							</div>
							<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 p-2">
								<div className="col">
									<span style={{ fontWeight: "bold" }}>
										<label htmlFor="userPhoneCreate">Phone</label>
										<br />
									</span>
									<input
										required
										type="tel"
										pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
										id="userPhoneCreate"
										className="inputs"
										placeholder="555-555-5555"
									/>
								</div>
							</div>
							<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 p-2">
								<div className="col">
									<button className="btn btn-dark animation">Submit</button>
								</div>
							</div>
						</form>
						{/* Output tag for displaying messages */}
						<output id="createOutputTag">
							{/* Display the feedback message state here */}
							{messageToDisplay}
						</output>
					</div>
				</div>
				<br />
			</div>
		</main>
	);

	// Lifecycle functions

	function componentDidMount() {
		// setDidMount(true);
		let action = set.createAccountDidMount(true);
		dispatch(action);
		console.log("The Create Account component mounted.");

		// Update the tab title when the component mounts
		const titleTag = document.getElementById("titleTag");
		document.title = "Alex M - Create Account";
	}

	function componentDidUpdate() {
		// This useEffect runs on mount and every update if no dependency array or dependency array changes
		if (createAccountDidMount)
			console.log("The Create Account component updated.");
	}
	function componentDidUnmount() {
		return function displayMessage() {
			console.log("The Create Account component unmounted.");
		};
	}
}
