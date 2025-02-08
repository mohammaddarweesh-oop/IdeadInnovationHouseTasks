const express = require("express");
const bookRoutes = require("./Routers/bookRoutes");
const bookshopRoutes = require("./Routers/bookshopRoutes");

const app = express();
app.use(express.json());
const port = 3000;

app.use("/api", bookRoutes);
app.use("/api", bookshopRoutes);

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
