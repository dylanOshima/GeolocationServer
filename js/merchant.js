//Contains the list of restaurants in NO ORDER
var merchants = [];

function Merchant(name, xCoord, yCoord){
    this.name = name
    this.xCoord = xCoord
    this.yCoord = yCoord
}

////Adds a restaurant to the list of restaurants
//function addRestaurant(resto){
//    restaurants.push(resto)
//}

//Distance formula to find the distance between two points in a plane
function distanceBetweenPoints(x,y,resto){
    return Math.sqrt(Math.pow((x - resto.xCoord),2) + Math.pow((y - resto.yCoord),2))
}

//Returns the restaurants in order of their relative distance to a point
//TODO: Use a more efficient sorting algorithm
function orderMerchants(x, y){
    if(x == NaN || y == NaN){
        console.log("Please put in a coordinate")   
    } else {
//        console.log("1: " + merchants.length)
        for(i=0;i<merchants.length;i++){
            merchants[i].distance = Math.floor(distanceBetweenPoints(x,y,merchants[i]))
        }
        
        bubbleSort(merchants)
                
        return merchants
    }
}

//specific to web page, in the MVP we'll just return a 
function printRestaurantList(){
    var ol = document.getElementById("RestoList")

    for(j=0; j<restaurants.length;j++){
        restoList = "<li>" + merchants[j].name + " - " + merchants[j].distance + "</li>";
        console.log(restoList)
        ol.innerHTML += restoList;
    }
}

//Sorting merchants by distance from the users location
function bubbleSort(list){
    var flag = true
    var temp
    
    while(flag){
        flag = false
        
        for(i=0;i<(list.length-1);i++){
            if(list[i].distance > list[i+1].distance){
                temp = list[i]
                list[i] = list[i+1]
                list[i+1] = temp
                
                flag = true
            }
        }
    }
}

//GET Returns the merchants in the array
exports.getMerchants = function(){
    return merchants
}

//POST Returns an ordered list of merchants
exports.orderMerchants = function(x, y){
    orderMerchants(x,y)
    return merchants
}

//POST Adds a new merchant
exports.addMerchant = function(name, x, y){
    var m = new Merchant(name, x, y);
    merchants.push(m);
}

//Just for testing some commands
exports.fillMerchant = function(){
    merchants.push(new Merchant("Roberta's", 1201, 2304))
    merchants.push(new Merchant("John's", 6921, 0141))
    merchants.push(new Merchant("Starbucks", 14, 4991))
}

exports.fillDistances = function(){
    merchants.push(new Merchant("Roberta's", 1201, 2304))
    merchants[0].distance = 100
    merchants.push(new Merchant("John's", 6921, 0141))
    merchants[1].distance = 50
    merchants.push(new Merchant("Starbucks", 14, 4991))
    merchants[2].distance = 250

}