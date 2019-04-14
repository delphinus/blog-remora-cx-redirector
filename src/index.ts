import express from "express";
import { domain } from "./setting.json";

const app = express();

app.get(/.*/, (req, res) =>
  res.redirect(301, `https://${domain}${req.originalUrl}`)
);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log("start node"));
