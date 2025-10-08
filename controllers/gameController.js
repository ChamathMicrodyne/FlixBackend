import Games from "../models/game.js";

export async function saveGames(req, res) {
  const lastID = await Games.findOne().sort({ id: -1 });
  const newId = lastID && lastID.id ? lastID.id + 1 : 1;

  const game = new Games({
    id: newId,
    title: req.body.title,
    description: req.body.description,
    thumbnail: req.body.thumbnail,
    videoUrl: req.body.videoUrl,
    genre: req.body.genre,
    category: req.body.category,
    ReleaseYear: req.body.ReleaseYear,
    NOPlayes: req.body.NOPlayes,
    AVGBet: req.body.AVGBet,
    AVGCashOut: req.body.AVGCashOut,
    CurrentPlayes: req.body.CurrentPlayes,
    GamingRank: req.body.GamingRank,
  });

  game
    .save()
    .then(() => {
      res.json({
        message: "Game created successfully",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Failed to create game",
        error: err
      });
    });
}

export async function getGames(req, res) {
  try {
      const game = await Games.find();
      res.json(game);
  } catch (err) {
    res.json({
      message: "Failed to retrieve games",
      error: err,
    });
  }
}

export async function deleteGames(req, res) {

  try {
    await Games.deleteOne({ id: req.params.id });
    res.json({
      message: `Game deleted successfully`,
    });
  } catch (err) {
    res.json({
      message: "Failed to delete game",
      error: err,
    });
  }
}

export async function updateGames(req, res) {
  const gameId = req.params.id;
  const updatingData = req.body;

  try {
    await Games.updateOne({ id: gameId }, updatingData);
    res.json({
      message: "Game updated successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
      error: err,
    });
    return;
  }
}