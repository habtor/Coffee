import express from "express";
import {
  getAllCoffees,
  createCoffee,
  getCoffeeById,
} from "../controllers/coffee.js";

const router = express.Router();

router.get("/", getAllCoffees);
router.post("/", createCoffee);
router.get("/:id", getCoffeeById);

export default router;
