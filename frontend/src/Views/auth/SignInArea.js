import React, { useState, useEffect } from "react";
<<<<<<<< HEAD:frontend/src/Views/auth/SignInArea.tsx
import { SignInModal } from "../auth/SignInModal";
import { SignOutModal } from "../auth/SignOutModal";
========
import { SignInModal } from "./SignInModal.js";
import { SignOutModal } from "./SignOutModal.js";
>>>>>>>> ts-config:frontend/src/Views/auth/SignInArea.js

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
