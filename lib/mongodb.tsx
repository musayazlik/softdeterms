import { MongoClient } from 'mongodb'

if (!process.env.MONGO_URL) {
  throw new Error('Please add your Mongo URI to .env.local')
}

const uri: string = process.env.MONGO_URL
let client: MongoClient
let clientPromise: Promise<MongoClient>

client = new MongoClient(uri)
clientPromise = client.connect()

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise
