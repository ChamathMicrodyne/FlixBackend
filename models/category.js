import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  category: { 
    type: String
  }
});

const Category = mongoose.model("category", categorySchema);

export default Category;
