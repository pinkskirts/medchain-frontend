import { MongoClient } from "mongodb";

async function connectToDatabase() {
  return await MongoClient.connect(process.env.MONGODB_URI);
}

export default connectToDatabase;
