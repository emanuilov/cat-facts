const express = require('express');
const { ExpressAdapter } = require('ask-sdk-express-adapter');

// Initialize the Alexa SDK
const alexaSDK = require('ask-sdk');

// Handlers
const GoHomeIntent = require('./controllers/GoHomeIntent');
const HelpIntent = require('./controllers/HelpIntent');
const FactIntent = require('./controllers/FactIntent');
const InterruptIntent = require('./controllers/InterruptIntent');
const LaunchRequest = require('./controllers/LaunchRequest');
const SessionEndedRequest = require('./controllers/SessionEndedRequest');
const ErrorHandler = require('./controllers/ErrorHandler');

const skill = alexaSDK.SkillBuilders.custom()
    .addRequestHandlers(
      GoHomeIntent, HelpIntent, FactIntent, InterruptIntent, LaunchRequest, SessionEndedRequest
    ).addErrorHandlers(ErrorHandler)
    .create();


const adapter = new ExpressAdapter(skill, true, true);

const app = express();
app.post('/', adapter.getRequestHandlers());

app.listen(3000);
