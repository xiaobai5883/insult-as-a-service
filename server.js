const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Read insults once on startup
const rawData = JSON.parse(fs.readFileSync('./insults.json', 'utf8'));
const insults = rawData.insults;

app.get('/', (req, res) => {
  const randomInsult = insults[Math.floor(Math.random() * insults.length)];
  res.json({ insult: randomInsult });
});

app.get('/insult', (req, res) => {
  const randomInsult = insults[Math.floor(Math.random() * insults.length)];
  res.json({ insult: randomInsult });
});

app.listen(PORT, () => {
  console.log(`Insult API running on port ${PORT}`);
  console.log(`Visit: http://localhost:${PORT}/insult`);
});
