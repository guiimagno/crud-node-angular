const mongoose = require("mongoose");
const app = require("./app");

const DB_USER = 'orgcadbd';
const DB_PASSWORD = '5Eivi7qgjOnGdYhu'

const URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.yzec6.mongodb.net/bdmongo?retryWrites=true&w=majority`;

mongoose
  .connect(URI)
  .then(() => {
    console.log("BD conectado!")
    app.listen(3000)
  })
  .catch((err) => console.error(err));

module.exports = mongoose;