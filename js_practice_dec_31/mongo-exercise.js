const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log(`Couldn't connect to db`);
    }

    console.log('Connected to mongodb');

    const db = client.db('TodoApp');

    // db.collection('Users').insertOne({
    //     name: 'Juan',
    //     age: 29,
    //     date: new Date()
    // }, (err, result) => {

    //     if (err) {
    //         console.log('error');
    //     } else {
    //         console.log(JSON.stringify(result, null, 3));
    //     }
    // })
    // db.collection('Users')
    //     .findOne({name: 'Juan'})
        // .toArray()
        // .then(user => console.log(JSON.stringify(user, null, 2)))
        // .then(user => console.log(JSON.stringify(user)));
    const id = new ObjectID('5c2974609cfc4571b0a64202');
    const users = db.collection('Users');
        users.findOne({'_id': id})
        // .toArray()
        .then(user => console.log(JSON.stringify(user, null, 2)))
        // .then(user => console.log(JSON.stringify(user)));

    client.close();

})