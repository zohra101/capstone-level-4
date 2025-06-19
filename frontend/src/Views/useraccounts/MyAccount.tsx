import React, { useEffect, useState } from "react";
// import "../../src/index.scss";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../../modules/state/store";
import { UpdateAccount } from "./UpdateAccount";
import { selectAccountDidMount, selectComponent } from "../../modules/state/stateSelectors";
import { DeleteAccountModal } from "./DeleteAccountModal";

export function Account() {
	const accountDidMount = useSelector(selectAccountDidMount);
	const dispatch = useDispatch();

	const component = useSelector(selectComponent);

	useEffect(componentDidMount, []);
	useEffect(componentDidUpdate);
	useEffect(componentDidUnmount, []);

	// Add onclick handler
	function handleRadioButton(onclick: any) {
		const inputs = onclick.currentTarget.elements;
		const updateAcct = inputs[0].checked;
		const delAcct = inputs[1].checked;

		if (updateAcct) dispatch(set.component("update"));
		if (delAcct) dispatch(set.component("delete"));
	}

	return (
		<>
			<main>
				<div className="container m-3">
					<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1">
						{/* Output tag for displaying messages */}
						<output id="viewOutputTag">

						</output>
						<div className="col">
							<fieldset
								onClick={handleRadioButton}
								className="ms-4"
							>
								<legend
									id="legend"
									className="mb-3"
								>
									<h3>Select an account action</h3>
								</legend>
								<input
									type="radio"
									id="updateAcct"
									name="accountAction"
									className="p-2 ms-2"
									aria-label="Update your account"
								/>
								<span> Update your account </span>
								<input
									type="radio"
									id="delAcct"
									name="accountAction"
									className="p-2 ms-2"
									aria-label="Delete your account"
								/>
								<span> Delete your account </span>
							</fieldset>
						</div>
						<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1">
							<div className="col">
								<output>
									{component === "update" && <UpdateAccount />}
									{component === "delete" && <DeleteAccountModal />}
								</output>
							</div>
						</div>
					</div>
				</div>
				<br />
			</main>
		</>
	);

	function componentDidMount() {
		let action = set.accountDidMount(true);
		dispatch(action);
		console.log("The Account component mounted.");

		const titleTag = document.getElementById("titleTag");
		titleTag.innerHTML = "Alex M - Account";
	}

	function componentDidUpdate() {
		if (accountDidMount) console.log("The Account component updated.");
	}

	function componentDidUnmount() {
		return function displayMessage() {
			console.log("The Account component unmounted.");
		};
	}
}
