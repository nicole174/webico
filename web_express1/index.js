const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

ap.post('/',(req,res) =>{
  re.send("Con metodo POST");
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
