// Import the MySQL library
import mysql from 'mysql2/promise';

// Create a MySQL connection pool
export const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_buku',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export const query = async (sql: string, values?: any) => {
  const connection = await pool.getConnection();
  try {
    const [results] = await connection.query(sql, values);
    return results;
  } catch (error) {
    throw error;
  } finally {
    connection.release();
  }
};
