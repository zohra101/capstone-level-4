import { StateVariables } from "./stateVariables";

export function selectDidMount(state: StateVariables) {
	const { didMount } = state;
	return didMount;
}

export function selectComponent(state: StateVariables) {
	const { component } = state;
	return component;
}

export function selectIsAuthenticated(state: StateVariables) {
	const { isAuthenticated } = state;
	return isAuthenticated;
}

export function selectIsSignedIn(state: StateVariables) {
	const { isSignedIn } = state;
	return isSignedIn;
}

export function selectIsSignedOut(state: StateVariables) {
	const { isSignedOut } = state;
	return isSignedOut;
}

export function selectIsActiveUser(state: StateVariables) {
	const { isActiveUser } = state;
	return isActiveUser;
}



