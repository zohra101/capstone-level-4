import React, { useEffect, useState } from "react";
import "../../index";
import { UserAccount } from "../../modules/dynamoDB/UserAccount";
import { delUserAccount } from "../../modules/dynamoDB/delUserAccount";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../../modules/state/store";
import { selectDeleteAccountDidMount, selectFeedbackMessage } from "../../modules/state/stateSelectors";

export function DeleteAccount() {
	// State for lifecycle tracking
	// const [didMount, setDidMount] = useState(false);
	const deleteAccountDidMount = useSelector(selectDeleteAccountDidMount);
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
		const existingUserAccount: UserAccount = {
			email: inputs.userEmailDelete.value,
			password: inputs.userPasswordDelete.value,
		};

		console.log("Attempting to delete account for:", existingUserAccount.email);

		// Call the frontend createUserAccount function and await the result
		// Based on backend/frontend function return, this is expected to be a string message
		const resultMessage: string = await delUserAccount(existingUserAccount);

		// Update the feedback message state with the result
		// setFeedbackMessage(resultMessage); // Use the setter to update state

		let action = set.feedbackMessage(resultMessage);
		dispatch(action);
	}

	return (
		<main>
			<div className="container m-3">
				<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1">
					<div className="col">
						<h3 id="deleteAccount">Delete your account</h3>
						<p>
							To delete your account, enter your email and password below. Then
							click Submit.
						</p>
					</div>
				</div>
				<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 center">
					<div className="col">
						<form
							id="deleteAccountForm"
							onSubmit={handleSubmit}
						>
							<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 p-2">
								<div className="col">
									<span style={{ fontWeight: "bold" }}>
										<label htmlFor="userEmailDelete">Email</label>
										<br />
									</span>
									<input
										required
										type="email"
										id="userEmailDelete"
										className="inputs"
										placeholder="address@domain.com"
									/>
								</div>
							</div>
							<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 p-2">
								<div className="col">
									<span style={{ fontWeight: "bold" }}>
										<label htmlFor="userPasswordDelete">Password</label>
										<br />
									</span>
									<input
										required
										type="password"
										id="userPasswordDelete"
										className="inputs"
										placeholder="Strong25@pass#"
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
						<output id="deleteOutputTag">
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
		let action = set.deleteAccountDidMount(true);
		dispatch(action);
		console.log("The Delete Account component mounted.");

		// Update the tab title when the component mounts
		const titleTag = document.getElementById("titleTag");
		titleTag.innerHTML = "Alex M - Delete Account ";
	}

	function componentDidUpdate() {
		// This useEffect runs on mount and every update if no dependency array or dependency array changes
		if (deleteAccountDidMount)
			console.log("The Delete Account component updated.");
	}
	function componentDidUnmount() {
		return function displayMessage() {
			console.log("The Delete Account component unmounted.");
		};
	}
}
