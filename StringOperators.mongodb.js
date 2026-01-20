//STRING OPERATORS
use("car");



// 1->                $concat

db.cars.aggregate([
    {$match : 
         {
            maker:"Hyundai"
         }
    } ,
    {
        $project:{
            _id:0 ,
            Car_Name: {
                $concat:[
                    "$maker" ," ","$model"
                ]
            }
        }
    }
])


//2->        $uppercase
//the model name will get converted to uppercase

db.cars.aggregate([
    {$match: {maker: "Hyundai"}},

    {$project:{
        _id:0 ,
        model: {$toUpper: "$model"}
    }}
])



//3->          $regex_match

//this returns true or false 

db.cars.aggregate([
    {
        $project: {
                   model:1 ,
                    _id:0 ,
                    fuel_type:1,
                     is_diesel:{
                        $regexMatch:{
                            input:"$fuel_type" ,
                            regex:"Die"
                        }
 }}}])

//4-> OUT

//after aggregating store the result in another collection


db.cars.aggregate([
    {$match: {maker: "Hyundai"}},

    {$project:{
        _id:0 ,
        model: {$toUpper: "$model"}
    }} ,
    {
        $out:"hyundai_cars"
    }
])