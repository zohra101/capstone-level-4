import React, { useEffect, useState } from "react";
import { UserAccount } from "../../modules/dynamoDB/UserAccount";
import { delUserAccount } from "../../modules/dynamoDB/delUserAccount";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../../modules/state/store";
import {
	selectDeleteAccountDidMount,
	selectDeleteFeedbackMessage,
	selectGlobalAccount,
} from "../../modules/state/stateSelectors";

declare global {
	interface Window {
		bootstrap: any;
	}
}

// Declare modal instance variable outside component to keep it persistent
let bsModalInstance: any = null;

export function DeleteAccount() {
	// State for lifecycle tracking
	// const [didMount, setDidMount] = useState(false);
	const deleteAccountDidMount = useSelector(selectDeleteAccountDidMount);
	const dispatch = useDispatch();

	const account = useSelector(selectGlobalAccount);

	// State for displaying feedback messages from the backend
	// const [feedbackMessage, setFeedbackMessage] = useState<string>("");
	const messageToDisplay = useSelector(selectDeleteFeedbackMessage);

	// Lifecycle hooks
	useEffect(componentDidMount, []);
	useEffect(componentDidUpdate);
	useEffect(componentDidUnmount, []);

	function showModal() {
		const modalEl = document.getElementById("deleteAccountModal");
		if (!modalEl) return;

		// Create a new instance every time user clicks Delete button
		bsModalInstance = new window.bootstrap.Modal(modalEl, {});
		bsModalInstance.show();
	}

	// Function to handle form submission
	async function handleDelete(event: any) {
		// Add event type for type safety
		event.preventDefault(); // Prevent default form page reload
		console.log("handleSubmit fired");

		// Construct the UserAccount object
		const existingUserAccount: UserAccount = {
			email: account.email,
			password: account.password,
		};

		console.log("Attempting to delete account for:", existingUserAccount.email);

		// Call the frontend createUserAccount function and await the result
		// Based on backend/frontend function return, this is expected to be a string message
		const deleteResultMessage: string = await delUserAccount(
			existingUserAccount
		);

		// Update the feedback message state with the result
		// setFeedbackMessage(resultMessage); // Use the setter to update state
		dispatch(set.deleteFeedbackMessage(deleteResultMessage));

		// Close the modal and sign the user out
		setTimeout(() => {
			if (bsModalInstance) {
				bsModalInstance.hide();

				const fadeBackground = document.querySelector(".modal-backdrop");
				if (fadeBackground !== null) {
					fadeBackground.parentNode?.removeChild(fadeBackground);
				}

				document.body.classList.remove("modal-open");
			}
		}, 2000);

		// Sign out after 15 seconds total (10 + 5)
		setTimeout(() => {
			dispatch(set.globalAccount(undefined));
		}, 5000);
	}

	return (
		<>
			<div className="container m-3">
				<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1">
					<div className="col">
						<p>
							To delete your account, click the Delete button below. Your
							account will be deleted and will be unretrievable. To regain
							access, you will need to sign up again.
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-12 col-md-6 offset-md-3 text-center center">
						<button
							type="button"
							className="btn btn-danger"
							onClick={showModal}
						>
							Delete My Account
						</button>
						<div
							className="modal fade"
							id="deleteAccountModal"
							tabIndex={-1}
							aria-labelledby="deleteAccountModalLabel"
							aria-hidden="true"
						>
							<div className="modal-dialog">
								<div className="modal-content bg-danger-subtle">
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
									<div className="modal-body ">
										<p>Are you sure you want to delete your account? </p>
										<p>
											{" "}
											If so, click <b>Delete</b> to proceed.
										</p>
										<p>
											{" "}
											If not, then click <b>Close</b> or <b>X</b> to return to
											your account page.
										</p>
									</div>
									<div className="modal-footer">
										<button
											type="button"
											className="btn btn-secondary"
											data-bs-dismiss="modal"
										>
											Close
										</button>
										<button
											id="deleteAccountSubmitButton"
											type="button"
											className="btn btn-danger"
											onClick={handleDelete}
										>
											Delete
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div>
				{/* Output tag for displaying messages */}
				<output
					id="deleteOutputTag"
					className="d-block text-success pb-2"
				>
					{/* Display the feedback message state here */}
					{messageToDisplay}
				</output>
			</div>
		</>
	);

	// Lifecycle functions
	function componentDidMount() {
		// setDidMount(true);
		let action = set.deleteAccountDidMount(true);
		dispatch(action);
		console.log("The Delete Account component mounted.");
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
