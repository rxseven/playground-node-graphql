// Root route
const root = (req, res) => {
  res.status(200).send({ message: '/' });
};

// Export modules
module.exports = root;
