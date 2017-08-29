//set a reference to the request module
var request = require('request'),
	//stubs
	postData = {},
	postConfig = {},
	postSuccessHandler = null;

//create an object to send as POST data
postData = {
    x: 0,
    y: 0
};

//the config for our HTTP POST request
postConfig = {
    url:'http://localhost:3000/merchants/ordered',
    form: postData
};

//the HTTP POST request success handler
postSuccessHandler = function (err, httpResponse, body) {
	//look for this message in your JS console:
	console.log('JSON response from the server: ' + body);
};

//make the POST request
request.post(postConfig, postSuccessHandler);