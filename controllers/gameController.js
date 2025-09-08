import Games from "../models/game.js";

export function saveGames(req, res) {
  const game = new Games(req.body);

  game
    .save()
    .then(() => {
      res.json({
        message: "Product add successfully",
      });
    })
    .catch((err) => {
      res.json({
        message: "Product add failed",
        error: err
      });
    });
}

export async function getGames(req, res) {
  try {
      const products = await Games.find();
      res.json(products);
  } catch (err) {
    res.json({
      message: "Failed to get products",
      error: err,
    });
  }
}

export async function deleteGames(req, res) {

  try {
    await Games.deleteOne({ id: req.params.id });

    res.json({
      message: `Product delete successfully. ${req.params.id}`,
    });
  } catch (err) {
    res.json({
      message: "Faild to delete product",
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
      message: "Product updated successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
      error: err,
    });
    return;
  }
}