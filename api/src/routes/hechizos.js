const { Router } = require("express");

const axios = require("axios");
const router = Router();

const UserSchema = require("../models/hechizo");

//trae los hechizos || busca  por nombre || busca por uso
router.get("/", async (req, res) => {
  try {
    let { nombre, uso } = req.query;
    let hechizos = await UserSchema.find();
    console.log(hechizos);
    let buscaHechizo = [];
    if (nombre) {
      hechizos.forEach((e) => {
        if (e.hechizo.toLowerCase().includes(nombre.toLowerCase())) {
          buscaHechizo.push(e);
        }
      });

      if (buscaHechizo.length) {
        return res.status(200).send(buscaHechizo);
      }
      return res.status(400).send("No hay hechizos con ese nombre");
    }
    if (uso) {
      hechizos.forEach((e) => {
        if (e.uso.toLowerCase().includes(uso.toLowerCase())) {
          buscaHechizo.push(e);
        }
      });

      if (buscaHechizo.length) {
        return res.status(200).send(buscaHechizo);
      }
      return res.status(400).send("No hay hechizos con ese nombre");
    } else {
      res.status(200).json(hechizos); //devuelve todos los hechizos
    }
  } catch (err) {
    console.log("Error en el catch de get hechizos", err);
    res.status(400).send(err);
  }
});
//

// Crea un hechizo
router.post("/", async (req, res) => {
  try {
    let hechizo = await UserSchema(req.body);
    hechizo.save();

    return res.status(200).json(hechizo);
  } catch (err) {
    console.log("Error en el catch de post hechizo", err);
    res.status(400).send(err);
  }
});

// edita hechizo
router.put("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let { hechizo, uso } = req.body;
    await UserSchema.updateOne(
      { _id: id },
      {
        $set: {
          hechizo,
          uso,
        },
      }
    );
    return res.status(200).json(req.body);
  } catch (err) {
    console.log("Error en el catch de put hechizo", err);
    res.status(400).send(err);
  }
});

// borra hechizo
router.delete("/:id", async (req, res) => {
  try {
    let { id } = req.params;

    await UserSchema.deleteOne({ _id: id });
    return res.status(200).json({ msj: "Juego borrado con exito" });
  } catch (err) {
    console.log("Error en el catch de delete hechizo", err);
    res.status(400).send(err);
  }
});
module.exports = router;
