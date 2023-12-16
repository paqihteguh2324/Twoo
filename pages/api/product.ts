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
  if (req.method === "GET") {
    try {
      // Contoh penggunaan Prisma Client untuk mengambil data
      const products = await prisma.product.findMany();

      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  } else if (req.method === "POST") {
    try {
      // Contoh penggunaan Prisma Client untuk membuat data
      const body: Product = req.body; 
      const price = typeof body.price === 'string' ? parseFloat(body.price) : body.price;
      const product = await prisma.product.create({
        data: {
          name: body.name,
          price: price,
          image: body.image,
        },
      });

      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ error: "error disini"});
    }
  } 
  else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
