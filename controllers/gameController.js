import Games from "../models/game.js";

export function saveGames(req, res) {
  const game = new Games(req.body);

  game
    .save()
    .then(() => {
      res.json({
        message: "Game add successfully",
      });
    })
    .catch((err) => {
      res.json({
        message: "Game add failed",
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
      message: "Failed to get Game",
      error: err,
    });
  }
}

export async function deleteGames(req, res) {

  try {
    await Games.deleteOne({ id: req.params.id });

    res.json({
      message: `Game delete successfully. ${req.params.id}`,
    });
  } catch (err) {
    res.json({
      message: "Faild to delete Game",
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