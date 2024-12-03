import mongoose from "mongoose";

let isConnected = false; // Mongodb Connection. 

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected) {
        console.log('Mongo DB connection is already established');
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'QuoteBox',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true;
        console.log('MongoDB connection is established');
    } catch (error) {
        console.log('MongoDB connection error: ' + error);
    }
}