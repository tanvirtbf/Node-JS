import mysql from "mysql2/promise";

// 1. Connect to the mysql server
const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mysql_db",
});
console.log("Mysql connection established");

// 2. Create a database if it doesn't exist
// await db.execute(`CREATE DATABASE IF NOT EXISTS mysql_db`)
// console.log(await db.query(`SHOW DATABASES`));

// 3. Create a table in the database

// await db.execute(`CREATE TABLE IF NOT EXISTS users (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     username VARCHAR(255) NOT NULL,
//     email VARCHAR(255) NOT NULL UNIQUE
// )`);

// 4. Insert data into the table
// await db.execute(`
//     INSERT INTO users (username, email) 
//     VALUES
//     ('Tanvir', 'tanvir1@gmail.com')
//     `);

// await db.execute(`
//     INSERT INTO users (username, email) 
//     VALUES
//     (?, ?)
//     `, ['Tanvir Ahmed', 'tanvir018765@gmail.com']);

// const values = [
//     ["Tanvir Ahmed", "tanvir11@gmail.com"],
//     ["Sadia Ahmed", "sadia@gmail.com"],
//     ["Maymuna Ahmed", "maymuna@gmail.com"]
// ]
// await db.query(`INSERT INTO users (username, email)  VALUES ?`, [values]);


// // 5. Update data in the table
// try {
// await db.execute(`UPDATE users SET username = ? WHERE id = ?`, ['Tanvir Ahmed', 1]);
// console.log("User updated successfully");
// } catch (error) {
//     console.error("Error updating user:", error.message);
// }


// // 6. Delete data from the table
await db.execute(`DELETE FROM users WHERE id = ?`, [1]);

// Read data from the table
const [rows, fields] = await db.execute(`SELECT * FROM users`);
console.log(rows);

