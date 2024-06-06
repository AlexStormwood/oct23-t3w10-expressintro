const express = require("express");
const router = express.Router();

const {readAuthData, verifyAuthData, exampleAsyncMiddleware} = require("../middleware/authentication.js");

router.use(readAuthData);
// router.use(verifyAuthData);

router.get("/", (request, response) => {
	response.json({message:"Router route activated!"});
});

router.get("/getbyid/:pokemonNumber", exampleAsyncMiddleware, verifyAuthData, (request, response) => {

	let retrievedNumberFromUrl = request.params.pokemonNumber;

	response.json({
		number: retrievedNumberFromUrl
	});
});

router.get("/random", (request, response) => {
	console.log("random route");
	let queryParams = request.query;
	response.json({
		message:"Random Pokemon route activated!",
		queryParams: queryParams
	})
})





router.post("/", (request, response) => {
	response.json({message:"Nah nah no POSTing here buddy!"})
});


// router
//     .get("/:pokemonNumber", (request, response) => {
//         let retrievedNumberFromUrl = request.params.pokemonNumber;

//         response.json({
//             number: retrievedNumberFromUrl
//         });
//     })
//     .post("/", (request, response) => {
//         response.json({ message: "Nah nah no POSTing here buddy!" });
//     });

module.exports = router;