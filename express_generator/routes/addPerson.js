const express = require('express');
const router = express.Router();


router.post('/', async function(req, res, next) {


    console.log(client);

    const collection = client.db("ricky").collection("chars");

    const result = await collection.insertOne(req.body);
    
    res.send(req.body)

  });
  
  module.exports = router;