import PopularGames from "../models/popularGames.js";

export function savePopularGames(req, res) {
  const popularGames = new PopularGames(req.body);

  popularGames
    .save()
    .then(() => {
      res.json({
        message: "PopularGames created successfully",
      });
    })
    .catch((err) => {
      res.json({
        message: "Failed to create popularGames",
        error: err
      });
    });
}

export async function getPopularGames(req, res) {
  try {
      const popularGames = await PopularGames.find();
      res.json(popularGames);
  } catch (err) {
    res.json({
      message: "Failed to retrieve popularGamess",
      error: err,
    });
  }
}

export async function deletePopularGames(req, res) {

  try {
    await PopularGames.deleteOne({ id: req.params.id });

    res.json({
      message: `PopularGames deleted successfully`,
    });
  } catch (err) {
    res.json({
      message: "Failed to delete popularGames",
      error: err,
    });
  }
}

export async function updatePopularGames(req, res) {
  const popularGamesId = req.params.id;
  const updatingData = req.body;

  try {
    await PopularGames.updateOne({ id: popularGamesId }, updatingData);

    res.json({
      message: "PopularGames updated successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
      error: err,
    });
    return;
  }
}