// const { MongoClient, ObjectID } = require('mongodb');

// MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
//     if (err) {
//         return console.log(`Couldn't connect to db`);
//     }

//     console.log('Connected to mongodb');

//     const db = client.db('TodoApp');

//     // db.collection('Users').insertOne({
//     //     name: 'Julie',
//     //     age: 29,
//     //     date: new Date()
//     // }, (err, result) => {

//     //     if (err) {
//     //         console.log('error');
//     //     } else {
//     //         console.log(JSON.stringify(result, null, 3));
//     //     }
//     // })

// db.collection('Users')
    // .findOne({name: 'Julie'})
    // .toArray()
    // .then(user => console.log(JSON.stringify(user, null, 2)))
    // .then(user => console.log(JSON.stringify(user)));

const id = new ObjectID('5c2974609cfc4571b0a64202');
const users = db.collection('Users');
    users.findOne({'_id': id})
    .toArray()
    .then(user => console.log(JSON.stringify(user, null, 2)))
    .then(user => console.log(JSON.stringify(user)));

client.close();

// })

// Challenge: Find all users with name Julie
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log(`Couldn't connect to db`);
    }

    const db = client.db('TodoApp');

    db.collection('Users')
        .find({ name: 'Julie'})
        .toArray()
        .then((user) => {
            console.log(JSON.stringify(user, null, 3));
        })

    client.close();

})

// Challenge: Update a record
const { MongoClient, ObjectID } = require('mongodb');

const measureTheTimeOfThisFunction = () => {
    MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
        if (err) {
            return console.log(`Couldn't connect to db`);
        }

        const db = client.db('TodoApp');

        db.collection('interests')
            .insertOne({name: 'Measure the time'})
            // .updateOne(
            //     {'_id': new ObjectID('5c2ad36c09b4477f933e69a2')},
            //     { $set: {text: 'I am updated'} },
            //     { returnOriginal: false }
            // )
            .then(user => console.log(JSON.stringify(user, null, 3)));

        client.close();
    })
};

const measureTime = () => {
    console.log('===========================================');
    console.time();
    measureTheTimeOfThisFunction();
    console.timeEnd();
    console.log('===========================================');
}

measureTime();
