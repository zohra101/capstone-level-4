export function getBackendRoutePrefix(): string {
	const localPath = window.location.hostname;

	let backendRoutePrefix: string;

	if (localPath === "localhost") {
		backendRoutePrefix = "/";
	} else {
		backendRoutePrefix = "";
	}

	return backendRoutePrefix;
}