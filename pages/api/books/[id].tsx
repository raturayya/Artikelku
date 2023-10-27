import { NextApiRequest, NextApiResponse } from "next";
import { getBooks, updateBook, Book } from "../../../models/book";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "PUT") {
    const id = Number(req.query.id);
    const { title, description } = req.body;
    const book = { id, title, description };

    try {
      await updateBook(id, book);
      res.status(200).json(book);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Terjadi kesalahan saat mengupdate data" });
    }
  } else {
    res.setHeader("Allow", ["PUT"]);
    res.status(405).json({ message: `Method ${req.method} tidak diizinkan` });
  }
}
