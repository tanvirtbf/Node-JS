import express, { urlencoded } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const port = 3000;

// Required to simulate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve static HTML from 'public' folder
const absolutePath = path.join(__dirname, 'public');
app.use(express.static(absolutePath));

// Middleware for JSON and URL-encoded form data
app.use(express.json());
app.use(urlencoded({ extended: true }));

// Route for home (optional)
app.get('/', (req, res) => {
  res.sendFile(path.join(absolutePath, 'index.html'));
});

// POST route to receive form data
app.post('/shorten', (req, res) => {
  const { name, password } = req.body;
  console.log("✅ Received from frontend:");
  console.log("Name:", name);
  console.log("Password:", password);

  // Send back a success response with the same data
  res.status(200).json({
    message: 'Data received successfully!',
    name,
    password
  });
});

app.listen(port, () => {
  console.log(`Server running at: http://localhost:${port}`);
});
