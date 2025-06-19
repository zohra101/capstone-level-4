import React, { useEffect, useState } from "react";
import { UserAccount } from "../../modules/dynamoDB/UserAccount";
import { delUserAccount } from "../../modules/dynamoDB/delUserAccount";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../../modules/state/store";
import {
	selectDeleteAccountDidMount,
	selectDeleteFeedbackMessage,
} from "../../modules/state/stateSelectors";

export function DeleteAccountModal() {
	// State for lifecycle tracking
	// const [didMount, setDidMount] = useState(false);
	const deleteAccountDidMount = useSelector(selectDeleteAccountDidMount);
	const dispatch = useDispatch();

	// State for displaying feedback messages from the backend
	// const [feedbackMessage, setFeedbackMessage] = useState<string>("");
	const messageToDisplay = useSelector(selectDeleteFeedbackMessage);

	// Lifecycle hooks
	useEffect(componentDidMount, []);
	useEffect(componentDidUpdate);
	useEffect(componentDidUnmount, []);

	// Function to handle form submission
	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		// Add event type for type safety
		event.preventDefault(); // Prevent default form page reload

		// Construct the UserAccount object
		const existingUserAccount: UserAccount = {
			email: userAccount.userEmailDelete.value,
			password: userAccount.userPasswordDelete.value,
		};

		console.log("Attempting to delete account for:", existingUserAccount.email);

		// Call the frontend createUserAccount function and await the result
		// Based on backend/frontend function return, this is expected to be a string message
		const deleteResultMessage: string = await delUserAccount(
			existingUserAccount
		);

		// Update the feedback message state with the result
		// setFeedbackMessage(resultMessage); // Use the setter to update state

		let action = set.deleteFeedbackMessage(deleteResultMessage);
		dispatch(action);
	}

	return (
		<>
			<button
				type="submit"
				className="btn btn-light"
				data-bs-toggle="modal"
				data-bs-target="#deleteAccountModal"
			>
				Delete
			</button>
			<form
				onSubmit={handleSubmit}
				className="modal fade"
				id="deleteAccountModal"
				tabIndex={-1}
				aria-labelledby="deleteAccountModal"
				aria-hidden="true"
			>
				<div className="modal-dialog ">
					<div className="modal-content modal-style">
						<div className="modal-header">
							<h1
								className="modal-title fs-5"
								id="deleteAccountModalLabel"
							>
								Delete Account
							</h1>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body m-2">
							<p>Are you sure you want to delete your account? </p>
							<p>
								{" "}
								If so, click Delete to proceed. Your account will be deleted and
								you will need to sign up again.
							</p>
							<p>
								{" "}
								If not, then click Close or X to return to your account page.
							</p>
						</div>
						<div className="modal-footer">
							<button
								id="signInCloseButton"
								type="button"
								className="btn btn-secondary"
								data-bs-dismiss="modal"
								name="closeButton"
							>
								Close
							</button>
							<button
								id="signInSubmitButton"
								type="submit"
								className="btn btn-primary"
							>
								Delete
							</button>
						</div>
					</div>
				</div>
			</form>
		</>
	);

	// return (
	// 	<main>
	// 		<div className="container m-3">
	// 			<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1">
	// 				<div className="col">
	// 					<h3 id="deleteAccount">Delete your account</h3>
	// 					<p>
	// 						Are you sure you want to delete your account? If so, click Submit
	// 						to proceed. Your account will be deleted and you will need to sign
	// 						up again. If not, then click Close or X to return to your account
	// 						page.
	// 					</p>
	// 				</div>
	// 			</div>
	// 			<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 center">
	// 				<div className="col">
	// 					<form
	// 						id="deleteAccountForm"
	// 						onSubmit={handleSubmit}
	// 					>
	// 						<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 p-2">
	// 							<div className="col">
	// 								<span style={{ fontWeight: "bold" }}>
	// 									<label htmlFor="userEmailDelete">Email</label>
	// 									<br />
	// 								</span>
	// 								<input
	// 									required
	// 									type="email"
	// 									id="userEmailDelete"
	// 									className="inputs"
	// 									placeholder="address@domain.com"
	// 								/>
	// 							</div>
	// 						</div>
	// 						<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 p-2">
	// 							<div className="col">
	// 								<span style={{ fontWeight: "bold" }}>
	// 									<label htmlFor="userPasswordDelete">Password</label>
	// 									<br />
	// 								</span>
	// 								<input
	// 									required
	// 									type="password"
	// 									id="userPasswordDelete"
	// 									className="inputs"
	// 									placeholder="Strong25@pass#"
	// 								/>
	// 							</div>
	// 						</div>
	// 						<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 p-2">
	// 							<div className="col">
	// 								<button className="btn btn-dark animation">Submit</button>
	// 							</div>
	// 						</div>
	// 					</form>
	// 					{/* Output tag for displaying messages */}
	// 					<output id="deleteOutputTag">
	// 						{/* Display the feedback message state here */}
	// 						{messageToDisplay}
	// 					</output>
	// 				</div>
	// 			</div>
	// 			<br />
	// 		</div>
	// 	</main>
	// );

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
			let action = set.deleteFeedbackMessage("");
			dispatch(action);
		};
	}
}
