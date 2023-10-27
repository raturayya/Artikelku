import { getBooks, createBook, updateBook, deleteBook, Book } from '../../../models/book';
import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import multer from 'multer';
import { Request } from 'express';
import fs from 'fs';
import { basename, join } from 'path';

const upload = multer({ dest: 'public/uploads/' });

const handler = nc<NextApiRequest, NextApiResponse>();

fs.promises.mkdir('public/uploads/', { recursive: true });

// Function to create URL for image based on filename
const getImageUrl = (filename: string) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_URL || '';
  return join(basePath, 'public', 'uploads', filename);
};

handler.get(async (req, res) => {
  const books = await getBooks();
  res.status(200).json(books);
});

handler.post(async (req: NextApiRequest, res) => {
  const book = req.body as Book;
  
  try {
    await createBook(book);
    res.status(201).json('Data created successfully');
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Terjadi kesalahan saat menyimpan data' });
  }
});

handler.put(async (req: NextApiRequest, res) => {
  const { id } = req.query;
  const book = req.body as Book;

  try {
    await updateBook(Number(id), book);
    res.status(200).json('Data updated successfully');
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Terjadi kesalahan saat mengupdate data' });
  }
});

handler.delete(async (req, res) => {
  const { id } = req.query;
  try {
    await deleteBook(Number(id));
    res.status(200).json('Data deleted successfully');
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Terjadi kesalahan saat menghapus data' });
  }
});

export default handler;
