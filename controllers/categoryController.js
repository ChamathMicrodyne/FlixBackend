import Category from "../models/category.js";

export function saveCategory(req, res) {
  const category = new Category(req.body);

  category
    .save()
    .then(() => {
      res.json({
        message: "Category add successfully",
      });
    })
    .catch((err) => {
      res.json({
        message: "Category add failed",
        error: err
      });
    });
}

export async function getCategory(req, res) {
  try {
      const category = await Category.find();
      res.json(category);
  } catch (err) {
    res.json({
      message: "Failed to get categorys",
      error: err,
    });
  }
}

export async function deleteCategory(req, res) {

  try {
    await Category.deleteOne({ id: req.params.id });

    res.json({
      message: `Category delete successfully. ${req.params.id}`,
    });
  } catch (err) {
    res.json({
      message: "Faild to delete Category",
      error: err,
    });
  }
}

export async function updateCategory(req, res) {
  const categoryId = req.params.id;
  const updatingData = req.body;

  try {
    await Category.updateOne({ id: categoryId }, updatingData);

    res.json({
      message: "Category updated successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "Category server error",
      error: err,
    });
    return;
  }
}