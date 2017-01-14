var login = require('facebook-chat-api');
var dash_button = require('dash-button-probe');

require('dotenv').config();

var msg = { body: process.env.FB_MESSAGE };
var dash = dash_button(process.env.INTERFACE, process.env.SSID);

login({
  email: process.env.FB_EMAIL,
  password: process.env.FB_PASSWORD,
}, function (err, api) {
  if (err) return console.error(err);

  dash.on('press', function () {
    // Log button press
    console.log('Detected press at ' + new Date());

    // Send FB message
    api.sendMessage(msg, process.env.FB_THREAD_ID);
  });
});
