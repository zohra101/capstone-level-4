export function output(
	message: string,
	outputTag = "outputTag",
	shouldAppend = true
) {
	const outputElement = document.getElementById(outputTag);
	if (shouldAppend) outputElement.innerHTML += message;
	else outputElement.innerHTML += message;
}
