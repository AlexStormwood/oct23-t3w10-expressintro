const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
	response.json({message:"Router route activated!"});
});

router.get("/random", (request, response) => {
	response.json({message:"Random Pokemon route activated!"})
})

router.post("/", (request, response) => {
	response.json({message:"Nah nah no POSTing here buddy!"})
})

module.exports = router;