const express = require("express");
const path = require("path");

const app = express();

app.get("/jsonPath", (req, res) => {
    
  const pathFile = path.join(__dirname, "index.html");
  const errorFile = path.join(__dirname, "error.html");

  res.status(200).sendFile(pathFile, (error) => {
    if (error) {
      res.status(500).sendFile(errorFile);
    }
  });
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
