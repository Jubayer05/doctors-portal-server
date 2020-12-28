const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require("dotenv").config();
const MongoClient = require('mongodb').MongoClient;
const password = "jbud8lQuusbeojTu";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = 5000;



const uri = "mongodb+srv://Patients:jbud8lQuusbeojTu@cluster0.rwssf.mongodb.net/DoctorsPortal?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("DoctorsPortal").collection("PatiantsCollection");

  
});


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen( process.env.PORT || port);