const mongoose = require("mongoose");

//const URI = "mongodb://127.0.0.1/Employees";
const URI = "mongodb+srv://LugaresDUI99:LugaresDUI99@lugaresdui99.jyxdbru.mongodb.net/?retryWrites=true&w=majority";

mongoose
    .connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        //useFindAndModify: false
    })
    .then((db) => console.log("db is connected"))
    .catch((err) => console.error('db is not connected ---- ', err));

module.exports = mongoose;



/*const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://LugaresDUI99:<password>@lugaresdui99.jyxdbru.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);*/
