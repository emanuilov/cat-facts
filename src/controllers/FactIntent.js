const Alexa = require('ask-sdk-core');
const axios = require('axios');

module.exports = {
	canHandle(handlerInput) {
		return (
			Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
			Alexa.getIntentName(handlerInput.requestEnvelope) === 'RandomFact'
		);
	},
	async handle(handlerInput) {
		const speechText = await axios.get('https://catfact.ninja/fact').then(response => {
    		return response.data.fact;
  		});
		return handlerInput.responseBuilder.speak(speechText).getResponse();
	}
};
