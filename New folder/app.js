const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

require("dotenv").config();

const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser);

const secret_key = process.env.SECRET_KEY;

const Users = [
  {
    id: 1,
    username: "admin",
    password: "pAssWord",
  },
];

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await Users.find(
    (u) => u.username === username && u.password === password
  );
  if (!user) {
    return res.status(401).json({ message: "Invalied Credentials" });
  }

  const token = jwt.sign({ id: user.id, username: user.username }, secret_key, {
    expiresIn: "30d",
  });

  res.status(200).json({ token });
});

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).json({ message: "access is denied you cant login" });
  }

  jwt.verify(token.split("")[1], secret_key, (err, decoded) => {
    if (err) {
      return res.status(401).json({ massage: "Invalied Token" });
    }

    req.user = decoded;
    next();
  });
};

app.get('/dashboard',verifyToken , (req,res) => {
    res.status(200).json({message:`Welcome ${req.user} this is a dashboard route or path`})
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
