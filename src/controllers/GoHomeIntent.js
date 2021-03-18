const Alexa = require('ask-sdk-core');

module.exports = {
	canHandle(handlerInput) {
		return (
			Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
			Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.NavigateHomeIntent'
		);
	},
	handle(handlerInput) {
		const speechText = 'There is no home screen in this skill.';
		return handlerInput.responseBuilder.speak(speechText).getResponse();
	}
};
