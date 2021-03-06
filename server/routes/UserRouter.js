const express = require("express");
const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel.js");
const generateToken = require("../utils/generateToken");
const protect = require("../middleware/AuthMiddleware.js");
const userRouter = express.Router();
const nodemailer = require("nodemailer");
const userController = require("../controllers/UserController");
const { signupValidation, loginValidation } = require("../middleware/validation")

userRouter.get("/", protect, userController.getAllUsers);
userRouter.get("/profile/:id", protect, userController.profile);
userRouter.post("/register", signupValidation, userController.register);
userRouter.post("/login", loginValidation, userController.login);
userRouter.post("/forgotPassword", userController.forgotPassword);
userRouter.put("/updateUser/:id", userController.updateUser);
userRouter.delete("/:id", userController.deleteUser);
userRouter.post("/googleLogin", userController.googleLogin);
userRouter.get("/confirm/:confirmationCode", userController.verifyUser)

module.exports = userRouter;
