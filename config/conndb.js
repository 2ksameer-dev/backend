const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("mongodb correctly worked");
    }catch(error){
        console.log("database not connected",error.message);
        process.exit(1);

    }
};
module.exports = connectDB;