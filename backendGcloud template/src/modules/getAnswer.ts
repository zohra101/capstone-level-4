import {
	pipeline,
	PretrainedOptions,
	QuestionAnsweringOutput,
} from "@xenova/transformers";

const DEFAULT_MODEL = "Xenova/distilbert-base-cased-distilled-squad";
const SCORE_THRESHOLD = 0.08;

export async function getAnswer(
	question: string | undefined | null,
	context: string | undefined | null
): Promise<string | undefined> {
	const options: PretrainedOptions = { cache_dir: "ai-models" };
	const aiModel = await pipeline("question-answering", DEFAULT_MODEL, options);

	if (!question || !context || (!question && !context)) return undefined;

	const response = await aiModel(question, context);

	console.log("Model Response:", response);
	const { answer, score } = response as QuestionAnsweringOutput;
	console.log("Answer:", answer, score);

	if (answer && score < SCORE_THRESHOLD) {
		return undefined;}
	else {
		return answer;
	};
}
