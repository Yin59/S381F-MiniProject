const assert = require('assert');

const dbName = 'test';
const MongoClient = require('mongodb').MongoClient;

const mongourl = 'mongodb+srv://Marcocheung898:Marcocheung898@cluster0.odcke.mongodb.net/test?retryWrites=true&w=majority';
  
  exports.readRestaurant = (criteria, projection, callback) => {
    const client = new MongoClient(mongourl);
    client.connect((err)=>{
      const db = client.db(dbName);
      let cursor = db.collection('restaurants').find(criteria, projection);
      cursor.toArray((err,docs)=>{
        assert.equal(err,null);
        client.close();
        callback(docs);
      });
    });
  }

  exports.createRestaurant = ( docs, callback) => {
    const client = new MongoClient(mongourl);
    client.connect((err)=>{
        const db = client.db(dbName);
        db.collection('restaurants').insertOne(doc,(err,result) => {
            assert.equal(err,null);
            console.log('Create One restaurant');
            callback(result);
        });
    });
  }

  exports.editRestaurant = (criteria, result , callback) => {
    const client = new MongoClient(mongourl);
    client.connect((err)=>{
        const db = client.db(dbName);
        let cursor = db.collection('restaurants').updateOne(criteria,updateDoc,(err,result)=>{
            cursor.toArray((err,docs)=>{
                assert.equal(err,null);
                console.log('Update One restaurant');
                callback(result);
            });
        });
        
    });
  }

  exports.deleteRestaurant = (docs,callback) => {
    const client = new MongoClient(mongourl);
    client.connect((err)=>{
        const db = client.db(dbName);
        let cursor = db.collection('restaurants').deleteOne(criteria,(err,result)=>{
            cursor.toArray((err,docs)=>{
                assert.equal(err,null);
                console.log('Delete One restaurant');
                callback(result);
            });
        });
    })
  }


  