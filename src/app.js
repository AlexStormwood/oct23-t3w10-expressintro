// Declare and configure the server

const express = require("express");
const serverInstance = express();

// Raw JSON in body allowed
serverInstance.use(express.json());
// Form data in body allowed
serverInstance.use(express.urlencoded({extended: true}));


serverInstance.get("/", (request, response) => {
	console.log("Someone visited the homepage of the server");

	response.json({
		message:"Hello world! Alex was here!"
	});
});

serverInstance.post("/", (request, response) => {

	console.log(request.body);

	response.json({
		message:"Received data:",
		requestData: request.body
	})
})

// Make the instance available for other files to use
module.exports = serverInstance;