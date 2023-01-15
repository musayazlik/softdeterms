import mongoose from 'mongoose'

const PostsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    default: '',
    maxHeight: 70,
  },
  description: {
    type: String,
    required: true,
    default: '',
    maxHeight: 200,
  },
  author: {
    type: String,
    default: '',
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'categories',
  },
  createdAt: {
    type: Date,
    required: true,
    default: new Date(),
  },
  status: {
    type: Boolean,
    default: false,
  },
})

export default mongoose.models.Posts || mongoose.model('Posts', PostsSchema)
