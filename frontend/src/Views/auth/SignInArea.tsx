import React, { useState, useEffect } from "react";
import { SignInModal } from "../auth/SignInModal";
import { SignOutModal } from "../auth/SignOutModal";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../../modules/state/store";
import {
	selectGlobalAccount,

	selectSignInAreaDidMount,
} from "../../modules/state/stateSelectors";

export function SignInArea() {
	const account = useSelector(selectGlobalAccount);
	const [button, setButton] = useState(<></>);
	const signInAreaDidMount = useSelector(selectSignInAreaDidMount);

	const dispatch = useDispatch();

	useEffect(componentDidMount, []);
	useEffect(componentDidUpdate, [account]);

	return <>{button}</>;

	function componentDidMount() {
		console.log("MOUNT PHASE: SignInArea");
		if (account) setButton(<SignOutModal />);
		else setButton(<SignInModal />);
		// setDidMount(true);
		let action = set.signInAreaDidMount(true);
		dispatch(action);
	}

	function componentDidUpdate() {
		if (signInAreaDidMount) {
			console.log("UPDATE PHASE: SignInArea");
			if (account) setButton(<SignOutModal />);
			else setButton(<SignInModal />);
		}
	}
}
