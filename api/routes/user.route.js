const router = require("express").Router();
const { checkToken } = require("../../auth/token.validation");
const {
  createUser,
  createAdmin,
  getUsers,
  deleteUser,
  updateUsers,
  login,
  getUserByUserId
} = require("../controllers/user.controller");

//Get All users
router.get("/", checkToken, getUsers);
//register
router.post("/register", createUser);
//register
router.post("/createAdmin", createAdmin);
//Login
router.post("/login", login);
//Update
router.patch("/profile", checkToken, updateUsers);
//get User profile
router.get("/profile/:id", checkToken, getUserByUserId);

//delete All users
router.delete("/", deleteUser);

module.exports = router;
