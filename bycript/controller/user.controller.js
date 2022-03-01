const bcrypt = require("bcrypt");
const User = require("../model/User");

async function passwordControl(req, res) {
  try {
    const { userName, password } = req.body;

    const hashedObject = await User.findOne({
      _id: "621e80cedfa5392a77ebf7e5",
    }).select("+password");

    const isTrue = await bcrypt.compare(password, hashedObject.password);

    if (isTrue) {
      res.status(200).json({
        status: 200,
        password: true,
      });
    } else {
      res.status(400).json({
        status: 400,
        password: false,
      });
    }
  } catch (err) {
    res.send(err);
  }
}

async function addUser(req, res) {
  try {
    const { userName, password } = req.body;

    hashedPassword = await bcrypt.hash(password, 10);

    const newObject = { userName, password: hashedPassword };

    User.create(newObject);

    res.status(201).send(newObject);
  } catch (err) {
    console.log(err);

    res.status(400).send(err);
  }
}

module.exports = { addUser, passwordControl };
