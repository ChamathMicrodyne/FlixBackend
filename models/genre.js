import mongoose from "mongoose";

const genreSchema = mongoose.Schema({
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

const Genre = mongoose.model("genre", genreSchema);

export default Genre;
