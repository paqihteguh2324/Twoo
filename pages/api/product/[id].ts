import { PrismaClient} from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

interface Product {
  name: string;
  price: number; // Ensure 'price' is treated as a number
  image: string;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {   
if (req.method === "DELETE") {
    try {
      const id = req.query.id;
  
      // Check if the product exists before attempting to delete
      const product = await prisma.product.findUnique({
        where: {
          id: Number(id),
        },
      });
  
      if (!product) {
        // If the product doesn't exist, return a 404 status
        res.status(404).json({ error: "Product not found" });
      } else {
        // Product exists, proceed with deletion
        const deletedProduct = await prisma.product.delete({
          where: {
            id: Number(id),
          },
        });
        res.status(200).json(deletedProduct);
      }
    } catch (error) {
      // Handle other errors, such as database connection issues or server errors
      console.error("Error:", error);
      res.status(500).json({ error: error });
    }}else if (req.method === "PUT") {
    try {
      const id = req.query.id;
      const body: Product = req.body;
      const price = typeof body.price === 'string' ? parseFloat(body.price) : body.price;
  
      // Check if the product exists before attempting to update
      const product = await prisma.product.findUnique({
        where: {
          id: Number(id),
        },
      });
  
      if (!product) {
        // If the product doesn't exist, return a 404 status
        res.status(404).json({ error: "Product not found" });
      } else {
        // Product exists, proceed with update
        const updatedProduct = await prisma.product.update({
          where: {
            id: Number(id),
          },
          data: {
            name: body.name,
            price: price,
            image: body.image,
          },
        });
        res.status(200).json(updatedProduct);
      }
    } catch (error) {
      // Handle other errors, such as database connection issues or server errors
      console.error("Error:", error);
      res.status(500).json({ error: error });
    }
  }
}