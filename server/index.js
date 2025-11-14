const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Server is working!' });
});

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
