const connectToMongo= require('./db');
const express = require('express')
var cors=require('cors');
connectToMongo();

const app = express()
const port = 3005
app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello Shashank!')
})
app.use(express.json());
//Available Routes
app.use('/api/form', require('./routes/form'))

app.listen(port, () => {
  console.log(`Registratex app listening on port ${port}`)
})