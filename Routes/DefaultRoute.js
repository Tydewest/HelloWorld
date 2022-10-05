const router = require('express').Router();
const Default = require('../Controllers/Default');
const Uncaught = require('../Controllers/Uncaught');

// Main Content Route
router.route('/')
  .get(Default.get);

// Uncaught Route
router.route('*')
  .get(Uncaught.get);

// Export API routes
module.exports = router;
