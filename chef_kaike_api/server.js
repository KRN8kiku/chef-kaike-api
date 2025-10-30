const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Chef Kaike está online! 🍳");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Servidor rodando na porta " + port);
});