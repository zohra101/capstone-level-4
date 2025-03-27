import React, { useState, useEffect } from "react";
import siteHeader from "../../../assets/images/siteHeader_4kp_rev2.png";
import { useNavigate } from "react-router";
import { getRootPath } from "../../utils/getRootPath";

declare global {
	interface Window {
		imageMapResize: () => void;
	}
}

export function ImageMap() {
	const navigateTo = useNavigate(); //Allow function to access BrowserRouter
	const rootPath = getRootPath();
	const [didMount, setDidMount] = useState(false); //set useState to false because component has not mounted
	useEffect(componentDidMount, []); //only track a single mount
	useEffect(componentDidUpdate);
	useEffect(componentDidUnmount, []);

	return (
		<div>
			<img
				id="siteHeader"
				alt="siteHeader"
				width="100%"
				src={siteHeader}
				className="pb-4"
				useMap="#tc-image-map"
			/>
			<map name="tc-image-map">
				<area
					title="portfolio"
					coords="634,305,382"
					shape="circle"
					onClick={() => navigateTo(`${rootPath}/portfolio`)}
				></area>
				<area
					title="contact"
					coords="2851,294,300"
					shape="circle"
					onClick={() => navigateTo(`${rootPath}/contact`)}
				></area>
			</map>
		</div>
	);

	function componentDidMount() {
		setDidMount(true);
		console.log("The Image Map component mounted.");
		(window as any).imageMapResize();
	}

	function componentDidUpdate() {
		if (didMount) console.log("The Image Map  component updated.");
	}

	function componentDidUnmount() {
		return function displayMessage() {
			console.log("The Image Map component unmounted.");
		};
	}
}
