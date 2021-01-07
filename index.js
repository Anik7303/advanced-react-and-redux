const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// MongoDB Models
require("./models/user");

const authRoutes = require("./routes/auth");

const mongoOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
mongoose.connect("mongodb://localhost:auth/auth", mongoOptions);

const app = express();
app.use(bodyParser.json({ type: "*/*" }));

// Routes
app.use(authRoutes);

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(PORT, () => console.log(`server listening on port ${PORT}`));
