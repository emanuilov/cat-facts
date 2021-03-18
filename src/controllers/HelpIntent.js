const Alexa = require('ask-sdk-core');

module.exports = {
	canHandle(handlerInput) {
		return (
			Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
			Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent'
		);
	},
	handle(handlerInput) {
		const speechText =
			'You can ask me to give you a cat fact';
		return handlerInput.responseBuilder.speak(speechText).withShouldEndSession(false).getResponse();
	}
};
