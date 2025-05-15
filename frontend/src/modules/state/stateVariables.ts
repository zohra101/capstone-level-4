export const stateVariables = {
	//Declare the state variables that this slice will use as key value pairs
	didMount: false,
	component: undefined,
    isAuthenticated: false,
    isSignedIn: false,
    isSignedOut: false,
    isActiveUser: true,
};

export type StateVariables = typeof stateVariables;
