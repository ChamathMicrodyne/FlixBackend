import Title from "../models/title.js";

export function saveTitle(req, res) {
  const title = new Title(req.body);

  title
    .save()
    .then(() => {
      res.json({
        message: "Title created successfully",
      });
    })
    .catch((err) => {
      res.json({
        message: "Failed to create title",
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
      message: "Failed to retrieve titles",
      error: err,
    });
  }
}

export async function deleteTitle(req, res) {

  try {
    await Title.deleteOne({ id: req.params.id });

    res.json({
      message: `Title deleted successfully`,
    });
  } catch (err) {
    res.json({
      message: "Failed to delete title",
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
      message: "Internal server error",
      error: err,
    });
    return;
  }
}