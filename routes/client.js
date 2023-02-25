import express from "express";
import { addShopPage, homePage } from "../controllers/client.js";

const router = express.Router();

router.get("/", homePage);
router.get("/add-shop", addShopPage);

export default router;
