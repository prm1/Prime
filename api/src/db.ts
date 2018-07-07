// Mongo
import * as mongodb from 'mongodb'

addPrime(2, () => console.log("prime 2 added"));
console.log(getPrime(2, null));

export interface Prime {
    _number: mongodb.ObjectID;
}

export interface NonPrime {
    _number: mongodb.ObjectID;
    dividedBy: number;
}

export function getPrime(_number: number, cb: (err, prime?: Prime) => void) {
    mongodb.MongoClient.connect("mongodb://localhost:27017/", function (err, client) {
        console.log("Connected successfully to server");
        const db = client.db('local');

        db.collection('primes', (err, primesCollection) => {
            primesCollection.findOne({ "_number": new mongodb.ObjectID(_number) }, (err, prime: Prime) => {
                if (err) return cb(err);
                return cb(null, prime);
            })
        })
        client.close();
    })
};

export function addPrime(primeNumber: number, cb: (err, prime?: Prime) => void) {

    mongodb.MongoClient.connect("mongodb://localhost:27017/", function (err, client) {
        console.log("Connected successfully to server");
        const db = client.db('local');

        db.collection('primes', (err, primesCollection) => {
            if (err) return cb(err);
            primesCollection.insertOne({
                _number: primeNumber
            }, (err, result) => {
                if (err) return cb(err);
                const prime = result.ops[0];
                cb(null, prime);
            })
        })
    })
};

  //TODO: save primes bulk
  //TODO: save non prime bulk
  //TODO: get max number from prime & non prime