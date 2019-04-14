import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log(`Hello world received a request.: ${req.ip}`);

  const target = process.env.TARGET || "World";
  res.send(`Hwllo ${target}`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Hello world listening on port: ${port}`));
