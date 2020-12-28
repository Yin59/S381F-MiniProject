const fs = require('fs');
const ObjectID = require('mongodb').ObjectID;
const restaurantModel = require('../models/restaurant');


exports.handle_read = (req, res) => {
    restaurantModel.readRestaurant(
        {},
        { 'fields': { name: 1 } },
        (docs) => {
            console.log(docs);
            res.status(200).render('display', { restaurants: docs });
        }
    );
};


exports.handle_create = (req, res) => {
    res.status(200).render('create');
    if(files.filetoupload && files.filetoupload.size >0){
        restaurantModel.createRestaurant(
        fs.readFile(files.filetoupload.path, (err,data)=> {
            
           doc['name'] = req.fields.name;
           doc['borough'] = req.fields.borough;
           doc['cuisine'] = req.fields.cuisine;
           doc['photo'] = new Buffer.from(data).toString('base64');
           doc['photo_mimetype'] = files.filetoupload.type;
           doc['street'] = req.fields.street;
           doc['building'] = req.fields.building;
           doc['zipcode'] = req.fields.zipcode;
           doc['coord'] = req.fields.lon + ',' + req.fields.lat;
           doc['grades'] = [];
           doc['owner'] = req.session.userid;
        }),(docs) => {
            console.log(docs);
            res.status(200).render('create',{message: docs});
        }
        )}else{
            restaurantModel.createRestaurant(    
        fs.readFile(files.filetoupload.path, (err,data)=> {
            
           doc['name'] = req.fields.name;
           doc['borough'] = req.fields.borough;
           doc['cuisine'] = req.fields.cuisine;
           doc['photo'] = '';
           doc['photo_mimetype'] = '';
           doc['building'] = req.fields.building;
           doc['zipcode'] = req.fields.zipcode;
           doc['coord'] = req.fields.lon + ',' + req.fields.lat;
           doc['grades'] = [];
           doc['owner'] = req.session.userid;
        }),(docs) => {
            console.log(docs);
            res.status(200).render('create',{message: docs});
        }
            )}
    
        
    
};

exports.handle_edit = (req, res) => {
    res.render(200).render('edit',doc._id);
        
    
};


exports.handle_delete = (req, res) => {
    var DOCID = {};
    DOCID['_id'] = ObjectID(fields._id);
    restaurantModel.deleteRestaurant(DOCID,(docs)=>{
        console.log(docs);
        res.status(200).render('message',{message:docs});
    })
}

exports.handle_update = (req, res) => {
    var DOCID = {};
    DOCID['_id'] = ObjectID(fields._id);
    restaurantModel.editRestaurant()
}