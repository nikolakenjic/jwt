const CustomAPIError = require('../errors/custom-error');
const jwt = require('jsonwebtoken');

const login = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new CustomAPIError('Please provide username and password', 400);
  }
  //   ID for demo, ususally provided by database
  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  res.status(200).json({ msg: 'user created', token });
};

const dashboard = (req, res, next) => {
  const { username } = req.user;
  const luckyNum = Math.floor(Math.random() * 100);

  res.status(200).json({
    msg: `Hello ${username}`,
    secret: `Here is your lucky number: ${luckyNum}`,
  });
};

module.exports = { login, dashboard };
