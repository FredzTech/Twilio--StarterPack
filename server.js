//IMPORTANT CODE THAT WE NEED TO APPLY B4 STARTING ANYTHING.
//============================================================
/**Download the helper library from https://www.twilio.com/docs/node/install
 * Find your Account SID and Auth Token at twilio.com/console
 * and set the environment variables. See http://twil.io/secure
 */

//STEP 1 : AUTHENTICATE OUR CLIENT (THE OWNER OF THE TWILIO ACCOUNT)
//===================================================================

/*
const accountSid = "AC718717a853254819c9f805c8de1cce28"; // Your Account SID from www.twilio.com/console
const authToken = "a72d739c44b7ff4bc4691a84a0bf4011"; // Your Auth Token from www.twilio.com/console

const twilio = require("twilio");
const client = new twilio(accountSid, authToken);

*/
// STEP 2 :SENDING THE MESSAGE TO THE RECIPIENTS
//================================================

/*
client.messages
  .create({
    body: "Hello from Node Application... The Application has worked tremendously well.",
    to: "+254112615416", // Text this number
    from: "+16203159813", // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));

  */

//MAKING A PHONECALL TO A CLIENT
//===============================

// STEP 1 : AUTHENTICATE THE CLIENT
//===================================
const accountSid = "AC718717a853254819c9f805c8de1cce28";
const authToken = "a72d739c44b7ff4bc4691a84a0bf4011";
const client = require("twilio")(accountSid, authToken);

// STEP 2 : MAKE THE CALL
//=============================
client.calls
  .create({
    url: "http://demo.twilio.com/docs/voice.xml",
    to: "+254112615416",
    from: "+16203159813",
  })
  .then((call) => console.log(call.sid));

// GETTING EXISTING RECORDS
//===========================
/*
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client
  .calls('CA42ed11f93dc08b952027ffbc406d0868')
  .fetch()
  .then(call => console.log(call.to));
 */

//ITERATING RECORDS
//===================
/*
const accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
const authToken = "your_auth_token";
const client = require("twilio")(accountSid, authToken);

client.calls.each((call) => console.log(call.direction));

*/
