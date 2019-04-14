import express from "express";
import { domain } from "./setting.json";

const app = express();

app.get(/.*/, (req, res) => {
  console.log(`Hello world received a request.: ${req.ip}`);

  const url = `https://${domain}${req.originalUrl}`;
  res.redirect(301, url);
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Hello world listening on port: ${port}`));
