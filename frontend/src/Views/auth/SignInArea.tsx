import React, { useState, useEffect } from "react";
import { SignInModal } from "../auth/SignInModal";
import { SignOutModal } from "../auth/SignOutModal";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../../modules/state/store";
import {
	selectGlobalAccount,
	selectSignInButton,
	selectSignInAreaDidMount,
	selectSignOutButton,
	selectSignInModal,
	selectSignOutModal,
} from "../../modules/state/stateSelectors";
import { Credentials } from "../../modules/state/Credentials";
import { authenticationAws } from "../../modules/authentication/authenticationAws";
import { UserAccount } from "../../modules/dynamoDB/UserAccount";
import { get } from "http";

export function SignInArea() {
	// Redux selectors to get necessary state from store
	const account = useSelector(selectGlobalAccount);
	const signInAreaDidMount = useSelector(selectSignInAreaDidMount);
	const signInButton = useSelector(selectSignInButton);
	const signOutButton = useSelector(selectSignOutButton);

	const dispatch = useDispatch();

	useEffect(componentDidMount, []);
	useEffect(componentDidUpdate, [signInAreaDidMount, account]);

	return (
		<>
			<div className="ms-3">
				{signInButton && <SignInModal />}
				{signOutButton && <SignOutModal />}
			</div>
		</>
	);

	function componentDidMount() {
		console.log("MOUNT PHASE: SignInArea");
		dispatch(set.signInButton(true));
		dispatch(set.signInAreaDidMount(true));
	}

	function componentDidUpdate() {
		// Only check for persistent login if the area has mounted AND there is no account currently set.
		// This prevents continuous checks when an account is already active or after sign-out.
		if (signInAreaDidMount) {
			// console.log("UPDATE PHASE: SignInArea");
			getPersistentLogin();
		}

		async function getPersistentLogin() {
			console.log("FUNCTION CALL: getPersistentLogin started.");
			let account: UserAccount = undefined; //Set account as undefined to initialize the process

			const login = localStorage.getItem("credentials"); //Get creds from localStorage
			console.log(
				"localStorage 'credentials' value (BEFORE JSON.parse):",
				login,
				"Type:",
				typeof login
			);

			if (login === null || login === "undefined") {
				console.log("Credentials in localStorage are null undefined'. Skipping JSON.parse.");
				localStorage.removeItem("credentials"); // Clean up potentially invalid data
			}

			if (login) {
				//If creds exist and are not blank or null
				const credentials: Credentials = JSON.parse(login); //Parse creds
				const { email, password, timestamp } = credentials; //Destructure creds
				const currentTimestamp = Date.now(); //Get current timestamp
				const elapsedTime = currentTimestamp - timestamp; //Calculate elapsed time since log in
				const isExpired = elapsedTime > 50000; //Set timeout period for sign out

				console.log(
					"currentTimestamp:",
					currentTimestamp,
					"timestamp:",
					timestamp,
					"Elapsed time:",
					elapsedTime,
					"Expired?",
					isExpired
				);

				if (isExpired) {
					//If timeoout is reeached
					console.log("Timeout expired. Logging out.");
					localStorage.removeItem("credentials"); //Remove creds from localStorage
					const actionSetGlobalAccount = set.globalAccount(undefined);
					const actionSetSignInButton = set.signInButton(true); 
					const actionSetSignOutButton = set.signOutButton(false); //Ensure SignOut button is hidden

					dispatch(actionSetGlobalAccount);
					dispatch(actionSetSignInButton);
					dispatch(actionSetSignOutButton);
			
				} else {
					account = await authenticationAws(email, password); //Authenticate the user

					if (account) {
						//If authenticated
						console.log("Authentication successful. Setting global account.");
						const actionSetGlobalAccount = set.globalAccount(account);
						const actionSetSignInButton = set.signInButton(false); //Ensure SignIn button is hidden
						const actionSetSignOutButton = set.signOutButton(true); 

						dispatch(actionSetGlobalAccount);
						dispatch(actionSetSignInButton);
						dispatch(actionSetSignOutButton);
					} else {
						console.log(
							"Authentication failed for non-expired credentials. Logging out."
						);
						localStorage.removeItem("credentials");
						const actionSetGlobalAccount = set.globalAccount(undefined);
						const actionSetSignInButton = set.signInButton(true); 
						const actionSetSignOutButton = set.signOutButton(false); //Ensure SignOut button is hidden

						dispatch(actionSetGlobalAccount);
						dispatch(actionSetSignInButton);
						dispatch(actionSetSignOutButton);
					}
				}
			} else {
				console.log(
					"No persistent credentials found. Ensuring signed-out state."
				);

				if (account) {
					const actionSetGlobalAccount = set.globalAccount(account);
					dispatch(actionSetGlobalAccount);
				}
			
				const actionSetSignInButton = set.signInButton(true); //Show SignIn button
				const actionSetSignOutButton = set.signOutButton(false); //Hide SignOut button

				dispatch(actionSetSignInButton);
				dispatch(actionSetSignOutButton);
			}
		}
	}

}
