import express from "express";
import { getProducts } from "./services/getProducts";
const router = express.Router();

router.get("/products", getProducts);

export default router;