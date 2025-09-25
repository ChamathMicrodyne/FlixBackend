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
  title: {
    type: String
  },
});

const PopularGames = mongoose.model("popular-games", popularGamesSchema);

export default PopularGames;
