import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

/*************************************************
 * @summary Removes the 404 error on SPA refresh
 * @param props.children The elements to render on refresh
 * @description
 * This component depends on the local storage used by redirect.js
 * In redirect.js, properly set the root path.
 */
export function HandleRefresh(props) {
	const children = props.children; //Render children 
	const navigateTo = useNavigate(); //Allow function to access BrowserRouter
	const [didMount, setDidMount] = useState(false);//set useState to false because component has not mounted
	useEffect(componentDidMount, []); //only track a single mount

	if (didMount) return <>{children}</>; //if the component mounted, render the children
	else return <></>;//if the component did not mount, don't load anything

	function componentDidMount() {
		const redirectPath = localStorage.getItem("redirect"); //Check the path name
		if (redirectPath) { //if there's a path
			navigateTo(redirectPath);  //navigate to it
			localStorage.setItem("redirect", ""); 
			setTimeout(() => setDidMount(true), 1000); //Delay the rendering of children if 
		} else setDidMount(true);
	}
}
