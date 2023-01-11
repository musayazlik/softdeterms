import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@lib/dbconnect'
import Categories from '@models/Categories'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req

  dbConnect()

  switch (method) {
    case 'GET':
      try {
        const data = await Categories.find({})
        res.status(200).json({ data })
      } catch (error: any) {
        res.status(500).json({ error: error?.message })
      }
      break

    case 'POST':
      try {
        const data = await Categories.create(req.body)
        res.status(201).json({ success: true, data: data })
      } catch (error: any) {
        res.status(500).json({ success: false, error: error?.message })
      }
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      break
  }
}
