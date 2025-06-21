import React, { useEffect, useState } from "react";
import { UserAccount } from "../../modules/dynamoDB/UserAccount";
import { updateUserAccount } from "../../modules/dynamoDB/updateUserAccount";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../../modules/state/store";
import { selectGlobalAccount, selectUpdateAccountDidMount, selectUpdateFeedbackMessage } from "../../modules/state/stateSelectors";

export function UpdateAccount() {
	// State for lifecycle tracking
	const globalAccount = useSelector(selectGlobalAccount);
	const updateAccountDidMount = useSelector(selectUpdateAccountDidMount);
	const dispatch = useDispatch();

	// State for displaying feedback messages from the backend
	// const [feedbackMessage, setFeedbackMessage] = useState<string>("");
	const messageToDisplay = useSelector(selectUpdateFeedbackMessage);

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
			email: globalAccount.email || "", // use logged-in user email here
			password: globalAccount.password || "",
			name: inputs.usersNameUpdate.value,
			phone: inputs.userPhoneUpdate.value,
		};

		console.log("Attempting to update account for:", updatedUserAccount.email);

		// Call the frontend createUserAccount function and await the result
		// Based on backend/frontend function return, this is expected to be a string message
		const updateResultMessage = await updateUserAccount(updatedUserAccount);

		// Update the feedback message state with the result
		// setFeedbackMessage(resultMessage); // Use the setter to update state
		const isAccountUpdated = updateResultMessage === "Your account updated successfully.";
		
		if (isAccountUpdated) {
			const action1 = set.updateFeedbackMessage(updateResultMessage);
			const action2 = set.globalAccount(updatedUserAccount);
			dispatch(action1);
			dispatch(action2);
		}


	}

	return (
		<main>
			<div className="container m-3">
				<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1">
					<div className="col">
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
										<label htmlFor="usersNameUpdate">Name</label>
										<br />
									</span>
									<input
										required
										type="text"
										name="usersName"
										id="usersNameUpdate"
										className="inputs"
										placeholder="YourName"
										defaultValue={globalAccount.name}
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
										name="phone"
										pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
										id="userPhoneUpdate"
										className="inputs"
										placeholder="888-888-8888"
										defaultValue={globalAccount.phone}
									/>
								</div>
							</div>
							<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 p-2">
								<div className="col">
									<button className="btn btn-warning">Update</button>
								</div>
							</div>
						</form>
						<output
							id="updateOutputTag"
							className="d-block text-success pb-2"
						>
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
			console.log("The Update Account component updated.");
	}
	function componentDidUnmount() {
		return function displayMessage() {
			console.log("The Update Account component unmounted.");
			let action = set.updateFeedbackMessage("");
			dispatch(action);
		};
	}
}
