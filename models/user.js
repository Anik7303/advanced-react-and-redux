const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        email: {
            type: String,
            unique: true,
            lowercase: true,
        },
        password: String,
    },
    { timestamps: true }
);

userSchema.pre("save", async (next) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(this.password, salt);
        this.password = hash;
        next();
    } catch (error) {
        return next(error);
    }
});

userSchema.methods.comparePassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            const isMatch = await bcrypt.compare(password, this.password);
            resolve(isMatch);
        } catch (error) {
            reject(error);
        }
    });
};

mongoose.model("user", userSchema);
