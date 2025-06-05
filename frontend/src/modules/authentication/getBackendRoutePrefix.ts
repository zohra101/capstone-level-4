export function getBackendRoutePrefix(): string {
	const localPath = window.location.hostname;
	const localBackendURL = "http://localhost:9000";

	let backendRoutePrefix: string;

	if (localPath === "localhost") {
		backendRoutePrefix = "/";
	} else {
		backendRoutePrefix = "";
	}

	return backendRoutePrefix;
}