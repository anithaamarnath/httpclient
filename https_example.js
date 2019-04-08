var https = require('https');
console.log('I did it!');
var options = {
  host: 'www.example.org'.
  path: '../..'
};


// called by https when the request is made.
 var callback = function(response) {
  console.log(" I'm about to male the request!");
  console.log('Response: ' response);

 }
 console.log("I;m about to make the request!");
 https.request(options, callback).end();
 console.log("I'v made the request!");
