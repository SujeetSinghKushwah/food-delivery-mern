import mongoose from "mongoose"

const connectDb = async () => {
    try {
        // Check karein ki URL sahi se load ho raha hai ya nahi
        if (!process.env.MONGODB_URL) {
            console.log("Error: MONGODB_URL is not defined in .env file");
            return;
        }

        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database Connected Successfully");
    } catch (error) {
        console.log(" DB Connection Error Details:");
        console.log(error.message); // Yeh line asli reason batayegi
    }
}

export default connectDb