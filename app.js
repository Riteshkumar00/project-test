const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

// Parse JSON bodies
app.use(bodyParser.json());

// Serve static files directly from /public
app.use(express.static(path.join(__dirname, 'public')));

// Default route - serves index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start the server
const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running at http://0.0.0.0:${PORT}`);
});
