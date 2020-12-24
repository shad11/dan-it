import mongoose from "mongoose";

/**
 * @desc Connecting to MongoDB
 *
 * @param config
 **/
export default async ({config}) => {
    await mongoose
        .connect(config.MONGODB_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
}