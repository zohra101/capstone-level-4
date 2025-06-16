import React, { useState, useEffect } from "react";
import { SignInContent } from "../../Views/auth/SignInContent";
import { handleSignInAttempt } from "../../controllers/handleSignInAttempt";
import { useDispatch } from "react-redux";
import { set } from "../../modules/state/store";

export function SignInModal() {
	const dispatch = useDispatch();
	const [errorMessage, setErrorMessage] = useState("");

	return (
		<>
			<button
				type="submit"
				className="btn btn-light"
				data-bs-toggle="modal"
				data-bs-target="#signInModal"
			>
				Sign In
			</button>
			<form
				onSubmit={handleSubmit}
				className="modal fade"
				id="signInModal"
				tabIndex={-1}
				aria-labelledby="signInModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog ">
					<div className="modal-content modal-style">
						<div className="modal-header">
							<h1
								className="modal-title fs-5"
								id="signInModalLabel"
							>
								Sign In
							</h1>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body m-2">
							<SignInContent errorMessage={errorMessage} />
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
								Submit
							</button>
						</div>
					</div>
				</div>
			</form>
		</>
	);

	async function handleSubmit(event: any) {
		event.preventDefault();

		const account = await handleSignInAttempt(event as any);

		const form = event.target.elements;
		const closeButton = form.closeButton;

		if (account) {
			// Step 1: Successful Authentication
			// Step 2: Dispatch Redux Action to update global account state
			const action = set.globalAccount(account);
			dispatch(action);

			// Step 3: Clear any previous error messages
			setErrorMessage("");

			// Step 4: Dismiss the Bootstrap modal using its native JavaScript API
			const signInModalElement = document.getElementById("signInModal");
			if (signInModalElement) {
				// Get the Bootstrap modal instance
				// (Note: 'bootstrap' needs to be available in the global scope or imported)
				const modalInstance = (window as any).bootstrap.Modal.getInstance(
					signInModalElement
				);
				if (modalInstance) {
					modalInstance.hide(); // Hides the modal
				} else {
					// If no instance exists (e.g., modal not yet fully initialized by Bootstrap),
					// create a new instance and then hide it.
					new (window as any).bootstrap.Modal(signInModalElement).hide();
				}
			}
		} else {
			// Handle unsuccessful sign-in (e.g., display an error message)
			setErrorMessage(
				"The email and password provided do not match."
			);
		}
	}
}
