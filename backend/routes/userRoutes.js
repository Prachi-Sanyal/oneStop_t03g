const express = require('express');
const { registerUser, authUser, updateUserProfile, deleteUser } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').post(registerUser);
router.post('/login', authUser);
router.route('/profile').put(protect, updateUserProfile);
router.route('/delete').delete(protect, deleteUser);

module.exports = router;
