const express = require("express");
var cors = require('cors');

const MongoClient = require("mongodb").MongoClient;
const mongoDBCloudURL = "mongodb+srv://arun123:Note@123@cluster0.s0fyl.mongodb.net/scan_app?retryWrites=true&w=majority";

const app = express();
const PORT = process.env.PORT || 4000;

const client = new MongoClient(mongoDBCloudURL, { useNewUrlParser: true, useUnifiedTopology: true  });
var albumCollection;
client.connect(err => {
  albumCollection = client.db("scan_app").collection("albums");

  console.log("Database connection success!")
});

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get("/getData", (req, res) => {
  albumCollection.find({}).toArray((err, docs) => {
    if (err) {
      console.log("Error: ", err);
    } else {
      res.send(docs);
    }
  })
})

app.post("/postData", async (req, res) => {

  await albumCollection.remove({});

  albumCollection.insert(req.body, (err, result) => {
    if (err) {
      console.log("Error: ", err);
    } else {
      res.send({"msg": "Data saved successfully"});
    }
  })
})

app.delete("/delData", (req, res) => {
  albumCollection.deleteMany({}, (err, result) => {
    if (err) {
      console.log("err", err);
    } else {
      console.log({"msg": "All Albums deleted"})
      res.send({"msg": "All Albums Deleted"})
    }
  })
})


app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})
