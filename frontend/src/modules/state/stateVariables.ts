import { Component, PureComponent } from "react";
import { UserAccount } from "../dynamoDB/UserAccount";

export const stateVariables = {
	//Declare the state variables that this slice will use as key value pairs

	//Global
	globalAccount: null as null | UserAccount,
	globalAnswer: "(The answer will appear here.)",

	//Local mount flags
	aboutDidMount: false,
	accountDidMount: false,
	alexResumeDidMount: false,
	consultationDidMount: false,
	footerDidMount: false,
	headerDidMount: false,
	homeDidMount: false,
	messageDidMount: false,
	portfolioDidMount: false,
	qotdDidMount: false,
	createAccountDidMount: false,
	deleteAccountDidMount: false,
	updateAccountDidMount: false,
	viewAccountDidMount: false,
	signInAreaDidMount: false,
	signInModalDidMount: false,
	signOutAreaDidMount: false,

	//AWS
	isAuthenticated: false,

	//Authentication
	createFeedbackMessage: undefined,
	deleteFeedbackMessage: undefined,
	updateFeedbackMessage: undefined,
	viewFeedbackMessage: undefined,
	signInButton: true,
	signOutButton: false,
	signInModal: true,
	signOutModal: false,
	isSignedIn: false,
	isSignedOut: false,
	isActiveUser: true,

	//API & UI
	component: undefined,
	quote: undefined,
	author: undefined,
};

export type StateVariables = typeof stateVariables;
