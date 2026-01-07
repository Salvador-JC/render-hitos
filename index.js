const express = require("express");
const app = express();

// ❌ MÓDULO INEXISTENTE
const fakeLib = require("this-library-does-not-exist");

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Esta versión está rota");
});

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
}

module.exports = app;
