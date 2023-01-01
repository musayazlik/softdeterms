import { NextApiRequest, NextApiResponse } from 'next'
import { getProviders } from 'next-auth/react'
import clientPromise from '../../utils/dbConnect'

export default async function users(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  switch (method) {
    case 'GET':
      const connection = await clientPromise

      res.json(connection)

      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
      break
  }
}
