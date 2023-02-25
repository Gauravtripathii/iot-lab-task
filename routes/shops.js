import express from "express";
import { addShop, getShops } from "../controllers/shops.js";

const router = express.Router();

router.get("/", getShops);
router.post("/", addShop);

export default router;