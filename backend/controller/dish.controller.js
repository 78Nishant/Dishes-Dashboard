const model=require('../model/dish.model')
const Dishes=model.Dishe;

//fetch all dishes
exports.getAllDishes=async (req,res)=>{
    const getDishes=await Dishes.find({})
    res.status(200).json(getDishes);
}
//Published status
exports.isPublished=async(req,res)=>{
    const searchedDish=req.params.name;
    const checkStatus=await Dishes.findOne({dishName : searchedDish})
    var data,current;
    if(checkStatus.isPublished==true ? current=false : current=true);
    console.log(checkStatus.isPublished); 
    data=await Dishes.findOneAndUpdate(
    { dishName : searchedDish},
    {
        $set : { isPublished : current}
    }
    )
   
   
    res.status(200).json(data)
}