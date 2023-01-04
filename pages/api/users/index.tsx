import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@lib/dbconnect'
import clientPromise from '@lib/mongodb'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const client = await clientPromise
        const db = client.db(process.env.DB_NAME)
        const data = await db.collection('users').find({}).toArray()
        res.status(200).json({ success: true, data: data })
      } catch (error: any) {
        res.status(500).json({ success: false, error: error?.message })
      }
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      break
  }
}
