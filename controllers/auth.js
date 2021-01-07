const mongoose = require("mongoose");

const User = mongoose.model("user");

exports.signup = (req, res, next) => {
    const { email, password } = req.body;
    console.log({ email, password });
    return res.json({ email, password });
};
