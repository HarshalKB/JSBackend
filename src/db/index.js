import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connInstance = await mongoose.connect(`${process.env.MongoDB_URI}`);
        console.log(`\nMongoDB Connected !! DB Host: ${connInstance.connection.host}`);
        
    } catch (error) {
        console.log("MongoDB connection error: ", error);
        process.exit(1);
    }
}

export default connectDB;