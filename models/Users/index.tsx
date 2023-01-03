import mongoose from 'mongoose'

const UsersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: '',
    maxHeight: 70,
  },
  email: {
    type: String,
    required: true,
    default: '',
    maxHeight: 200,
  },
  emailVerified: {
    type: Boolean,
    default: false,
  },
  password: {
    type: String,
    default: '',
    required: true,
  },
  role: {
    type: String,
    default: 'user',
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
  image: {
    type: String,
    default: '',
    required: true,
  },
  bio: {
    type: String,
    default: '',
  },
})

export default mongoose.models.Users || mongoose.model('Users', UsersSchema)
