import React, { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../../modules/state/store";

export function SignOutModal() {
	const dispatch = useDispatch();

	return (
		<>
			<button
				type="button"
				className="btn btn-primary"
				data-bs-toggle="modal"
				data-bs-target="#signOutModal">
				Sign Out
			</button>
			<form
				onSubmit={handleSubmit}
				className="modal fade"
				id="signOutModal"
				tabIndex={-1}
				aria-labelledby="signOutModalLabel"
				aria-hidden="true">
				<div className="modal-dialog modal-style">
					<div className="modal-content">
						<div className="modal-header">
							<h1
								className="modal-title fs-5"
								id="signOutModalLabel">
								Sign Out
							</h1>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"></button>
						</div>
						<div className="modal-body">Are you sure you want to sign out?</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-bs-dismiss="modal">
								Close
							</button>
							<button
								id="signOutSubmitButton"
								type="submit"
								className="btn btn-primary">
								Submit
							</button>
						</div>
					</div>
				</div>
			</form>
		</>
	);

	function handleSubmit(event: FormEvent) {
		event.preventDefault();
		const inputs = event.target;
		const closeButton = inputs[1];
		closeButton.click();
		const action = set.globalAccount(undefined);
		dispatch(action);
		// onSignOut();
	}
}
