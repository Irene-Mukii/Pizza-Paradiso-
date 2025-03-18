import mongoose from 'mongoose'
//import './envConfig.ts'

const NEXTMONGO_URL = process.env.NEXTMONGO_URL
const NEXTTOKEN = process.env.NEXTTOKEN
console.log( NEXTMONGO_URL, NEXTTOKEN)

if (!NEXTMONGO_URL) {
  throw new Error(
    'Please define the MONGO_URI environment variable inside .env.local'
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }

    cached.promise = mongoose.connect(NEXTMONGO_URL, opts).then((mongoose) => {
      console.log(mongoose)
      return mongoose
    })
  }

  try {
    cached.conn = await cached.promise
  } catch (e) {
    cached.promise = null
    throw e
  }

  return cached.conn
}

export default dbConnect