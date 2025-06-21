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

	createFeedbackMessage: function (
		state: StateVariables,
		action: ActionString
	) {
		const newValue = action.payload;
		state.createFeedbackMessage = newValue;
	},

	deleteFeedbackMessage: function (
		state: StateVariables,
		action: ActionString
	) {
		const newValue = action.payload;
		state.deleteFeedbackMessage = newValue;
	},

	updateFeedbackMessage: function (
		state: StateVariables,
		action: ActionString
	) {
		const newValue = action.payload;
		state.updateFeedbackMessage = newValue;
	},

	viewFeedbackMessage: function (state: StateVariables, action: ActionString) {
		const newValue = action.payload;
		state.viewFeedbackMessage = newValue;
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

	signInAreaDidMount: function (state: StateVariables, action: ActionBoolean) {
		const newValue = action.payload;
		state.signInAreaDidMount = newValue;
	},

	signInButton: function (state: StateVariables, action: ActionShowButton) {
		const newValue = action.payload;
		state.signInButton = newValue;
	},

	signOutButton: function (state: StateVariables, action: ActionShowButton) {
		const newValue = action.payload;
		state.signOutButton = newValue;
	},

	signInModal: function (state: StateVariables, action: ActionShowModal) {
		const newValue = action.payload;
		state.signInModal = newValue;
	},

	signOutModal: function (state: StateVariables, action: ActionShowModal) {
		const newValue = action.payload;
		state.signOutModal = newValue;
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

type ActionUserAccount = {
	type: string;
	payload: UserAccount;
};

type ActionShowButton = {
	type: string;
	payload: boolean;
};

type ActionShowModal = {
	type: string;
	payload: boolean;
};

