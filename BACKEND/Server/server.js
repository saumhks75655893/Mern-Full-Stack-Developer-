// common js
// const express = require('express')

// module js
import express from 'express';

const app = express();
// middleware
app.use(express.json())

app.get('/', (req, res) => {
  res.send("get route");
})

app.post('/create-user', (req, res) => {
  console.log(req.body)
  res.send({
    "message": `Hey ${req.body.name}, Your data saved successfully`
  })
})

app.get('/about', (req, res) => {
  res.send("about route")
})

app.listen(5000, () => {
  console.log("Server login on http://locahost:5000")
})