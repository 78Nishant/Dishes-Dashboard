const mongoose =require('mongoose');
const { Schema } = mongoose;

const dishSchema = new Schema({
    "dishId":String,
     "dishName" :String,
     "imageUrl" :String,
     "isPublished":Boolean,
});

exports.Dishe=mongoose.model('Dishe',dishSchema);