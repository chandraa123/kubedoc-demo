const express = require('express');
const axios = require('axios');
const app = express();

const SERVICE_B_URL = "http://service-b";

app.get('/', async (req, res) => {
  try {
    const response = await axios.get(`${SERVICE_B_URL}/api/data`);
    res.json({
      fromA: "Hello from Service A",
      fromB: response.data
    });
  } catch (err) {
    res.status(500).send("Error connecting to Service B");
  }
});

app.get('/health', (req, res) => {
  res.send("OK");
});

app.listen(3000, () => {
  console.log("Service A running on port 3000");
});