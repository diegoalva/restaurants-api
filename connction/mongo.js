import dotenv from 'dotenv'
import mongoose from "mongoose";

dotenv.config();

const cnxMongo = () => {
  mongoose.connect(process.env.URI_MONGO)
    .then(() => console.log("db connected"))
    .catch(err => console.log(err))
}

export default cnxMongo