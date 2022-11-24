const express = require("express");
const { expressErrorHandler } = require("./middleware/error_handlerMiddleware.js");
require("./config/dbConnection");
const { router } = require("./routes/index");

const app = express();
app.use(express.json());

// api routes
// app.use("/api/", router);

// app.use(expressErrorHandler);

app.listen(3000, () => {
    console.log("server started in port 3000");
});