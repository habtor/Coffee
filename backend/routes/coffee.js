import express from "express";
import {
  getAllCoffees,
  createCoffee,
  getCoffeeById,
} from "../controllers/coffee.js";
import e from "express";

const router = express.Router();

router.get("/", getAllCoffees);
router.post("/", createCoffee);
router.get("/:id", getCoffeeById);

export default router;
