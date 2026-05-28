require("dotenv").config();
const express = require('express')
const app = express()
const cors = require('cors')
const connectDB = require("./config/db.js");
app.use(cors());
app.use(express.json());
const port = Number(process.env.PORT) || 3000;
console.log("Starting server on port", port);


const user = require("./routes/user.js");
const task = require("./routes/task.js");
const habit = require("./routes/habit.js")
const collaboration = require("./routes/collaboration.js")
const education = require("./routes/education.js")

app.use("/jswm/user",user);
app.use("/jswm/task",task);
app.use("/jswm/habit",habit);
app.use("/jswm/collaboration",collaboration);
app.use("/jswm/education",education)


app.get('/', (req, res) => {
  res.send('Hello World! siddhant')
})

;(async () => {
  try {
    await connectDB();
    console.log("Calling app.listen with port", port);
    const server = app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    });

    server.on("error", (error) => {
      console.error("❌ Server failed to bind:", error)
      process.exit(1)
    })
  } catch (error) {
    console.error("❌ Failed to start server because database connection failed:", error)
    process.exit(1)
  }
})()
