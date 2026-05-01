const express = require('express');
const app = express();

app.get('/api/data', (req, res) => {
  res.json({
    message: "Hello from Service B",
    time: new Date()
  });
});

app.get('/health', (req, res) => {
  res.send("OK");
});

app.listen(3000, () => {
  console.log("Service B running on port 3000");
});