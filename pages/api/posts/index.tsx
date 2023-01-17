import { NextApiRequest, NextApiResponse } from 'next'
import { encode } from 'html-entities'
/** DBConnect */
import dbConnect from '@lib/dbconnect'
/** Models */
import Posts from '../../../models/Posts'
import Users from '../../../models/Users'
import Categories from '../../../models/Categories'
import { ObjectId } from 'mongodb'

interface PostsType {
  title: string
  content: string
  description: string
  author: string
  userId: ObjectId
  categoryId: ObjectId
  url: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect()
  const { method } = req
  switch (method) {
    case 'GET':
      try {
        if (req.query.categoryId) {
          const posts = await Posts.find({})
            .populate({
              path: 'userId',
              model: Users,
              select: ['name', 'image', 'bio', 'role'],
            })
            .populate({
              path: 'categoryId',
              model: Categories,
              select: ['name'],
            })
            .where('categoryId')
            .equals(req.query.categoryId)

          return res.status(200).json({ posts })
        } else {
          const posts = await Posts.find({})
            .select('-content')
            .populate({
              path: 'userId',
              model: Users,
              select: ['name', 'image', 'bio', 'role'],
            })
            .populate({
              path: 'categoryId',
              model: Categories,
              select: ['name'],
            })

          res.status(200).json({ posts })
        }
      } catch (error: any) {
        res.status(500).json({ error: error?.message })
      }
      break
    case 'POST':
      try {
        const url =
          req.body.title.toLowerCase().replace(/ /g, '-') +
          '-' +
          req.body.title.toLowerCase().replace(/ /g, '-')

        const reqData: PostsType = {
          title: encode(req.body.title),
          description: encode(req.body.description),
          content: encode(req.body.content),
          userId: req.body.userId,
          categoryId: req.body.categoryId,
          author: encode(req.body.author),
          url: url,
        }
        const postData = await Posts.create(reqData)
        res.status(201).json({ success: true, data: postData })
      } catch (error: any) {
        res.status(500).json({ success: false, error: error?.message })
      }
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      break
  }
}
