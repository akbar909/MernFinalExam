const catchAsyncErrors = require("../middleware/catchAsyncErros");
const poetrySchema = require("../models/poetrySchema");

exports.createPoetry = catchAsyncErrors(async (req, res) => {
  const createdPoetry = await poetrySchema.create(req.body);
  res.status(201).json({ success: true, createdPoetry });
});

exports.getAllPoetries = catchAsyncErrors(async (req, res) => {
  const poetries = await poetrySchema.find();
  res.status(200).json({ success: true, poetries });
});
