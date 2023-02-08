const {MongoClient} = require("mongodb");
const dburl = "mongodb://127.0.0.1:27017";


connection = (cb)=>{
    MongoClient.connect(dburl , (error , client)=>{
        if(error) return console.log(error)
        const db = client.db("Books");
        cb(db);
    })
}


module.exports = connection;