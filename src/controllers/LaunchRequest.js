const Alexa = require('ask-sdk-core');

module.exports = {
	canHandle(handlerInput) {
		return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
	},
	handle(handlerInput) {
		return handlerInput.responseBuilder.speak('Welcome, you can ask me to give you a cat fact').withShouldEndSession(false).getResponse();
	}
};
