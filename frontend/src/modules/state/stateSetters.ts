import { StateVariables } from "./stateVariables";

export const stateSetters = {
	//Methods that match their state variables
	didMount: function (state: StateVariables, action: ActionBoolean) {
		const newValue = action.payload;
		state.didMount = newValue;
	},

	component: function (state: StateVariables, action: ActionString) {
		const newValue = action.payload;
		state.component = newValue;
	},

	isAuthenticated: function (state: StateVariables, action: ActionBoolean) {
		const newValue = action.payload;
		state.isAuthenticated = newValue;
	},

	isSignedIn: function (state: StateVariables, action: ActionBoolean) {
		const newValue = action.payload;
		state.isSignedIn = newValue;
	},

	isSignedOut: function (state: StateVariables, action: ActionBoolean) {
		const newValue = action.payload;
		state.isSignedOut = newValue;
	},

	isActiveUser: function (state: StateVariables, action: ActionBoolean) {
		const newValue = action.payload;
		state.isActiveUser = newValue;
	},
};

type ActionString = {
	type: string;
	payload: string;
};

type ActionBoolean = {
	type: string;
	payload: boolean;
};

type ActionNumber = {
	type: string;
	payload: number;
};
