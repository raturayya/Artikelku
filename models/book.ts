import { pool } from '../lib/db';

export interface Book {
  id: number;
  title: string;
  description: string;
}

export async function getBooks(): Promise<Book[]> {
  const [rows] = await pool.query('SELECT id, title, description FROM buku');
  return rows as Book[];
}

export async function createBook(book: Book): Promise<void> {
  await pool.query(
    'INSERT INTO buku (title, description) VALUES (?, ?)',
    [book.title, book.description],
  );
}

export async function updateBook(id: number, book: Book): Promise<void> {
  await pool.query(
    'UPDATE buku SET title = ?, description = ? WHERE id = ?',
    [book.title, book.description, id],
  );
}

export async function deleteBook(id: number): Promise<void> {
  await pool.query('DELETE FROM buku WHERE id = ?', [id]);
}
