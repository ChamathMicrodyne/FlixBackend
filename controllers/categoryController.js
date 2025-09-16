import Category from "../models/category.js";

export function saveCategory(req, res) {
  const category = new Category(req.body);

  category
    .save()
    .then(() => {
      res.json({
        message: "Category created successfully",
      });
    })
    .catch((err) => {
      res.json({
        message: "Failed to create category",
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
      message: "Failed to retrieve categories",
      error: err,
    });
  }
}

export async function deleteCategory(req, res) {

  try {
    await Category.deleteOne({ id: req.params.id });

    res.json({
      message: `Category deleted successfully`,
    });
  } catch (err) {
    res.json({
      message: "Failed to delete category",
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
      message: "Internal server error",
      error: err,
    });
    return;
  }
}