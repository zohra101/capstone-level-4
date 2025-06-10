import React, { useEffect, useState } from "react";
import { readUserAccount } from "../../modules/dynamoDB/readUserAccount";
import { UserAccount } from "../../modules/dynamoDB/UserAccount";
import { useDispatch, useSelector } from "react-redux";
import { selectGlobalAccount, selectViewAccountDidMount } from "../../modules/state/stateSelectors";
import { set } from "../../modules/state/store";

export function ViewAccount() {
	// State for lifecycle tracking
	// const [viewAccountDidMount, setViewAccountDidMount] = useState(false);
	const viewAccountDidMount = useSelector(selectViewAccountDidMount);
	const dispatch = useDispatch();

	// State for displaying feedback messages from the backend
	// const [feedbackMessage, setFeedbackMessage] = useState<string>("");
	const account = useSelector(selectGlobalAccount);
	
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
			email: inputs.userEmailView.value,
			password: inputs.userPasswordView.value,
		};

		console.log(
			"Attempting to retrieve account for:",
			existingUserAccount.email
		);

		// Call the frontend createUserAccount function and await the result
		// Based on backend/frontend function return, this is expected to be a string message
		const accountDetails = await readUserAccount(existingUserAccount);
		let action = set.globalAccount(accountDetails);
		if (accountDetails) dispatch(action);
		else console.log("Account not found or error reading account");
	}

	return (
		<main>
			<div className="container m-3">
				<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1">
					<div className="col">
						<h3 id="viewAccount">View your account</h3>
						<p>
							To view your account, enter your email and password below. Then
							click Submit.
						</p>
					</div>
				</div>
				<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 center">
					<div className="col">
						<form
							id="viewAccountForm"
							onSubmit={handleSubmit}
						>
							<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 p-2">
								<div className="col">
									<span style={{ fontWeight: "bold" }}>
										<label htmlFor="userEmailView">Email</label>
										<br />
									</span>
									<input
										required
										type="email"
										name="email"
										id="userEmailView"
										className="inputs"
										placeholder="address@domain.com"
									/>
								</div>
							</div>
							<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 p-2">
								<div className="col">
									<span style={{ fontWeight: "bold" }}>
										<label htmlFor="userPasswordView">Password</label>
										<br />
									</span>
									<input
										required
										type="password"
										name="password"
										id="userPasswordView"
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
						<output id="viewOutputTag">
							{/* Display the feedback message state here */}
							{/* Display feedback in a Bootstrap card */}
							{account && (
								<div className="card mt-3">
									<div className="card-body">
										<h5 className="card-title">Account Details</h5>
										<div className="card-text">
											{account.email && (
												<p className="mb-0">
													<strong>Email:</strong> {account.email}
												</p>
											)}
											{account.username && (
												<p className="mb-0">
													<strong>Username:</strong> {account.username}
												</p>
											)}
											{account.name && (
												<p className="mb-0">
													<strong>Name:</strong> {account.name}
												</p>
											)}
											{account.phone && (
												<p className="mb-0">
													<strong>Phone:</strong> {account.phone}
												</p>
											)}
											{/* Fallback if no details are found */}
											{!account.email &&
												!account.username &&
												!account.name &&
												!account.phone && (
													<p className="mb-0 text-muted">
														No account details available.
													</p>
												)}
										</div>
									</div>
								</div>
							)}
						</output>
					</div>
				</div>
				<br />
			</div>
		</main>
	);

	// Lifecycle functions
	function componentDidMount() {
		// setViewAccountDidMount(true);
		let action = set.viewAccountDidMount(true);
		dispatch(action);
		console.log("The Read Account component mounted.");

		// Update the tab title when the component mounts
		const titleTag = document.getElementById("titleTag");
		titleTag.innerHTML = "Alex M - Read Account ";
	}

	function componentDidUpdate() {
		// This useEffect runs on mount and every update if no dependency array or dependency array changes
		if (viewAccountDidMount) console.log("The Read Account component updated.");
	}
	function componentDidUnmount() {
		return function displayMessage() {
			console.log("The Read Account component unmounted.");
		};
	}
}
