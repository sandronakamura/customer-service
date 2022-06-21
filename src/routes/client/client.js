const express = require('express');


const route = express.Router();


route.get("/", (req, res) => {
    
    res.status(200).send({ output: "ok"})
});

route.post("/registration", (req, res) => {
    res.status(201).send({ output: "ok"})
});

route.put("/update/:id", (req, res) => {
    res.status(202).send({ output: "ok"})
});

route.delete("/delete/:id", (req, res) => {
    res.status(204).send({ output: "ok"})
});

module.exports = route;