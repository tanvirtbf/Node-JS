const mongo = require('mongodb')

const MongoClient = mongo.MongoClient

const MONGO_URL = "mongodb+srv://root:root@cluster0.2b5su3o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


const mongoConnect = (callback) => {
    MongoClient.connect(MONGO_URL)
        .then((client) => {
            console.log(client);
            callback(client)
        }).catch(err => {
            console.log(err);
        })
}

module.exports = mongoConnect;


