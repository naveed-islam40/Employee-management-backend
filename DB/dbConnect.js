const mongoose = require("mongoose")

console.log(process.env.MONGO_URL || "Null")

const dbConnect = () => {
    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log("mongodb connected successfully");
    }).catch((error) => {
        console.log("Error in connect", error);
    })
}

module.exports = dbConnect