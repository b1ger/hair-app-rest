const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoute = require("./routes/user")

dotenv.config({ path: `.env.${process.env.BUILD_ENV}` });

mongoose.set('strictQuery', true);
mongoose
    .connect(process.env.MONGO_URL)
    .then(
        () => console.log("DB Connection Successfully!")
    )
    .catch(
        (err) => {
            console.log(err)
        }
    );

app.use(express.json());

app.use("/api/user", userRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("backend server is running");
})