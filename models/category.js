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
  active: {
    type: Boolean,
    default: true
  }
});

const Category = mongoose.model("category", categorySchema);

export default Category;
