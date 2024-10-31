import express, { Request, Response } from "express";

export const getProducts = async (req: Request, res: Response) => {
    // Your logic here
    const products = ["Product EC 1", "Product 2", "Product 3"];
    await res.json(products);
}