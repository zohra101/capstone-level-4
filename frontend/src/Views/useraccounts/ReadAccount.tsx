import React, { useEffect, useState } from "react";
import "../../index";
import { readUserAccount } from "../../modules/dynamoDB/readUserAccount";
import { UserAccount } from "../../modules/dynamoDB/UserAccount";

export function ReadAccount() {
	// State for lifecycle tracking
	const [didMount, setDidMount] = useState(false);

	// State for displaying feedback messages from the backend
	const [feedbackMessage, setFeedbackMessage] = useState<string>("");

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
			email: inputs.userEmail.value,
			password: inputs.userPassword.value,
		};

		console.log(
			"Attempting to retrieve account for:",
			existingUserAccount.email
		);

		// Call the frontend createUserAccount function and await the result
		// Based on backend/frontend function return, this is expected to be a string message
		await readUserAccount(existingUserAccount);
		const feedbackMessage = `Email: ${existingUserAccount.email || "N/A"}<br />
				 Username: ${existingUserAccount.username || "N/A"}<br />
				 Name: ${existingUserAccount.name || "N/A"}<br />
                 Phone: ${existingUserAccount.phone || "N/A"}`;

		// Update the feedback message state with the result
		setFeedbackMessage(feedbackMessage); // Use the setter to update state
	}

	return (
		<main>
			<div className="container m-3">
				<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1">
					<div className="col">
						<h3 id="viewAccount">View your account information</h3>
						<p>
							To view your account, enter your email and
							password below.
						</p>
					</div>
				</div>
				<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 center">
					<div className="col">
						<form
							id="readAccountForm"
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
						<output
							id="readOutputTag"
						>
							{/* Display the feedback message state here */}
							{feedbackMessage}
						</output>
					</div>
				</div>
				<br />
			</div>
		</main>
	);

	// Lifecycle functions
	function componentDidMount() {
		setDidMount(true);
		console.log("The Read Account component mounted.");

		// Update the tab title when the component mounts
		const titleTag = document.getElementById("titleTag");
		titleTag.innerHTML = "Alex M - Read Account ";
	}

	function componentDidUpdate() {
		// This useEffect runs on mount and every update if no dependency array or dependency array changes
		if (didMount) console.log("The Read Account component updated.");
	}
	function componentDidUnmount() {
		return function displayMessage() {
			console.log("The Read Account  component unmounted.");
		};
	}
}
