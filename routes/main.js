const express = require('express');
const router = express.Router();
const { login, dashboard } = require('../controllers/main');

const authMiddlware = require('../middleware/auth');

router.get('/dashboard', authMiddlware, dashboard);
router.post('/login', login);

module.exports = router;
