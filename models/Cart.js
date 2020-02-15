const{Schema, model}=require("mongoose");

const cardSchema = new Schema( {
title: {type:String, required: true, unique:true },
content: {type:String, required: true},
price: {type:Number, required: true}
},
{
timestamps:true
})

module.exports = model(`Cart`, cardSchema);