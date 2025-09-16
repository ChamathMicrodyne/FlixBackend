import Genre from "../models/genre.js";

export function saveGenre(req, res) {
  const genre = new Genre(req.body);

  genre
    .save()
    .then(() => {
      res.json({
        message: "Genre add successfully",
      });
    })
    .catch((err) => {
      res.json({
        message: "Genre add failed",
        error: err
      });
    });
}

export async function getGenre(req, res) {
  try {
      const genre = await Genre.find();
      res.json(genre);
  } catch (err) {
    res.json({
      message: "Failed to get genres",
      error: err,
    });
  }
}

export async function deleteGenre(req, res) {

  try {
    await Genre.deleteOne({ id: req.params.id });

    res.json({
      message: `Genre delete successfully. ${req.params.id}`,
    });
  } catch (err) {
    res.json({
      message: "Faild to delete Genre",
      error: err,
    });
  }
}

export async function updateGenre(req, res) {
  const genreId = req.params.id;
  const updatingData = req.body;

  try {
    await Genre.updateOne({ id: genreId }, updatingData);

    res.json({
      message: "Genre updated successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "Genre server error",
      error: err,
    });
    return;
  }
}