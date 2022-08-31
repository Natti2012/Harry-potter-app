const { Router } = require("express");

const axios = require("axios");
const router = Router();

const UserSchema = require("../models/libro");

//trae los libros -- busca por nombre
router.get("/", async (req, res) => {
  try {
    let { nombre } = req.query;
    let libros = await UserSchema.find();
    
    let buscaLibro = [];
    if (nombre) {
      libros.forEach((e) => {
        if (e.libro.toLowerCase().includes(nombre.toLowerCase()) || e.titulo_original.toLowerCase().includes(nombre.toLowerCase())) {
          buscaLibro.push(e);
        }
      });
     
      if (buscaLibro.length) {
        return res.status(200).send(buscaLibro);
      }
      return res.status(400).send("No hay libros con ese nombre");
    } else {
      res.status(200).json(libros); //devuelve todos los personajes
    }
  } catch (err) {
    console.log("Error en el catch de get libros", err);
    res.status(400).send(err);
  }
});

//busca libro por Id 
router.get("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let libro = await UserSchema.findById({ _id: id });
    res.status(200).json(libro);
  } catch (err) {
    console.log("Error en el catch de get libro by id", err);
    res.status(400).send("No se encontro ese libro");
  }
});
module.exports = router;
