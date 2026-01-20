use("car");
//COMPARISON OPERATORS

// $eq =
//$lt <        , $gt >    , $lte <=       ,  $get >=      ,  $ne !=

//eg {age : {$eq : 25}}


db.cars.find({"engine.cc": {$gt :2000}});


//getting cars whose engine.cc value in between 1498 and 2179
db.cars.find({"engine.cc":{$in: [1498 , 2279]}})


//not in
db.cars.find({"engine.cc":{$nin: [1498 , 2279]}})


//LOGICAL OPERATORS

//AND 
db.cars.find({
 $and:[
    {fuel_type:"Diesel"} ,
    {"engine.type": "Turbocharged"},
    {sunroof:true}
 ]
})

//OR

db.cars.find({
 $or:[
    {fuel_type:"Diesel"} ,
    {"engine.type": "Turbocharged"},
   
 ]
})


//NOR

db.cars.find({
 $nor:[
    {fuel_type:"Diesel"} ,
    {"engine.type": "Turbocharged"},
   
 ]
})



//    ELEMENT OPERATORS

//$exists

//print those documents where the key "fuel_type" exists
db.cars.find({
    fuel_type: { $exists:true}
})


//print those documents where the type of the model is string
db.cars.find({
    model:{$type:"string"}
})



//ARRAY OPERTORS

//$size : returns all documents that matches specified array size

db.cars.find({
features :{$size:3}
})


//$all :  returns all the documents that matches the pattern

//will return the documents having features of - > Bluetooth , Sunroof
db.cars.find({
  features:{$all : ['Bluetooth' ,  'Sunroof']} 
})

