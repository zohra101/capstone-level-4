import { lambdaUrl } from "./lambaUrl";

export function getBaseUrl(): string {
	const localPath = window.location.hostname;
	const localBackendURL = "http://localhost:9000";

	let baseUrl: string;

	if (localPath === "localhost") {
		baseUrl = localBackendURL;
	} else {
		baseUrl = lambdaUrl;
	}

	return baseUrl;
}
