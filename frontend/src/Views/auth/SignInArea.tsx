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

	return <>{}</>;

	function componentDidMount() {
		console.log("MOUNT PHASE: SignInArea");
		dispatch(set.signInButton);
		if (account) dispatch(set.component(signOutModal));
		else dispatch(set.component(signInModal));
		let action = set.signInAreaDidMount(true);
		dispatch(action);
	}

	function componentDidUpdate() {
		if (signInAreaDidMount) {
			console.log("UPDATE PHASE: SignInArea");
			if (account) dispatch(set.component(SignOutModal));
			else dispatch(set.component(SignInModal));
		}
	}
}
