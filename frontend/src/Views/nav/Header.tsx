import React, { useEffect } from "react";
import { NavbarCollapsible } from "../nav/NavbarCollapsible";
import { ImageMap } from "../nav/ImageMap";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../../modules/state/store";
import { selectHeaderDidMount } from "../../modules/state/stateSelectors";

export function Header() {
	const headerDidMount = useSelector(selectHeaderDidMount);
	const dispatch = useDispatch();

	useEffect(componentDidMount, []);
	useEffect(componentDidUpdate, []);
	useEffect(componentDidUnmount, []);

	return (
		<header>
			<NavbarCollapsible />
			<ImageMap />
		</header>
	);

	function componentDidMount() {
		// setDidMount(true);
		let action = set.headerDidMount(true);
		dispatch(action);
		console.log("The Header component mounted.");
	}

	function componentDidUpdate() {
		if (headerDidMount) console.log("The Header component updated.");
	}

	function componentDidUnmount() {
		return () => {
			console.log("The Header component unmounted.");
		};
	}
}
