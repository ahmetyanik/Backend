import express from "express";
import { Low, JSONFile } from "lowdb";

const db = new Low(new JSONFile("database.json"));
await db.read();

db.data ||= { database: [] };

const database = db.data.database;

const port = 3000;

const app = express();
app.use(express.json());

app.get("/api/records", (req, res) => {
  
    database.forEach(album=>{
        res.write(album.title) ;
    })

    res.end();

});

app.post("/api/records", (req, res) => {
  const body = req.body;

  const title = body.title;
  const artist = body.artist;
  const year = body.year;
  const image = body.image;
  const price = body.price;

  const newRecord = {
    title: title,
    artist: artist,
    year: year,
    image: image,
    price: price,
  };

  database.unshift(newRecord);
  db.write();

  res.send(newRecord);
});

app.listen(port, () => {
  console.log(port + " arbeitet...");
});
