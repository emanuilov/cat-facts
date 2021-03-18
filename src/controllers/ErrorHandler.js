module.exports = {
	canHandle() {
		return true;
	},
	handle(handlerInput, error) {
		console.error(`Error: ${error.stack}`);
		const speakOutput = `Sorry, I had trouble doing what you asked. Please try again.`;

		return handlerInput.responseBuilder.speak(speakOutput).getResponse();
	}
};
