// Declare and configure the server

const express = require("express");
const serverInstance = express();


// Raw JSON in body allowed
serverInstance.use(express.json());
// Form data in body allowed
serverInstance.use(express.urlencoded({extended: true}));

const {readAuthData, verifyAuthData} = require("./middleware/authentication.js");

serverInstance.use(readAuthData);
serverInstance.use(verifyAuthData);


// Every route that begins with /pokemon gets passed to PokemonRouter
const PokemonRouter = require("./routers/pokemonRoutes.js");
serverInstance.use("/pokemon", PokemonRouter);
serverInstance.use("/digimon", PokemonRouter);
serverInstance.use("/food", PokemonRouter);
serverInstance.use("/countries", PokemonRouter);







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
});

serverInstance.put("/", (request, response) => {
	response.json({message:"Put request received"})
});

serverInstance.patch("/", (request, response) => {
	response.json({message:"Patch request received"})
});

serverInstance.delete("/", (request, response) => {
	response.json({message:"Delete request received"})
});



// Make the instance available for other files to use
module.exports = serverInstance;