const express = require("express");
const db = require(".config/connection");

const mongodb = require("mongodb").MongoClient;

// import your models here

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const connectionStringURI = `mongodb://127.0.0.1:27017/infobahnDB`;

// Creates a connection to a MongoDB instance and returns the reference to the database
mongodb.connect(
  // Defines connection between app and MongoDB instance
  connectionStringURI,
  // Sets connection string parser and Server Discover and Monitoring engine to true and avoids warning
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    // Use client.db() constructor to add new db instance
    db = client.db();
    app.listen(PORT, () => {
      console.log(`App listening at http://localhost:${PORT}`);
    });
  }
);
