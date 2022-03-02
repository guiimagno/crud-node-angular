const app = require("./app");

require("./database");

// iniciando servidor
app.listen(() => {
  console.log("Servidor iniciado!")
})
