const Alexa = require('ask-sdk-core');

module.exports = {
	canHandle(handlerInput) {
		return (
			Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
			(Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent' ||
				Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent')
		);
	},
	handle(handlerInput) {
		const speechText = 'Action cancelled!';
		return handlerInput.responseBuilder.speak(speechText).getResponse();
	}
};
