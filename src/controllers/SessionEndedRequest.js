const Alexa = require('ask-sdk-core');

module.exports = {
	canHandle(handlerInput) {
		return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
	},
	handle(handlerInput) {
		return handlerInput.responseBuilder.speak('Have a great day!').getResponse();
	}
};
