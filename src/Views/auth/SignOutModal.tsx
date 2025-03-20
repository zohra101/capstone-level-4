import React from "react";

export function SignOutModal(props) {
	const onSignOut = props.onSignOut;

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
				tabIndex="-1"
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

	function handleSubmit(event = new Event()) {
		event.preventDefault();
		const inputs = event.target;
		const closeButton = inputs[1];
		closeButton.click();
		onSignOut();
	}
}
