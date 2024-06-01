import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import itemRoute from './routes/item.route.js';
import userRoute from './routes/user.route.js';
import cors from 'cors';

const app = express();

app.use(cors()); //middleware
app.use(express.json());

dotenv.config();

const PORT=process.env.PORT || 4000;
const URI =process.env.MongoDBURI;

//connect to mongodb

try {
  mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology:true
  });
  console.log("Connected to mongodb");
} catch (error) {
  console.log("error",error);
}
//defining routes
app.use("/item",itemRoute);
app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})