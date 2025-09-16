import mongoose from "mongoose";

const titleSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String
  },
});

const Title = mongoose.model("title", titleSchema);

export default Title;
