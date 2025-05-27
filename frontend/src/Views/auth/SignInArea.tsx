import React, { useState, useEffect } from "react";
import { SignInModal } from "../auth/SignInModal";
import { SignOutModal } from "../auth/SignOutModal";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../../modules/state/store";
import {
	selectComponent,
	selectGlobalAccount,
	selectSignInAreaButton,
	selectSignInAreaDidMount,
} from "../../modules/state/stateSelectors";

export function SignInArea() {
	const account = useSelector(selectGlobalAccount);
	const component = useSelector(selectComponent);
	const signInAreaDidMount = useSelector(selectSignInAreaDidMount);
	const signInAreaButton = useSelector(selectSignInAreaButton);
	const dispatch = useDispatch();

	useEffect(componentDidMount, []);
	useEffect(componentDidUpdate, [account]);

	return (
		<>
			{signInAreaButton}
			{component ? React.createElement(component) : null}
		</>
	);

	function componentDidMount() {
		console.log("MOUNT PHASE: SignInArea");
		set.signInAreaButton;
		if (account) dispatch(set.component(SignOutModal));
		else dispatch(set.component(SignInModal));
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
