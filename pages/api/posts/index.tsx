import { NextApiRequest, NextApiResponse } from 'next'

import dbConnect from '@lib/dbconnect'
import Posts from '../../../models/Posts'
import Users from '../../../models/Users'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect()
  const { method } = req
  switch (method) {
    case 'GET':
      try {
        const postsData = await Posts.find({}).populate({
          path: 'userId',
          model: Users,
          select: ['name', 'image', 'bio', 'role'],
        })

        res.status(200).json({ success: true, data: postsData })
      } catch (error: any) {
        res.status(500).json({ success: false, error: error?.message })
      }
      break
    case 'POST':
      try {
        const postData = await Posts.create(req.body)
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
