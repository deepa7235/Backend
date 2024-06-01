import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String
})
const Item = mongoose.model("Item",itemSchema);

export default Item;