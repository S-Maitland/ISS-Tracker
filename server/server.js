const express = require('express');
const app = express();
const parser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

app.use(parser.json());
app.use(cors());
MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('messagesDb');
  const messagesCollection = db.collection('messages');
  const messagesRouter =
  createRouter(messagesCollection);
  app.use('/api/messages', messagesRouter);
})
.catch(console.error);

app.listen(3000, function() {
  console.log(`Listening on port ${this.address().port}`);
});
