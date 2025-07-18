const express = require('express');
const app = express();
const PORT = 5000;

const userRoutes = require('./router/router');
const cors = require('cors');

app.use(express.json()); 
app.use(
  cors({
    origin: "http://localhost:3000", // your React frontend URL
    credentials: true,               // allow cookies to be sent
  })
);

app.use(userRoutes);


const { connectMongoDb } = require('./connection/connection')
connectMongoDb("mongodb://localhost:27017/mydb");


// Define a route


app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
