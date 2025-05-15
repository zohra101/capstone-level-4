import React, { useEffect, useState } from "react";
import "../../src/index.scss";
import { CreateAccount } from "./useraccounts/CreateAccount";
import { ReadAccount } from "./useraccounts/ReadAccount";
import { UpdateAccount } from "./useraccounts/UpdateAccount";


export function Account() {
	const [didMount, setDidMount] = useState(false);

	useEffect(componentDidMount, []);
	useEffect(componentDidUpdate);
	useEffect(componentDidUnmount, []);

	return (
		<main>
			<div className="container m-3">
				<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1">
					<div className="col">
						{/*Add radio buttons so users can select an account action: create, view, update, delete*/}
						<CreateAccount/>
						<ReadAccount />
						<UpdateAccount/>					
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
