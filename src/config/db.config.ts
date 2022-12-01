import mongoose from 'mongoose';
import { config } from 'dotenv';
config();
const { DB_HOST, DB_PORT, DB_NAME, DEFAULT_EMAIL, DEFAULT_PASSWORD, SALT_ROUNDS } = process.env;
const URI = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;
// console.log("URI...",URI)
// 10.1.5.139

const connect_to_db = () => {
    mongoose.connect(URI);
    mongoose.connection.on("connected", async() => {
        console.log("connected to MongoDb");
    });
    mongoose.connection.on("error", (error) => {
        console.log(error);
    });
}

export default connect_to_db;