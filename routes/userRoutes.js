
const express = require("express");
const router = express.Router();


const {
    getUsers,
    getUserByID,
    createUser,
    updateUser,
    deleteUser
} = require("../controllers/userController");
const { authMiddleware, authorizeRole, checkSelfOrRole } = require("../middleware/authMiddleware");

router.get("/", getUsers);
router.get("/:id", getUserByID);
router.post("/",authMiddleware, authorizeRole('admin'),createUser);//use admin roles users only
router.put("/:id",authMiddleware, checkSelfOrRole('admin'),updateUser);//use admins logged user
router.delete("/:id",authMiddleware, checkSelfOrRole(), deleteUser);//only logged user

module.exports = router;
