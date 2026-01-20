use("car"); //connecting with database


// 1-     COUNT

//returning the count of all the documents present in the database
db.cars.find().count();

//returning the count of  documents which statisfy a condition

db.cars.find({fuel_type:"Petrol"}).count()

//-------------------------------------------------------------------------------------------


//2 - SORT


//sorting on the basis of model
db.cars.find({} , {model:1 ,_id:0 , maker:1}).sort({model:1})


//3 - LIMIT

//for printing  limited rows

db.cars.find({}).limit(3);



//4 - SKIP
//for skipping some rows
4- db.cars.find().skip(1);

