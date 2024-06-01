import Item from "../models/item.model.js";

export const getItem = async (req, res) => {
  try {
    const item = await Item.find();
    res.status(200).json(item);
  } catch (error) {
    console.log("Error", error);
    res.status(500).json(error);
  }
};
