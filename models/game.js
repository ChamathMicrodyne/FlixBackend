import mongoose from "mongoose";

const gameSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: { 
    type: String
  },
  thumbnail: { 
    type : String 
  },
  videoUrl: { 
    type : String 
  },
  genre: { 
    type : String 
  },
  ReleaseYear: {
    type: Number,
    required: true,
    default: 0,
  },
  NOPlayes: {
    type: Number,
    required: true,
    default: 0,
  },
  AVGBet: {
    type: Number,
    required: true,
    default: 0,
  },
  AVGCashOut: {
    type: Number,
    required: true,
    default: 0,
  },
  CurrentPlayes: {
    type: Number,
    required: true,
    default: 0,
  },
  GamingRank: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Games = mongoose.model("games", gameSchema);

export default Games;
