import Title from "../models/title.js";

export function saveTitle(req, res) {
  const title = new Title(req.body);

  title
    .save()
    .then(() => {
      res.json({
        message: "Title add successfully",
      });
    })
    .catch((err) => {
      res.json({
        message: "Title add failed",
        error: err
      });
    });
}

export async function getTitle(req, res) {
  try {
      const title = await Title.find();
      res.json(title);
  } catch (err) {
    res.json({
      message: "Failed to get titles",
      error: err,
    });
  }
}

export async function deleteTitle(req, res) {

  try {
    await Title.deleteOne({ id: req.params.id });

    res.json({
      message: `Title delete successfully. ${req.params.id}`,
    });
  } catch (err) {
    res.json({
      message: "Faild to delete Title",
      error: err,
    });
  }
}

export async function updateTitle(req, res) {
  const titleId = req.params.id;
  const updatingData = req.body;

  try {
    await Title.updateOne({ id: titleId }, updatingData);

    res.json({
      message: "Title updated successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "Title server error",
      error: err,
    });
    return;
  }
}