import React, { useEffect, useState } from "react";
import "../../index";
import { UserAccount } from "../../modules/dynamoDB/UserAccount";
import { updateUserAccount } from "../../modules/dynamoDB/updateUserAccount";

export function UpdateAccount() {
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
		const updatedUserAccount: UserAccount = {
			email: inputs.userEmail.value,
			password: inputs.userPassword.value,
			name: inputs.usersName.value,
			phone: inputs.userPhone.value,
		};

		console.log(
			"Attempting to update account for:",
			updatedUserAccount.email
		);

		// Call the frontend createUserAccount function and await the result
		// Based on backend/frontend function return, this is expected to be a string message
			const resultMessage = await updateUserAccount(updatedUserAccount);
			
				// Update the feedback message state with the result
				setFeedbackMessage(resultMessage); // Use the setter to update state
	}

    return (
			<main>
				<div className="container m-3">
					<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1">
						<div className="col">
							<h3 id="updateAccount">Update your account</h3>
							<p>
								To update your account, please make any changes in the fields
								below and submit the form.
							</p>
						</div>
					</div>
					<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 center">
						<div className="col">
							<form
								id="outputTag"
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
						</div>
					</div>
					<output id="updateOutputTag">
						{/* Display the feedback message state here */}
						{feedbackMessage}
					</output>
					<br />
				</div>
			</main>
		);

    function componentDidMount() {
        setDidMount(true);
        console.log("The Update Account component mounted.");

        const titleTag = document.getElementById("titleTag");
        titleTag.innerHTML = "Alex M - Update Account ";
    }

    function componentDidUpdate() {
        if (didMount) console.log("The Update Account  component updated.");
    }
    function componentDidUnmount() {
        return function displayMessage() {
            console.log("The Update Account  component unmounted.");
        };
    }
}
