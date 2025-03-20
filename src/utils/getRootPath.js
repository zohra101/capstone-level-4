export function getRootPath() {
	const domain = window.location.hostname;
	let rootPath = "";

	console.log(`getRootPath domain: ${domain}`);

	if (domain === "zohra101.github.io") rootPath = "/capstone-level-3";

	console.log(`getRootpath: ${rootPath}`);
	return rootPath;
}
