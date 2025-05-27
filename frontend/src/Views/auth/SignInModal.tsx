import React, { useState, useEffect } from "react";
import { SignInContent } from "../../Views/auth/SignInContent";
import { handleSignInAttempt } from "../../controllers/handleSignInAttempt";
import { useDispatch, useSelector } from "react-redux";
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
			const action = set.globalAccount(account);
			dispatch(action);
			console.log(closeButton)
			closeButton.click();
		} else
			setErrorMessage(
				"The email and password provided do not match an existing account."
			);
	}
}
