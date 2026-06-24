const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from Practice API!' });
});

app.post('/echo', (req, res) => {
  res.json({ received: req.body });
});

app.listen(port, () => {
  console.log(`Practice API listening on http://localhost:${port}`);
});
