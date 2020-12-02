const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// solution you're looking for
app.post("/", function (req, res) {
  console.log(req.headers)
  req.on("data", (d) => {
    console.log(d.toString())
  })
  res.send("POST request!!!");
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
