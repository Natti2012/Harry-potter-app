const express= require ("express")
const bodyParser= require("body-parser")
const mongoose = require("mongoose")

const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

mongoose.connect(
    "mongodb://localhost/harrypotter",
    {useNewUrlParser: true},
    (err,res)=>{
        err && console.log("Error conectado a la bd")
        app.listen(4000,()=>{
            console.log("Servidor corriendo en http://localhost:4000")
        })
    }
)