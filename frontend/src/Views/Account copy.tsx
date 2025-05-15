import React, { useEffect, useState } from "react";
import "../../src/index.scss";
import { CreateAccount } from "./useraccounts/CreateAccount";
import { ViewAccount } from "./useraccounts/ViewAccount";
import { UpdateAccount } from "./useraccounts/UpdateAccount";
import { DeleteAccount } from "./useraccounts/DeleteAccount";

export function Account() {
	const [didMount, setDidMount] = useState(false);

	useEffect(componentDidMount, []);
	useEffect(componentDidUpdate);
	useEffect(componentDidUnmount, []);

	function accountAction() {
		const inputs = event.target;
		const createAcct = inputs[0];
		const viewAcct = inputs[1];
		const updateAcct = inputs[2];
		const delAcct = inputs[3];

		const createAcctChecked = createAcct.checked;
		const viewAcctChecked = viewAcct.checked;
		const updateAcctChecked = updateAcct.checked;
		const delAcctChecked = delAcct.checked;

		if (createAcctChecked) return <CreateAccount/>;
		if (viewAcctChecked) return <ViewAccount/>;
		if (updateAcctChecked) return <UpdateAccount/>;
		if (delAcctChecked) return <DeleteAccount/>;
	}
	
	return (
		<main>
			<div className="container m-3">
				<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1">
					<div className="col">
						<fieldset className="ms-4">
							<legend id="legend">
								<h3>Select an action</h3>
							</legend>
							<input
								type="radio"
								id="createAcct"
								name="accountAction"
								className="p-2"
								aria-label="Create an account"
							/>
							<span> Create an account </span>
							<input
								type="radio"
								id="viewAcct"
								name="accountAction"
								className="p-2 ms-2"
								aria-label="View your account"
							/>
							<span> View your account </span>
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
							<output>{accountAction}</output>
						</div>
					</div>
				</div>
			</div>
			<br />
		</main>
	);

	function componentDidMount() {
		setDidMount(true);
		console.log("The Account component mounted.");

		const titleTag = document.getElementById("titleTag");
		titleTag.innerHTML = "Alex M - Account";
	}

	function componentDidUpdate() {
		if (didMount) console.log("The Account component updated.");
	}
	function componentDidUnmount() {
		return function displayMessage() {
			console.log("The Account component unmounted.");
		};
	}
}

