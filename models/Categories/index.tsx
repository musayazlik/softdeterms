import mongoose from 'mongoose'

const CategoriesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  queue: {
    type: Number,
    required: true,
  },
})

export default mongoose.models.Categories ||
  mongoose.model('Categories', CategoriesSchema)
