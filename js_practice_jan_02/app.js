/*Without renaming any of the variables, modify the data 
callback to concatenate the stream of data to the 
responseBody.*/

const https = require("https");
const request = https.get("https://teamtreehouse.com/chalkers.json", response => {
    let responseBody = "";

    response.on("data", function(dataChunk) {
        //This code line should work:   responseBody += dataChunk;

        //but I also passed with the line below:
        responseBody = responseBody + dataChunk;
    });

    response.on("", function() {
        console.log(responseBody);
    });

});

request.on("error", function(error) {
    console.error(error.message);
});

// ----------------------------------------------------
/* Create a new variable jsonObject and then use the 
native JSON object to parse the jsonString and assign 
it to jsonObject. */

const jsonObject = JSON.parse(jsonObject);


// ----------------------------------------------------
/* On a new line use the on method to listen for the 
error event. Pass in a callback function with one 
parameter of error. */

const https = require("https");

const request = https.get("https://teamtreehouse.com/chalkers.json", response => {
    console.log(response.statusCode);

});

request.on('error', function(error) {});

//------------------------------------------------------

/* Something bad is going to happen. Use a try block in 
the appropriate place to catch an error. Include a catch 
block with error as the parameter. In the catch block, 
call console.error to print out the error's message 
property. */

const jsonString = 'This is not a JSON String';
const jsonObject = JSON.parse(jsonString);

try {
    let jsonString = 'This is not a JSON String';
    let jsonObject = JSON.parse(jsonString);

} catch (error) {
    console.error(error.message);
}