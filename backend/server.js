const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5004;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/calculate-interest', (req, res) => {
  const { principal, rate, time } = req.body; 
  const interest = (principal * rate * time) / 100;
  res.json({ interest });
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});