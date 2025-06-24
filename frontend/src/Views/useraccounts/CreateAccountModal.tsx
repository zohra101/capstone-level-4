import React, { useEffect, useState } from "react";
import { createUserAccount } from "../../modules/dynamoDB/createUserAccount";
import { UserAccount } from "../../modules/dynamoDB/UserAccount";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../../modules/state/store";
import {
	selectCreateFeedbackMessage,
	selectCreateAccountDidMount,
	selectGlobalAccount,
} from "../../modules/state/stateSelectors";

// Declare modal instance variable outside component to keep it persistent
let bsModalInstance: any = null;

export function CreateAccountModal() {
	const globalAccount = useSelector(selectGlobalAccount);
	const createAccountDidMount = useSelector(selectCreateAccountDidMount);
	const dispatch = useDispatch();
	const messageToDisplay = useSelector(selectCreateFeedbackMessage);
	const isSuccess =
		messageToDisplay === "Your account was created successfully.";

	// Lifecycle hooks
	useEffect(componentDidMount, []);
	useEffect(componentDidUpdate);
	useEffect(componentDidUnmount, []);

	if (globalAccount) return null;

	// Function to handle form submission
	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		// Add event type for type safety
		event.preventDefault(); // Prevent default form page reload

		// Get input values from the form elements
		const form = event.target as HTMLFormElement;
		const inputs = form.elements as any;

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
		const createResultMessage: string = await createUserAccount(newUserAccount);

		// Update the feedback message state with the result
		// setFeedbackMessage(resultMessage); // Use the setter to update state

		let action = set.createFeedbackMessage(createResultMessage);
		dispatch(action);

		// Automatically vlose the modal after the account is created
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
	}

	return (
		<>
			<button
				type="button"
				className="btn btn-outline-warning ms-3"
				data-bs-toggle="modal"
				data-bs-target="#createAccountModal"
			>
				Create Account
			</button>

			<div
				className="modal fade"
				id="createAccountModal"
				tabIndex={-1}
				aria-labelledby="createAccountModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content modal-style">
						<div className="modal-header">
							<h1
								className="modal-title fs-5"
								id="createAccountModalLabel"
							>
								Create Account
							</h1>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
								onClick={() => {
									const form = document.getElementById(
										"createAccountForm"
									) as HTMLFormElement;
									form?.reset();
									dispatch(set.createFeedbackMessage(""));
								}}
							/>
						</div>

						<form
							id="createAccountForm"
							onSubmit={handleSubmit}
						>
							<div className="modal-body m-2 ivory">
								<p>
									Please fill out the form below to create your new account. All
									fields are required. Use a strong password for your security.
								</p>
								{/* Email */}
								<div className="mb-3">
									<label
										htmlFor="userEmailCreate"
										className="form-label fw-bold"
									>
										Email
									</label>
									<input
										required
										type="email"
										id="userEmailCreate"
										className="form-control"
										placeholder="address@domain.com"
									/>
								</div>
								{/* Username */}
								<div className="mb-3">
									<label
										htmlFor="userNameCreate"
										className="form-label fw-bold"
									>
										Username
									</label>
									<input
										required
										type="text"
										id="userNameCreate"
										className="form-control"
										placeholder="YourUserName"
									/>
								</div>
								{/* Name */}
								<div className="mb-3">
									<label
										htmlFor="usersNameCreate"
										className="form-label fw-bold"
									>
										Name
									</label>
									<input
										required
										type="text"
										id="usersNameCreate"
										className="form-control"
										placeholder="YourName"
									/>
								</div>
								{/* Password */}
								<div className="mb-3">
									<label
										htmlFor="userPasswordCreate"
										className="form-label fw-bold"
									>
										Password
									</label>
									<input
										required
										type="password"
										id="userPasswordCreate"
										className="form-control"
										placeholder="Strong25@pass#"
									/>
								</div>
								{/* Phone */}
								<div className="mb-3">
									<label
										htmlFor="userPhoneCreate"
										className="form-label fw-bold"
									>
										Phone
									</label>
									<input
										required
										type="tel"
										pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
										id="userPhoneCreate"
										className="form-control"
										placeholder="555-555-5555"
									/>
								</div>
								{/* Feedback Message */}
								<output
									id="createOutputTag"
									className="d-block text-success pb-2"
								>
									{messageToDisplay}
								</output>
							</div>

							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-secondary"
									data-bs-dismiss="modal"
									onClick={() => {
										const form = document.getElementById(
											"createAccountForm"
										) as HTMLFormElement;
										form?.reset();
										dispatch(set.createFeedbackMessage(""));
									}}
								>
									Close
								</button>
								<button
									type="submit"
									className="btn btn-dark"
									disabled={isSuccess}
								>
									Create
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);

	// Lifecycle functions

	function componentDidMount() {
		// setDidMount(true);
		let action = set.createAccountDidMount(true);
		dispatch(action);
		console.log("The Create Account component mounted.");

		// Initialize the modal instance using the global bootstrap object
		const modalElement = document.getElementById("createAccountModal");
		if (modalElement && (window as any).bootstrap) {
			bsModalInstance = (window as any).bootstrap.Modal.getOrCreateInstance(
				modalElement
			);
		}
	}

	function componentDidUpdate() {
		// This useEffect runs on mount and every update if no dependency array or dependency array changes
		if (createAccountDidMount)
			console.log("The Create Account component updated.");
	}
	function componentDidUnmount() {
		return function displayMessage() {
			console.log("The Create Account component unmounted.");
			let action = set.createFeedbackMessage("");
			dispatch(action);
		};
	}
}
