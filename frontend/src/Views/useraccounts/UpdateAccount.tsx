import React, { useEffect, useState } from "react";
import "../../index";
import { UserAccount } from "../../modules/dynamoDB/UserAccount";
import { updateUserAccount } from "../../modules/dynamoDB/updateUserAccount";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../../modules/state/store";
import { selectFeedbackMessage, selectUpdateccountDidMount } from "../../modules/state/stateSelectors";

export function UpdateAccount() {
	// State for lifecycle tracking
	// const [didMount, setDidMount] = useState(false);
	const updateAccountDidMount = useSelector(selectUpdateccountDidMount);
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
		const updatedUserAccount: UserAccount = {
			email: inputs.userEmailUpdate.value,
			password: inputs.userPasswordUpdate.value,
			name: inputs.usersNameUpdate.value,
			phone: inputs.userPhoneUpdate.value,
		};

		console.log("Attempting to update account for:", updatedUserAccount.email);

		// Call the frontend createUserAccount function and await the result
		// Based on backend/frontend function return, this is expected to be a string message
		const updateResultMessage = await updateUserAccount(updatedUserAccount);

		// Update the feedback message state with the result
		// setFeedbackMessage(resultMessage); // Use the setter to update state

		let action = set.feedbackMessage(updateResultMessage);
		if (updatedUserAccount) dispatch(action);
	}

	return (
		<main>
			<div className="container m-3">
				<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1">
					<div className="col">
						<h3 id="updateAccount">Update your account</h3>
						<p>
							To update your account, please make any changes in the fields
							below and submit the form. Note: The Username field does not
							appear because usernames cannot be changed.
						</p>
					</div>
				</div>
				<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 center">
					<div className="col">
						<form
							id="updateAccountForm"
							onSubmit={handleSubmit}
						>
							<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 p-2">
								<div className="col">
									<span style={{ fontWeight: "bold" }}>
										<label htmlFor="userEmailUpdate">Email</label>
										<br />
									</span>
									<input
										required
										type="email"
										id="userEmailUpdate"
										className="inputs"
										placeholder="address@domain.com"
									/>
								</div>
							</div>
							<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 p-2">
								<div className="col">
									<span style={{ fontWeight: "bold" }}>
										<label htmlFor="userPasswordUpdate">Password</label>
										<br />
									</span>
									<input
										type="password"
										id="userPasswordUpdate"
										className="inputs"
										placeholder="Strong25@pass#"
									/>
								</div>
							</div>
							<hr></hr>
							<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 p-2">
								<div className="col">
									<span style={{ fontWeight: "bold" }}>
										<label htmlFor="usersNameUpdate">Name</label>
										<br />
									</span>
									<input
										required
										type="usersName"
										id="usersNameUpdate"
										className="inputs"
										placeholder="YourName"
									/>
								</div>
							</div>

							<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 p-2">
								<div className="col">
									<span style={{ fontWeight: "bold" }}>
										<label htmlFor="userPhoneUpdate">Phone</label>
										<br />
									</span>
									<input
										required
										type="tel"
										pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
										id="userPhoneUpdate"
										className="inputs"
										placeholder="888-888-8888"
									/>
								</div>
							</div>
							<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 p-2">
								<div className="col">
									<button className="btn btn-dark animation">Submit</button>
								</div>
							</div>
						</form>
						<output id="updateOutputTag">
							{/* Display the feedback message state here */}
							{messageToDisplay}
						</output>
					</div>
				</div>

				<br />
			</div>
		</main>
	);

	function componentDidMount() {
		// setDidMount(true);
		let action = set.updateAccountDidMount(true);
		dispatch(action);
		console.log("The Update Account component mounted.");

		const titleTag = document.getElementById("titleTag");
		titleTag.innerHTML = "Alex M - Update Account ";
	}

	function componentDidUpdate() {
		if (updateAccountDidMount)
			console.log("The Update Account  component updated.");
	}
	function componentDidUnmount() {
		return function displayMessage() {
			console.log("The Update Account  component unmounted.");
		};
	}
}
