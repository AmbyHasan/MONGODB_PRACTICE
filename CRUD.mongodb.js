use("car");




//                       INSERT



//insert one
db.cars.insertOne({
 "maker": "Tata",
 "model": "Nexon",
 "fuel_type": "Petrol",
 "transmission": "Automatic",
 "engine": {
 "type": "Turbocharged",
 "cc": 1199,
 "torque": "170 Nm"
 },
 "features": [
 "Touchscreen",
 "Reverse Camera",
 "Bluetooth Connectivity"
 ],
 "sunroof": false,
 "airbags": 2
 });




 //insert many

 db.cars.insertMany([
 {
 "maker": "Hyundai",
 "model": "Creta",
 "fuel_type": "Diesel",
 "transmission": "Manual",
 "engine": {
 "type": "Naturally Aspirated",
 "cc": 1493,
 "torque": "250 Nm"
 },
 "features": [
 "Sunroof",
 "Leather Seats",
 "Wireless Charging",
"Ventilated Seats",
"Bluetooth"
 ],
 "sunroof": true,
 "airbags": 6
 },
 {
 "maker": "Maruti Suzuki",
 "model": "Baleno",
 "fuel_type": "Petrol",
 "transmission": "Automatic",
 "engine": {
 "type": "Naturally Aspirated",
 "cc": 1197,
 "torque": "113 Nm"
 },
 "features": [
 "Projector Headlamps",
 "Apple CarPlay",
 "ABS"
 ],
 "sunroof": false,
 "airbags": 2
 },
 {
 "maker": "Mahindra",
 "model": "XUV500",
 "fuel_type": "Diesel",
 "transmission": "Manual",
 "engine": {
 "type": "Turbocharged",
 "cc": 2179,
 "torque": "360 Nm"
 },
 "features": [
 "All-Wheel Drive",
 "Navigation System",
 "Cruise Control"
 ],
 "sunroof": true,
 "airbags": 6
 },

 {
 "maker": "Honda",
 "model": "City",
 "fuel_type": "Petrol",
 "transmission": "Automatic",
 "engine": {
 "type": "Naturally Aspirated",
 "cc": 1498,
 "torque": "145 Nm"
 },
 "features": [
 "Keyless Entry",
 "Auto AC",
 "Multi-angle Rearview Camera"
 ],
 "sunroof": false,
 "airbags": 4
 }
]
)



//                                                   READ


 
 //this will return all the documents
 db.cars.find({});

 //this will return only one document
 db.cars.findOne({});
 
 //for displaying only specific categories of the documents ie projection
 db.cars.find({} ,{model:1})


 //when we dont want to display the id as well
 db.cars.find({} ,{model:1 , _id:0});

 //for displaying the documents with  a particular column value
 db.cars.find({fuel_type:"Diesel"})
//here only those documents having fuel type as diesel will get displayed

//here engine is an object and type is the key
db.cars.find({ "engine.type":"Turbocharged"})



                                                                   //UPDATE


//updateMany

//this will insert a new field color:red wherever model is NEXON
db.cars.updateMany(
{model:"Nexon"},
{$set: {color:"Red"}}
)
//for removing a field

db.cars.updateMany(
{model:"Nexon"},
{$unset: {color:"Red"}}
)


//pushing a value in array 

db.cars.updateOne(    //only the first document will get updated
    {model:"Nexon"} ,
    {$push : {features:"heated seats" }}
)

//popping a value from an array
db.cars.updateOne(    //only the first document will get updated
    {model:"Nexon"} ,
    {$pull : {features:"heated seats" }}
)

//pushing multiple values in an array
db.cars.updateOne(
    {model:"Nexon"},
    {$push:{features:{$each: ["wireless charging" ,"voice control"]}}}
)



db.cars.find({model:"Nexon"})




//                                 UPSERT


//it is a combination of update and insert

//it will update the document if it already exists or insert it and then make the updation , incase the document does not exists
db.cars.updateOne(
    {"model":"Nexon"} ,
    {$set : { color : "black"}} ,
    {upsert:true}
)



//                     DELETE

db.cars.deleteOne({fuel_type:"Petrol"})






