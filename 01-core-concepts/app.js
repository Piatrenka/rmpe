const express = require("express");
const path = require("path");

const app = express();

const data = {
  msg: "Hi, React Mentoring Program for External students!!!111",
  created: new Date(),
  author: require("./package.json").author
};

app.get("/data", (req, res) => res.json(data));

app.use("/", express.static(path.join(__dirname, "client", "public")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "public", "index.html"));
});

app.listen(3000, () =>
  console.log(`[${require("./package.json").name}] app listening on port 3000!`)
);
