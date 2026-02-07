import mongoose from "mongoose";

const Promocode_schema=new mongoose.Schema({
    promocode:{
        type:String,
        required:true,
        unique:true,
    },
    amount:{
        type:Number,
        required:true,
    }
},{timestamps:true});

const promoModel = mongoose.models.promo || mongoose.model("promo",Promocode_schema);

export default promoModel;