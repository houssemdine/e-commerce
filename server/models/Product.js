const mongoose =require("mongoose");


const ProductSchema =new mongoose.Schema(
    {
        title:{type:String , required:true ,unique:true},
        desc:{type:String ,required:true },
        image:{type:String ,required:true},
        color:{type:String },
        size:{type:String },
        categories:{type:Array},
        price:{type:Number ,required:true},

       
    },
    {timestamps:true}
);
module.exports=mongoose.model("Product",ProductSchema);