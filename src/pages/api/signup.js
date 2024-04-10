import { hashPassword } from "@/lib/hash";
import connectToDatabase from "../../lib/dbconnect";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    // Only handles POST requests
    return;
  }

  //.env var
  const usersCollection = process.env.MONGODB_COLLECTION_USERS;

  const data = req.body;

  const { name, email, password } = data;

  // Data validation
  if (
    !name ||
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 10
  ) {
    res.status(422).json({
      message: "Invalid input - password should be at least 10 characters long",
    });
    return;
  }

  const client = await connectToDatabase();

  const db = client.db();

  const existingUser = await db.collection(usersCollection).findOne({ email: email });

  if (existingUser) {
    res.status(422).json({ message: "invalid input - user already exists!" });
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(password);
  console.log("Hashed user password: ", hashedPassword); // debug

  const insertionResult = await db.collection(usersCollection).insertOne({
    name: name,
    email: email,
    password: hashedPassword,
  });

  res.status(201).json({
    message: "User created!",
  });

  client.close();
}
