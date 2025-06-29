import React, { useState, useEffect } from "react";
import { SignInContent } from "../../Views/auth/SignInContent";
import { handleSignInAttempt } from "../../controllers/handleSignInAttempt";
import { useDispatch } from "react-redux";
import { set } from "../../modules/state/store";
import { useNavigate } from "react-router";
import { Credentials } from "../../modules/state/Credentials";
import { getRootPath } from "../../utils/getRootPath";

export function SignInModal() {
	const dispatch = useDispatch();
	const [errorMessage, setErrorMessage] = useState("");
	const navigate = useNavigate();
	const rootPath = getRootPath();

	return (
		<>
			<button
				type="submit"
				className="btn btn-signin"
				data-bs-toggle="modal"
				data-bs-target="#signInModal"
			>
				Sign In
			</button>
			<div
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
						<form onSubmit={handleSubmit}>
							<div className="modal-body m-2 ivory">
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
									className="btn btn-dark"
								>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);

	async function handleSubmit(event: any) {
		event.preventDefault();

		const account = await handleSignInAttempt(event as any);

		const form = event.target.elements;
		const closeButton = form.closeButton;

		if (account) {
			//Authentication attempt
			const currentTimestamp = Date.now();
			const credentials: Credentials = {
				email: account.email,
				password: account.password,
				timestamp: currentTimestamp,
			};
			const loginString = JSON.stringify(credentials);
			localStorage.setItem("credentials", loginString);

			//Dispatch Redux actions to update global account and sign in area states
			const action1 = set.globalAccount(account);
			dispatch(action1);

			const action2 = set.signInButton(false);
			dispatch(action2);

			const action3 = set.signOutButton(true);
			dispatch(action3);


			// Clear any previous error messages
			setErrorMessage("");

			//Close modal
			closeButton.click();

			//Send user to the Home page, including fix for Git Pages
			navigate(rootPath + "/");

		} else {
			// Handle unsuccessful sign-in (e.g., display an error message)
			setErrorMessage("The email and password do not match.");
		}
	}
}
