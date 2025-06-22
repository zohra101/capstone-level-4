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

export function SignInArea() {
	// Redux selectors to get necessary state from store
	const account = useSelector(selectGlobalAccount);
	const signInAreaDidMount = useSelector(selectSignInAreaDidMount);
	const signInButton = useSelector(selectSignInButton);
	const signOutButton = useSelector(selectSignOutButton);

	// These Redux selectors indicate if the modal *component itself* should be rendered at all.
	const signInModal = useSelector(selectSignInModal);
	const signOutModal = useSelector(selectSignOutModal);

	const dispatch = useDispatch();

	useEffect(componentDidMount, []);
	useEffect(componentDidUpdate, [account]);

	return (
		<>
			<div className="ms-3">
				{signInModal && <SignInModal />}
				{signOutModal && <SignOutModal />}
			</div>
		</>
	);

	function componentDidMount() {
		console.log("MOUNT PHASE: SignInArea");
		dispatch(set.signInButton(true));
		dispatch(set.signInAreaDidMount(true));

		getPersistentLogin();

	}

	function componentDidUpdate() {
		if (signInAreaDidMount) {
			console.log("UPDATE PHASE: SignInArea");
			if (account) {
				dispatch(set.signInButton(false)); // hide sign in button
				dispatch(set.signOutButton(true)); // show sign out button
				dispatch(set.signInModal(false)); // hide sign in modal
				dispatch(set.signOutModal(true)); // show sign out modal
			} else {
				dispatch(set.signInButton(true));
				dispatch(set.signOutButton(false));
				dispatch(set.signInModal(true));
				dispatch(set.signOutModal(false));
			}
		}
	}

	async function getPersistentLogin() {
		let account: UserAccount = undefined;
		const login = localStorage.getItem("credentials");
		if (login) {
			const credentials: Credentials = JSON.parse(login);
			const { email, password } = credentials;
			account = await authenticationAws(email, password);
			if (account) {
				const action = set.globalAccount(account);
				dispatch(action);
			} else localStorage.setItem("credentials", undefined);	
		}
		if (account) dispatch(set.component("SignOut"));
		else dispatch(set.component("SignIn"));
	}
}
