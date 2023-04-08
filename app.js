require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongo = require("./shared/mongo");
const app = express();
const repoRoutes = require("./Routes/repo.routes");
const tagsRoutes = require("./Routes/tags.routes");

(async () => {
  try {
    await mongo.connect();
    app.use(cors());

    app.use(express.json());

    app.use("/repo", repoRoutes);

    app.use("/tags", tagsRoutes);

    app.get("/", function (req, res, next) {
      res.send("Server running perfectly. The API endpoints are /repo,/tags");
    });

    const port = process.env.PORT;

    app.listen(port || 3000, () => {
      console.log("Port: ", port);
    });
  } catch (err) {
    console.log("Error in connecting to DB");
  }
})();
