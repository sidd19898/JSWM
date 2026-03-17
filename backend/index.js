require("dotenv").config();
const express = require('express')
const app = express()
const port = process.env.PORT;

const user = require("./routes/user.js");
const task = require("./routes/task.js");
const habit = require("./routes/habit.js")

app.use("/jswm/user",user);
app.use("/jswm/task",task);
app.use("/jswm/habit",habit)

app.get('/', (req, res) => {
  res.send('Hello World! siddhant')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
