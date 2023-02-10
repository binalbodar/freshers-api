
const express = require("express")
const bodyparser = require("body-parser")
const cors = require("cors")
const sql = require("mssql")
const path = require("path")
const port = 3000

var conn = require("./Config/db/sql")
var app = express()

var routes = require("./routes")

app.use(cors())
app.use(bodyparser.json({ limit: "50mb" }))
app.use(bodyparser.urlencoded({
  extended: false,
  limit: "50mb",
  parameterLimit: 50000,
}))
app.use('/api', routes)

app.get("/", (req, res) => {
  res.send("Welcome to freshers api.")
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})
