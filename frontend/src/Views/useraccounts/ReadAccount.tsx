import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	selectGlobalAccount,
	selectViewAccountDidMount,
} from "../../modules/state/stateSelectors";
import { set } from "../../modules/state/store";

export function ReadAccount() {
	// State for lifecycle tracking
	const viewAccountDidMount = useSelector(selectViewAccountDidMount);
	const dispatch = useDispatch();

	const account = useSelector(selectGlobalAccount);

	// Lifecycle hooks
	// useEffect(componentDidMount, []);
	// useEffect(componentDidUpdate);
	// useEffect(componentDidUnmount, []);
	useEffect(() => {
		componentDidMount();
		return () => componentDidUnmount();
	}, []);

	useEffect(() => {
		componentDidUpdate();
	});

	return (
		<main>
			<div className="container-fluid m-3">
				<div className="row row-cols-1 row-cols-md-1 row-cols-lg-1">
					<div className="col">
						<h3 id="viewAccount">My account</h3>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-12 col-sm-6 col-md-8 col-lg-12">
						{/* Output tag for displaying messages */}
						<div id="viewOutputTag">
							{/* Display the feedback message state here */}
							{/* Display feedback in a Bootstrap card */}
							{account && (
								<div className="card mt-3">
									<div className="card-body">
										<h5 className="card-title">Account Details</h5>
										<div className="card-text">
											{account.email && (
												<p className="mb-0">
													<strong>Email:</strong> {account.email}
												</p>
											)}
											{account.username && (
												<p className="mb-0">
													<strong>Username:</strong> {account.username}
												</p>
											)}
											{account.name && (
												<p className="mb-0">
													<strong>Name:</strong> {account.name}
												</p>
											)}
											{account.phone && (
												<p className="mb-0">
													<strong>Phone:</strong> {account.phone}
												</p>
											)}
											{/* Fallback if no details are found */}
											{!account.email &&
												!account.username &&
												!account.name &&
												!account.phone && (
													<p className="mb-0 text-muted">
														No account details available.
													</p>
												)}
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
				<br />
			</div>
		</main>
	);

	// Lifecycle functions
	function componentDidMount() {
		// setViewAccountDidMount(true);
		let action = set.viewAccountDidMount(true);
		dispatch(action);
		console.log("The Read Account component mounted.");

		// Update the tab title when the component mounts
		const titleTag = document.getElementById("titleTag");
		titleTag.innerHTML = "Alex M - Read Account ";
	}

	function componentDidUpdate() {
		// This useEffect runs on mount and every update if no dependency array or dependency array changes
		if (viewAccountDidMount) console.log("The Read Account component updated.");
	}
	function componentDidUnmount() {
		console.log("The Read Account component unmounted.");
	}
}
