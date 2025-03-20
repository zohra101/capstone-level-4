import React, { useState, useEffect } from "react";
import { SignInModal } from "../auth/SignInModal.js";
import { SignOutModal } from "../auth/SignOutModal.js";

export function SignInArea() {
	const [button, setButton] = useState(<></>);
	const [isSignedIn, setIsSignedIn] = useState(false);
	const [didMount, setDidMount] = useState(false);

	useEffect(componentDidMount, []);
	useEffect(componentDidUpdate, [isSignedIn]);

	return <>{button}</>;

	function componentDidMount() {
		console.log("MOUNT PHASE: SignInArea");
		if (isSignedIn) setButton(<SignOutModal onSignOut={handleSignOut} />);
		else setButton(<SignInModal onSignIn={handleSignIn} />);
		setDidMount(true);
	}

	function componentDidUpdate() {
		if (didMount) {
			console.log("UPDATE PHASE: SignInArea");
			if (isSignedIn) setButton(<SignOutModal onSignOut={handleSignOut} />);
			else setButton(<SignInModal onSignIn={handleSignIn} />);
		}
	}

	function handleSignIn() {
		setIsSignedIn(true);
	}

	function handleSignOut() {
		setIsSignedIn(false);
	}
}
