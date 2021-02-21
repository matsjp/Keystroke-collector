import  mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
//import { UserModel } from "./users/users.model";
let database: mongoose.Connection;
export const connect = () => {  // add your own uri below
    // eslint-disable-next-line max-len
    if (process.env.DB_USERNAME === undefined){
        throw Error("DB_USERNAME does not exist in .env");
    }
    if (process.env.DB_CLUSTER_URL === undefined){
        throw Error("DB_CLUSTER_URL does not exist in .env");
    }
    if (process.env.DB_PASSWORD === undefined){
        throw Error("DB_PASSWORD does not exist in .env");
    }
    const username:string = process.env.DB_USERNAME;
    const password:string = process.env.DB_PASSWORD;
    const clusterUrl:string = process.env.DB_CLUSTER_URL;
    const uri = `mongodb+srv://${username}:${password}@${clusterUrl}?retryWrites=true&w=majority`;
    console.log(uri);
    
    if (database) {
        return;
    }
    
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    });
    
    database = mongoose.connection;
  
    database.once("open", async () => {
        console.log("Connected to database");
    });
    
    database.on("error", () => {
        console.log("Error connecting to database");
    });

};

export const disconnect = () => {
    if (!database) {
        return;
    }

    mongoose.disconnect();
};