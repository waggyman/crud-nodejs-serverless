const { MongoClient } = require('mongodb')

const uri = process.env.MONGO_URL
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const users = async () => {
  await client.connect()
  const db = client.db(process.env.MONGO_DB_NAME)
  db.collection('users')
  return db.collection('users')
}
module.exports = {
  users
}