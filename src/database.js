const mongoose = require("mongoose");

//const URI = "mongodb://127.0.0.1/Employees";
const URI = "mongodb+srv://LugaresDUI99:LugaresDUI99@lugaresdui99.jyxdbru.mongodb.net";

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: true
  })
  .then((db) => console.log("db is connected"))
  .catch((err) => console.error('db is not connected ---- ', err));

module.exports = mongoose;

//t10N1arHQjPKKjUHRerBiCUS9WFg2ZSVKPMAuVR5csZAd2hW9LBVGaRi4lckDBqx

/*
curl --location --request POST 'https://us-east-1.aws.data.mongodb-api.com/app/data-nxaxa/endpoint/data/v1/action/findOne' \
--header 'Content-Type: application/json' \
--header 'Access-Control-Request-Headers: *' \
--header 'api-key: t10N1arHQjPKKjUHRerBiCUS9WFg2ZSVKPMAuVR5csZAd2hW9LBVGaRi4lckDBqx' \
--data-raw '{
    "collection":"<COLLECTION_NAME>",
    "database":"<DATABASE_NAME>",
    "dataSource":"LugaresDUI99",
    "projection": {"_id": 1}
}'*/


/*
const { MongoClient, ServerApiVersion } = require('mongodb');
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
