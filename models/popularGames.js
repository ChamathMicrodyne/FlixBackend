import mongoose from "mongoose";

const popularGamesSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  genre: {
    type: String
  },
  active: {
    type: Boolean,
    default: true
  }
});

const PopularGames = mongoose.model("popular-games", popularGamesSchema);

export default PopularGames;
