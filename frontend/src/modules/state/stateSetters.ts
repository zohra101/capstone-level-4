import { StateVariables } from "./stateVariables";
import { UserAccount } from "../dynamoDB/UserAccount";

export const stateSetters = {
	//Methods that match their state variables

	//Global
	globalAccount: function (state: StateVariables, action: ActionUserAccount) {
		const newValue = action.payload;
		state.globalAccount = newValue;
	},

	globalAnswer: function (state: StateVariables, action: ActionString) {
		const newValue = action.payload;
		state.globalAnswer = newValue;
	},

	//Local
	aboutDidMount: function (state: StateVariables, action: ActionBoolean) {
		const newValue = action.payload;
		state.aboutDidMount = newValue;
	},

	alexResumeDidMount: function (state: StateVariables, action: ActionBoolean) {
		const newValue = action.payload;
		state.alexResumeDidMount = newValue;
	},

	consultationDidMount: function (
		state: StateVariables,
		action: ActionBoolean
	) {
		const newValue = action.payload;
		state.consultationDidMount = newValue;
	},

	footerDidMount: function (state: StateVariables, action: ActionBoolean) {
		const newValue = action.payload;
		state.homeDidMount = newValue;
	},

	headerDidMount: function (state: StateVariables, action: ActionBoolean) {
		const newValue = action.payload;
		state.homeDidMount = newValue;
	},

	homeDidMount: function (state: StateVariables, action: ActionBoolean) {
		const newValue = action.payload;
		state.homeDidMount = newValue;
	},

	messageDidMount: function (state: StateVariables, action: ActionBoolean) {
		const newValue = action.payload;
		state.messageDidMount = newValue;
	},

	portfolioDidMount: function (state: StateVariables, action: ActionBoolean) {
		const newValue = action.payload;
		state.portfolioDidMount = newValue;
	},

	qotdDidMount: function (state: StateVariables, action: ActionBoolean) {
		const newValue = action.payload;
		state.qotdDidMount = newValue;
	},

	viewAccountDidMount: function (state: StateVariables, action: ActionBoolean) {
		const newValue = action.payload;
		state.viewAccountDidMount = newValue;
	},

	createAccountDidMount: function (
		state: StateVariables,
		action: ActionBoolean
	) {
		const newValue = action.payload;
		state.createAccountDidMount = newValue;
	},

	deleteAccountDidMount: function (
		state: StateVariables,
		action: ActionBoolean
	) {
		const newValue = action.payload;
		state.deleteAccountDidMount = newValue;
	},

	updateAccountDidMount: function (
		state: StateVariables,
		action: ActionBoolean
	) {
		const newValue = action.payload;
		state.updateAccountDidMount = newValue;
	},

	accountDidMount: function (state: StateVariables, action: ActionBoolean) {
		const newValue = action.payload;
		state.accountDidMount = newValue;
	},

	feedbackMessage: function (state: StateVariables, action: ActionString) {
		const newValue = action.payload;
		state.feedbackMessage = newValue;
	},

	component: function (state: StateVariables, action: ActionString) {
		const newValue = action.payload;
		state.component = newValue;
	},

	quote: function (state: StateVariables, action: ActionString) {
		const newValue = action.payload;
		state.quote = newValue;
	},

	author: function (state: StateVariables, action: ActionString) {
		const newValue = action.payload;
		state.author = newValue;
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

	signInAreaDidMount: function (state: StateVariables, action: ActionBoolean) {
		const newValue = action.payload;
		state.signInAreaDidMount = newValue;
	},

	signInAreaButton: function (state: StateVariables, action: ActionString) {
		const newValue = action.payload;
		state.signInAreaButton = newValue;
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

type ActionUserAccount = {
	type: string;
	payload: UserAccount;
};
