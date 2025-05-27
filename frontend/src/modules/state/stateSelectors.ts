import { StateVariables } from "./stateVariables";
import { UserAccount } from "../dynamoDB/UserAccount";

export function selectGlobalAccount(state: StateVariables): UserAccount | null {
	return state.globalAccount;
}

export function selectGlobalAnswer(state: StateVariables) {
	const { globalAnswer } = state;
	return globalAnswer;
}

export function selectAboutDidMount(state: StateVariables): boolean {
	return state.aboutDidMount;
}

export function selectAlexResumeDidMount(state: StateVariables): boolean {
	return state.alexResumeDidMount;
}

export function selectConsultationDidMount(state: StateVariables): boolean {
	return state.consultationDidMount;
}

export function selectFooterDidMount(state: StateVariables): boolean {
	return state.homeDidMount;
}

export function selectHeaderDidMount(state: StateVariables): boolean {
	return state.homeDidMount;
}

export function selectHomeDidMount(state: StateVariables): boolean {
	return state.homeDidMount;
}

export function selectMessageDidMount(state: StateVariables): boolean {
	return state.messageDidMount;
}

export function selectPortfolioDidMount(state: StateVariables): boolean {
	return state.portfolioDidMount;
}

export function selectQotdDidMount(state: StateVariables): boolean {
	return state.qotdDidMount;
}

export function selectViewAccountDidMount(state: StateVariables): boolean {
	return state.viewAccountDidMount;
}

export function selectCreateAccountDidMount(state: StateVariables): boolean {
	return state.createAccountDidMount;
}

export function selectDeleteAccountDidMount(state: StateVariables): boolean {
	return state.deleteAccountDidMount;
}

export function selectUpdateccountDidMount(state: StateVariables): boolean {
	return state.updateAccountDidMount;
}

export function selectAccountDidMount(state: StateVariables): boolean {
	return state.accountDidMount;
}

export function selectFeedbackMessage(state: StateVariables): boolean {
	return state.feedbackMessage;
}

export function selectComponent(state: StateVariables): string {
	return state.component;
}

export function selectQuote(state: StateVariables): string {
	return state.quote;
}

export function selectAuthor(state: StateVariables): string {
	return state.author;
}

export function selectIsAuthenticated(state: StateVariables): boolean {
	return state.isAuthenticated;
}

export function selectIsSignedIn(state: StateVariables): boolean {
	return state.isSignedIn;
}

export function selectIsSignedOut(state: StateVariables): boolean {
	return state.isSignedOut;
}

export function selectSignInAreaDidMount(state: StateVariables): boolean {
	return state.signInAreaDidMount;
}

export function selectSignInAreaButton(state: StateVariables): string {
	return state.signInAreaButton;
}

export function selectIsActiveUser(state: StateVariables): boolean {
	return state.isActiveUser;
}

// export function selectGlobalAccount(state: StateVariables) {
// 	const { globalAccount } = state;
// 	return globalAccount;
// }

// export function selectAboutDidMount(state: StateVariables) {
// 	const { aboutDidMount } = state;
// 	return aboutDidMount;
// }

// export function selecAlexResumeDidMount(state: StateVariables) {
// 	const { alexResumeDidMount } = state;
// 	return alexResumeDidMount;
// }

// export function selectConsultationDidMountt(state: StateVariables) {
// 	const { consultationDidMount } = state;
// 	return consultationDidMount;
// }

// export function selectHomeDidMount(state: StateVariables) {
// 	const { homeDidMount } = state;
// 	return homeDidMount;
// }

// export function selectMessageDidMount(state: StateVariables) {
// 	const { messageDidMount } = state;
// 	return messageDidMount;
// }

// export function selectPortfolioDidMountt(state: StateVariables) {
// 	const { portfolioDidMount } = state;
// 	return portfolioDidMount;
// }

// export function selectViewAccountDidMount(state: StateVariables) {
// 	const { viewAccountDidMount } = state;
// 	return viewAccountDidMount;
// }

// export function selectAccountDidMount(state: StateVariables) {
// 	const { accountDidMount } = state;
// 	return accountDidMount;
// }

// export function selectComponent(state: StateVariables) {
// 	const { component } = state;
// 	return component;
// }

// export function selectIsAuthenticated(state: StateVariables) {
// 	const { isAuthenticated } = state;
// 	return isAuthenticated;
// }

// export function selectIsSignedIn(state: StateVariables) {
// 	const { isSignedIn } = state;
// 	return isSignedIn;
// }

// export function selectIsSignedOut(state: StateVariables) {
// 	const { isSignedOut } = state;
// 	return isSignedOut;
// }

// export function selectIsActiveUser(state: StateVariables) {
// 	const { isActiveUser } = state;
// 	return isActiveUser;
// }





