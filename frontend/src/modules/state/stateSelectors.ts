import { StateVariables } from "./stateVariables";
import { UserAccount } from "../dynamoDB/UserAccount";

export function selectGlobalAccount(state: StateVariables): UserAccount | null {
	return state.globalAccount;
}

export function selectGlobalAnswer(state: StateVariables): string {
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

export function selectUpdateAccountDidMount(state: StateVariables): boolean {
	return state.updateAccountDidMount;
}

export function selectAccountDidMount(state: StateVariables): boolean {
	return state.accountDidMount;
}

export function selectCreateFeedbackMessage(state: StateVariables): boolean {
	return state.createFeedbackMessage;
}

export function selectDeleteFeedbackMessage(state: StateVariables): boolean {
	return state.deleteFeedbackMessage;
}

export function selectUpdateFeedbackMessage(state: StateVariables): boolean {
	return state.updateFeedbackMessage;
}

export function selectViewFeedbackMessag(state: StateVariables): boolean {
	return state.viewFeedbackMessage;
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

export function selectSignInButton(state: StateVariables): boolean {
	return state.signInButton;
}

export function selectSignOutButton(state: StateVariables): boolean {
	return state.signOutButton;
}

export function selectSignInModal(state: StateVariables): boolean {
	return state.signInModal;
}

export function selectSignOutModal(state: StateVariables): boolean {
	return state.signOutModal;
}

export function selectIsActiveUser(state: StateVariables): boolean {
	return state.isActiveUser;
}






