import mongoose from 'mongoose'

const PostsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    default: '',
  },
  description: {
    type: String,
    required: true,
    default: '',
  },
  content: {
    type: String,
    required: true,
    default: '',
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
  url: {
    type: String,
    default: '',
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
