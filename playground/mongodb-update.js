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

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5aa6e16f84a10f3a7a3aaa2c')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // })
    // .then(result => console.log(result));

    db.collection('Users').findOneAndUpdate({
        name: "Przemyslaw"
    }, {
        $set: {
            name: 'Tomislaw'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    });

    // db.close();
});