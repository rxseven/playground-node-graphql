// Root route
const root = (req, res) => {
  res.status(200).send({ message: '/' });
};

module.exports = root;
