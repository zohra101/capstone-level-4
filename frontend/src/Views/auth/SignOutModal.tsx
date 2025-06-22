import React, { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../../modules/state/store";

export function SignOutModal() {
	const dispatch = useDispatch();

	return (
		<>
			<button
				type="button"
				className="btn btn-signin"
				data-bs-toggle="modal"
				data-bs-target="#signOutModal"
			>
				Sign Out
			</button>
			<div
				className="modal fade"
				id="signOutModal"
				tabIndex={-1}
				aria-labelledby="signOutModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content modal-style">
						<div className="modal-header">
							<h1
								className="modal-title fs-5"
								id="signOutModalLabel"
							>
								Sign Out
							</h1>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">Are you sure you want to sign out?</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-bs-dismiss="modal"
							>
								Close
							</button>
							<button
								id="signOutSubmitButton"
								type="button"
								className="btn btn-dark"
								data-bs-dismiss="modal"
								onClick={handleSignOut}
							>
								Sign Out
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);

	function handleSignOut(event: React.MouseEvent<HTMLButtonElement>) {
		event.preventDefault();

		const action = set.globalAccount(undefined);
		dispatch(action);

		localStorage.setItem("credentials", undefined);
	}
}
