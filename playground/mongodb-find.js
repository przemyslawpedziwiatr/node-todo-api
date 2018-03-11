// const MongoClient = require(`mongodb`).MongoClient;
const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect(`mongodb://localhost:27017/TodoApp`, (err, client) => {
    if (err) {
        return console.log(`Unable to connect to MonogDB server`);
    }
    console.log(`Connected to MongoDB server`);

    const db = client.db('TodosApp');

    // db.collection(`Todos`).find({
    //     _id: new ObjectID(`5aa5a16484a10f3a7a3aa23a`)
    // }).toArray().then((docs) => {
    //     console.log(`Todos`);
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log(`Unable to fetch todos`, err);
    // })

    db.collection(`Todos`).count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log(`Unable to fetch todos`, err);
    })

    db.collection(`Users`).find({
        name: { $in: ["Przemyslaw", "John"] }
    }).toArray().then((result) => {
        console.log(`Got:`);
        console.log(JSON.stringify(result, undefined, 2));
    }, (err) => {
        console.log(`Unable to fetch todos`, err);
    })
 

    db.close();
});