import db from "../database.js";

const database = db.data.database;
export const getRecords = (req, res) => {
  res.json(database);
};

export const controlNewRecord = (req, res, next) => {
  const body = req.body;

  const title = body.title;
  const artist = body.artist;
  const year = body.year;
  const image = body.image;
  const price = body.price;
  const id = body.id;

  if (title !== "") {
    res.send("Merhaba");
    console.log("Merhaba");
  }else{
    res.send("Ikinci")
    console.log("Ikinci");
  }
};

export const addRecord = (req, res) => {  

  const body = req.body;

  const title = body.title;
  const artist = body.artist;
  const year = body.year;
  const image = body.image;
  const price = body.price;
  const id = body.id;

  const newRecord = {
    title: title,
    artist: artist,
    year: year,
    image: image,
    price: price,
    id: id,
  };

  database.unshift(newRecord);
  db.write();

  res.send(newRecord);
};

export const showFour = (req, res) => {
  const filteredElements = database.filter((element, index) => {
    return index < 4;
  });

  res.send(filteredElements);
};
