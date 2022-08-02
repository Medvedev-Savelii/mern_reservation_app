import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/hotel.js";
const router = express.Router();

//UPDATE
router.put("/:id", updateUser);
//DELETE
router.delete("/:id", deleteUser);
//GET One Hotel
router.get("/find/:id", getUser);
//GET ALL HOTELS
router.get("/", getUsers);

export default router;
