import { createClient } from '@libsql/client'
import { drizzle } from 'drizzle-orm/libsql'
import * as schema from '@/database/schema'
import env from '@/middleware/env'

const client = createClient({
  url: env.DATABASE_URL,
  // authToken: env.DATABASE_AUTH_TOKEN,
})

const db = drizzle(client, {
  schema,
})

export default db
