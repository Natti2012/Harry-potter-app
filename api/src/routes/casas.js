const { Router } = require("express");

const axios = require("axios");
const router = Router();

const UserSchema = require("../models/casa");

// Trae todas las casas

router.get("/", async (req, res) => {

try {
    let casas = await UserSchema.find()
    res.status(200).json(casas);

} catch (error) {
    console.log("Error en el catch de get casas", err);
    res.status(400).send(err);
}

})

module.exports = router;