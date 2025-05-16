import React, { useEffect, useState } from "react";
import "../../src/index.scss";
import { useDispatch, useSelector } from "react-redux";
import {
	selectDidMount,
} from "../modules/state/stateSelectors";
import { CreateAccount } from "./useraccounts/CreateAccount";
import { ViewAccount } from "./useraccounts/ViewAccount";
import { UpdateAccount } from "./useraccounts/UpdateAccount";
import { DeleteAccount } from "./useraccounts/DeleteAccount";
import { set } from "../modules/state/store";

export function Account() {
	// const [didMount, setDidMount] = useState(false);
	const didMount = useSelector(selectDidMount);
	// let component: any = useSelector(selectComponent);
	const [selectedComponent, setSelectedComponent] =
		useState(null); // Explicit type

	const dispatch = useDispatch();

	useEffect(componentDidMount, []);
	useEffect(componentDidUpdate);
	useEffect(componentDidUnmount, []);

	// Add onclick handler

	function handleRadioButton(onclick: any) {
		const inputs = onclick.currentTarget.elements;
		const createAcct = inputs[0].checked;
		const viewAcct = inputs[1].checked;
		const updateAcct = inputs[2].checked;
		const delAcct = inputs[3].checked;

		let componentToShow: React.ReactNode | null = null;

		if (createAcct) componentToShow = <CreateAccount />;
		if (viewAcct) componentToShow = <ViewAccount />;
		if (updateAcct) componentToShow = <UpdateAccount />;
		if (delAcct) componentToShow = <DeleteAccount />;

		setSelectedComponent(componentToShow);
	}

	return (
		<main>
			<div className="container m-3">
				<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1">
					<div className="col">
						<fieldset
							onClick={handleRadioButton}
							className="ms-4"
						>
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
							<output>{selectedComponent}</output>
						</div>
					</div>
				</div>
			</div>
			<br />
		</main>
	);

	function componentDidMount() {
		// setDidMount(true);
		let action = set.didMount(true);
		dispatch(action);
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
