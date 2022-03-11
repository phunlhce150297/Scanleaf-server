const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const plantRoute = require("./routes/PlantRoute");
const userRoute = require("./routes/UserRoute");

//config parse middleware high-level
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//use Cross-Origin-Resource-Sharing
app.use(
  cors({
    origin: "*",
    methods: ["GET,POST,PUT,DELETE"],
  })
);

//connect DB
const db = require("./config/db");
db.connectDB();

//HTTP logger
const morgan = require("morgan");
app.use(morgan("combined"));

//routes
app.use("/user", userRoute);
app.use("/plant", plantRoute);

//connect port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`server started on port http://localhost:${PORT}`)
);
