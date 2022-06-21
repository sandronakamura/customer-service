const express = require("express");
const Client = require("../../model/client");
const bcrypt = require("bcrypt");
const cfg = require("../../config/config");

const route = express.Router();

route.get("/", (req, res) => {
  Client.find((error, data) => {
    if (error) return res.status(500).send({ output: `Error: ${error}` });
    res.status(200).send({ output: "ok", data: data });
  });
});

route.get("/:id", (req, res) => {
  Client.findById(req.params.id, (error, data) => {
    if (error) return res.status(500).send({ output: `Error: ${error}` });
    res.status(200).send({ output: "ok", data: data });
  });
});

route.post("/registration", (req, res) => {
  bcrypt.hash(req.body.password, cfg.salt, (error, result) => {
    if (error)
      return res
        .status(500)
        .send({ output: `Erro ao gerar hash senha: ${error}` });
    req.body.password = result;

    const data = new Client(req.body);

    data
      .save()
      .then((result) => {
        res
          .status(201)
          .send({ output: "Cadastro realizado: ", payload: result });
      })
      .catch((error) => {
        res.status(500).send({ output: `Erro ao cadastrar: ${error}` });
      });
  });
});

route.put("/update/:id", (req, res) => {
  if (req.body.password) {
    bcrypt.hash(req.body.password, cfg.salt, (error, result) => {
      if (error)
        return res
          .status(500)
          .send({ output: `Erro ao gerar hash senha: ${error}` });
      req.body.password = result;

      Client.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (error, data) => {
          if (error)
            return res
              .status(500)
              .send({ output: `Erro na atualização: ${error}` });
          if (!data)
            return res
              .status(400)
              .send({ output: `Não foi possivel atualizar: ${error}` });
          res.status(202).send({ output: `Atualizado`, payload: data });
        }
      );
    });
  }
});

route.delete("/delete/:id", (req, res) => {
  Client.findByIdAndDelete(req.params.id, (error, data) => {
    if (error)
      return res.status(500).send({ output: `Erro ao deletar: ${error}` });
    res.status(204).send({});
  });
});

module.exports = route;
