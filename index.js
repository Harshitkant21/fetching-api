const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

app.post("/bfhl", (req, res) => {
  const data = req.body.data;

  const response = {
    is_success: true,
    user_id: "john_doe_17091999",
    email_id: "john@xyz.com",
    roll_number: "ABC123",
    even_numbers: data.filter(num => parseInt(num) % 2 === 0),
    odd_numbers: data.filter(num => parseInt(num) % 2 !== 0),
    alphabets: data.filter(str => /[A-Za-z]/.test(str)).map(str => str.toUpperCase())
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});