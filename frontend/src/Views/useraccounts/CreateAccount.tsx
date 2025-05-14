import React, { useEffect, useState } from "react";
import "../../index"
import { createUserAccount } from "../../modules/dynamoDB/createUserAccount";
import { UserAccount } from "../../modules/dynamoDB/UserAccount";

export function CreateAccount() {
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
		const target = event.target as typeof event.target & {
			userEmail: { value: string };
			userName: { value: string };
			usersName: { value: string };
			userPassword: { value: string };
			userPhone: { value: number };
		};

		// Construct the UserAccount object
		const newUserAccount: UserAccount = {
			email: target.userEmail.value,
			password: target.userPassword.value,
			username: target.userName.value,
			name: target.usersName.value,
			phone: target.userPhone.value,
		};

		console.log("Attempting to create account with:", newUserAccount);

		// Call the frontend createUserAccount function and await the result
		// Based on backend/frontend function return, this is expected to be a string message
		const resultMessage = await createUserAccount(newUserAccount);

		// Update the feedback message state with the result
		setFeedbackMessage(resultMessage); // Use the setter to update state [13]
	}

	return (
		// Connect the handleSubmit function to the form's onSubmit even
		<main>
			<div className="container m-3">
				<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1">
					<div className="col">
						<h3 id="registerAccount">Register for an account</h3>
						<p>
							Your Nivedana Design account allows you to view consultation notes
							and proposals for projects.
						</p>
						<p>To register, please complete the fields below and submit the form.
						</p>
					</div>

					{/* Output tag for displaying messages */}
					<output id="createOutputTag">
						{/* Display the feedback message state here */}
						{feedbackMessage} {/* Render the state variable [12, 13] */}
					</output>
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
										<label htmlFor="userEmail">Email</label>
										<br />
									</span>
									<input
										required
										type="email"
										id="userEmail"
										className="inputs"
										placeholder="address@domain.com"
									/>
								</div>
							</div>
							<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 p-2">
								<div className="col">
									<span style={{ fontWeight: "bold" }}>
										<label htmlFor="userName">Username</label>
										<br />
									</span>
									<input
										required
										type="userName"
										id="userName"
										className="inputs"
										placeholder="YourUserName"
									/>
								</div>
							</div>
							<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 p-2">
								<div className="col">
									<span style={{ fontWeight: "bold" }}>
										<label htmlFor="usersName">Name</label>
										<br />
									</span>
									<input
										required
										type="userName"
										id="usersName"
										className="inputs"
										placeholder="YourName"
									/>
								</div>
							</div>
							<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 p-2">
								<div className="col">
									<span style={{ fontWeight: "bold" }}>
										<label htmlFor="userPassword">Passaword</label>
										<br />
									</span>
									<input
										required
										type="password"
										id="userPassword"
										className="inputs"
										placeholder="Strong25@pass#"
									/>
								</div>
							</div>
							<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 p-2">
								<div className="col">
									<span style={{ fontWeight: "bold" }}>
										<label htmlFor="userPhone">Phone</label>
										<br />
									</span>
									<input
										required
										type="tel"
										pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
										id="userPhone"
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
					</div>
				</div>
				<br />
			</div>
		</main>
	);

	// Lifecycle functions

	function componentDidMount() {
		setDidMount(true);
		console.log("The Create Account component mounted.");

		// Update the tab title when the component mounts
		const titleTag = document.getElementById("titleTag");
		document.title = "Alex M - Create Account ";
	}

	function componentDidUpdate() {
		// This useEffect runs on mount and every update if no dependency array or dependency array changes
		if (didMount) console.log("The Create Account component updated.");
	}
	function componentDidUnmount() {
		return function displayMessage() {
			console.log("The Create Account  component unmounted.");
		};
	}
}
