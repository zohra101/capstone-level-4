import React, { useEffect } from "react";
import copyright from "../../../assets/icons/copyright_cGainsboro_nobg.png";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../../modules/state/store";
import { selectFooterDidMount } from "../../modules/state/stateSelectors";

export function Footer() {

	const footerDidMount = useSelector(selectFooterDidMount);
	const dispatch = useDispatch();

	useEffect(componentDidMount, []);
	useEffect(componentDidUpdate, []);
	useEffect(componentDidUnmount, []);


	return (
		<footer>
			<hr />
			<div className="m-2">
				{" "}
				2025{" "}
				<img
					id="copyright"
					width="15px"
					src={copyright}
				/>{" "}
				Aleksandra Marjanovic
			</div>
		</footer>
	);

	function componentDidMount() {
			let action = set.footerDidMount(true);
			dispatch(action);
			console.log("The Footer component mounted.");

		}
	
		function componentDidUpdate() {
			if (footerDidMount) console.log("The Footer component updated.");
		}
	
		function componentDidUnmount() {
			return () => {
				console.log("The Footer component unmounted.");
			};
		}
}
