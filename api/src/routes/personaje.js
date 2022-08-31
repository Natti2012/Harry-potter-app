const { Router } = require("express");

const axios = require("axios");
const router = Router();

const UserSchema = require("../models/personaje");

//trae los personajes || por nombre
router.get("/", async (req, res) => {
  const options={
  page:parseInt(req.query.page),
  limit:12
}

  try {
    let { nombre } = req.query;
    let personajes = await UserSchema.paginate({},options);
   
    let buscaPersonaje = [];
    if (nombre) {
      personajes.forEach((e) => {
        if (e.personaje.toLowerCase().includes(nombre.toLowerCase())) {
          buscaPersonaje.push(e.personaje);
        }
      });
      console.log(buscaPersonaje);
      if (buscaPersonaje.length) {
        return res.status(200).send(buscaPersonaje);
      }
      return res.status(400).send("No hay personajes con ese nombre");
    } else {
      res.status(200).json(personajes); //devuelve todos los personajes
    }
  } catch (err) {
    console.log("Error en el catch de get personajes", err);
    res.status(400).send(err);
  }
});

//trae personaje por ai di
router.get("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    console.log('soy el id',id);
    let personaje = await UserSchema.findById({ _id: id });
    res.status(200).json(personaje);
    console.log('personaje back', personaje);
  } catch (err) {
    console.log("Error en el catch de get personajes by id", err);
    res.status(400).send(err);
  }
});
//crea al personaje
router.post("/", async (req, res) => {
  try {
    let personaje = await UserSchema(req.body);
    personaje.save();

    return res.status(200).json(personaje);
  } catch (err) {
    console.log("Error en el catch de post personaje", err);
    res.status(400).send(err);
  }
});
// edita al pj
router.put("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let {
      nombre,
      especie,
     genero,
     casa,
     fechaDeNacimiento,
     mago,
      ascendencia,
      ojos,
     pelo,
      patronus,
       estudiante,
       HogwartsStaff,
       vivo,
       actor,
       imagen,
    } = req.body;
    await UserSchema.updateOne(
      { _id: id },
      {
        $set: {
          nombre,
          especie,
         genero,
         casa,
         fechaDeNacimiento,
         mago,
          ascendencia,
          ojos,
         pelo,
          patronus,
           estudiante,
           HogwartsStaff,
           vivo,
           actor,
           imagen
        },
      }
    );
    return res.status(200).json(req.body);
  } catch (err) {
    console.log("Error en el catch de put personaje", err);
    res.status(400).send(err);
  }
});

/* PERSONAJES: get all, get name,  get id, post character, put character, get by house
 */

module.exports = router;
