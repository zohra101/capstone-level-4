import React, { useEffect, useState } from "react";
// import "../../src/index.scss";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../modules/state/store";
import { UpdateAccount } from "./useraccounts/UpdateAccount";
import { selectAccountDidMount, selectComponent } from "../modules/state/stateSelectors";
import { DeleteAccount } from "./useraccounts/DeleteAccount";
import { ReadAccount } from "./useraccounts/ReadAccount";
import { selectGlobalAccount } from "../modules/state/stateSelectors";

export function MyAccountModal() {
	const globalAccount = useSelector(selectGlobalAccount);
	const accountDidMount = useSelector(selectAccountDidMount);
	const dispatch = useDispatch();

	const component = useSelector(selectComponent);

	useEffect(componentDidMount, []);
	useEffect(componentDidUpdate);
	useEffect(componentDidUnmount, []);

	if (!globalAccount) return null;

	// Add onclick handler
	function handleRadioButton(onclick: any) {
		const inputs = onclick.currentTarget.elements;
		const updateAcct = inputs[0].checked;
		const delAcct = inputs[1].checked;

		if (updateAcct) dispatch(set.component("update"));
		else if (delAcct) dispatch(set.component("delete"));
		else dispatch(set.component("")); // clear if none selected
	}

	return (
		<>
			<button
				type="button"
				className="btn btn-outline-warning ms-3"
				data-bs-toggle="modal"
				data-bs-target="#myAccountModal"
			>
				Manage My Account
			</button>

			<div
				className="modal fade"
				id="myAccountModal"
				tabIndex={-1}
				aria-labelledby="myAccountModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-lg">
					<div className="modal-content modal-style">
						<div className="modal-header">
							<h1
								className="modal-title fs-5"
								id="myAccountModalLabel"
							>
								My Account
							</h1>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
								onClick={() => {
									dispatch(set.component(""));
								}}
							/>
						</div>
						<div className="modal-body ivory">
							<output id="viewOutputTag">
								<ReadAccount />
							</output>

							<fieldset
								onClick={handleRadioButton}
								className="mt-3"
							>
								<legend
									id="legend"
									className="mb-3"
								>
									<h5>Select an account action</h5>
								</legend>
								<div className="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="accountAction"
										id="updateAcct"
										aria-label="Update your account"
									/>
									<label
										className="form-check-label"
										htmlFor="updateAcct"
									>
										Update your account
									</label>
								</div>
								<div className="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="accountAction"
										id="delAcct"
										aria-label="Delete your account"
									/>
									<label
										className="form-check-label"
										htmlFor="delAcct"
									>
										Delete your account
									</label>
								</div>
							</fieldset>

							<output className="d-block mt-3">
								{component === "update" && <UpdateAccount />}
								{component === "delete" && <DeleteAccount />}
							</output>
						</div>

						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-bs-dismiss="modal"
								onClick={handleCloseModal}
							>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);

	function handleCloseModal(event: any) {
		const action = set.component("");
		dispatch(action);
		const updateRadioButton: any = document.getElementById("updateAcct");
		const deleteRadioButton: any = document.getElementById("delAcct");
		updateRadioButton.checked = false;
		deleteRadioButton.checked = false;
	}
	

	function componentDidMount() {
		let action = set.accountDidMount(true);
		dispatch(action);
		console.log("The My Account component mounted.");

		const titleTag = document.getElementById("titleTag");
		titleTag.innerHTML = "Alex M - My Account";
	}

	function componentDidUpdate() {
		if (accountDidMount) console.log("The My Account component updated.");
	}

	function componentDidUnmount() {
		return function displayMessage() {
			console.log("The My Account component unmounted.");
		};
	}
}


