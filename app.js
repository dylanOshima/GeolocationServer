const express = require('express');
const app = express();

var path = require('path'),
    bodyParser = require('body-parser');

//Brings in the merchant functions
var merchants = require('./js/merchant.js');

//DELETE For testing
merchants.fillMerchant();

//A middleware that allows for the support of parsing of posted HTML data
app.use(bodyParser.json())
//Allows for supporting the application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));


//Default response
app.get('/', function(req, res){
    res.send("Nothing is here. Go away")
})


//Returns the merchants in the array
app.get('/merchants', function(req, res){
    console.log("/merchants called")
    res.send(merchants.getMerchants());
})

//Returns the merchants in the array sorted
app.post('/merchants/ordered', function(req, res){
    console.log("/merchants/ordered called")
    
    res.setHeader('Content-Type', 'application/json');
    request = req.body;
    
    console.log(req.body);
    console.log(merchants.getMerchants())
    
    var ordered = merchants.orderMerchants(request.x, request.y);
    console.log(ordered);
    res.send(JSON.stringify(ordered));
})

app.post('/merchants/add', function(req, res){
    onsole.log("/merchants/add called")
    
    res.setHeader('Content-Type', 'application/json');
    request = req.body;
    
    merchants.addMerchant(request.name, request.x, request.y);
    
    console.log(merchants.getMerchants());

    res.send(JSON.stringify("Merchant " + request.name + " added."));
})


app.listen(3000, function(){
    console.log("Running on port 3000");
});