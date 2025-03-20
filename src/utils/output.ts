import React, {useState} from "react";

export function output(
	message = "",
	outputTag = "outputTag",
	shouldAppend = true
) {
	const [outputMessage, setOutputMessage] = useState("");

	const outputElement = document.getElementById(outputTag);
	setOutputMessage((prevMessage) => {
		if (shouldAppend) {
			return prevMessage + message;
		} else {
			return message;
		}
	});
	console.log(`Output was generated for ${outputTag}.`);
}
