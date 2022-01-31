
import { Low, JSONFile } from "lowdb";

const db = new Low(new JSONFile("database.json"));
await db.read();

db.data ||= { database: [] };

const database = db.data.database;

export default db;