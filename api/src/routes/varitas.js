const { Router } = require("express");

const axios = require("axios");
const router = Router();

const UserSchema = require("../models/varita");

router.get("/", async (req, res) => {
  try {
    let { dueño, madera } = req.query;
    let varitas = await UserSchema.find();

    //Busqueda de varita por dueño
    let mapdueño = [];
    if (dueño) {
      varitas.map((e) => {
        if (e.dueño.toLowerCase().includes(dueño.toLowerCase())) {
          mapdueño.push(e);
        }
      });

      if (mapdueño.length) {
        return res.status(200).send(mapdueño);
      }
      return res.status(400).send("No existe el dueño de esta varita");
    }

    //Busqueda de varita por madera
    let mapmadera = [];
    if (madera) {
      varitas.map((e) => {
        if (e.madera.toLowerCase().includes(madera.toLowerCase())) {
          mapmadera.push(e);
        }
      });

      if (mapmadera.length) {
        res.status(200).send(mapmadera);
      }
      return res.status(400).send("No existe esa madera");
    }

    //Trae a todas las varitas
    res.status(200).json(varitas);
  } catch (err) {
    console.log("Error en el catch de varita", err);
  }
});

//busca personaje por id
router.get("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let varita = await UserSchema.findById({ _id: id });
    res.status(200).json(varita);
  } catch (err) {
    console.log("Error en el catch de get personajes por id", err);
    res.status(400).send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    let varita = await UserSchema(req.body);
    varita.save();
    return res.status(200).json(varita);
  } catch (err) {
    console.log("Error en el carch post varita", err);
  }
});

//falta post y put(lo hare a la noche "Flor")

module.exports = router;

// VARITA: get all, get name, get id, post wand, put wand, (quiz que varita es tu ideal?)
