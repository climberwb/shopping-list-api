var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

var Storage = function() {
    this.items = [];
    this.id = 0;
};

Storage.prototype.add = function(name) {
    var item = {name: name, id: this.id};
    this.items.push(item);
    this.id += 1;
    return item;
};
Storage.prototype.addItemObject = function(item) {
    this.items.push(item);
    return item;
};
Storage.prototype.remove = function(item_id){
    var removed_item;
    this.items.forEach(function(item,index,item_arr){
        if(item.id == item_id ){
          removed_item = item;
          item_arr.splice(index,1);
          var num = index;
          return item;
        }
    });
    return removed_item;
}

Storage.prototype.edit = function(item_id,new_item){
    var edited_item;
    this.items.forEach(function(item,index,item_arr){
        if(item.id == item_id ){
           edited_item = new_item;
           item.name = new_item.name;
           return item;
        }
    });
    if(!edited_item){
        this.addItemObject(new_item);
        edited_item = new_item;
    }
    return edited_item;
}

var storage = new Storage();
storage.add('Broad beans');
storage.add('Tomatoes');
storage.add('Peppers');

var app = express();
app.use(express.static('public'));

app.get('/items', function(req, res) {
    res.json(storage.items);
});

app.post('/items',jsonParser, function(req,res){
   if(!req.body){
       return res.sendStatus(404);
   }
   
   var item = storage.add(req.body.name);
   res.status(201).json(item);
});

app.delete('/items/:id',jsonParser, function(req,res){
   if(!req.params.id){
       return res.sendStatus(404);
   }
   
   var item = storage.remove(req.params.id);
   
   if(!item){
       return res.sendStatus(404);
   }
   res.status(201).json(item);
});

app.put('/items/:id',jsonParser, function(req,res){
   if(!req.params.id){
       return res.sendStatus(404);
   }
   
   var item = storage.edit(req.params.id,req.body);
   
   if(!item){
       return res.sendStatus(404);
   }
   res.status(201).json(item);
});

//app.listen(process.env.PORT || 8080);
app.listen(process.env.PORT, process.env.IP);

//export to test-server.js
exports.app = app;
exports.storage = storage;