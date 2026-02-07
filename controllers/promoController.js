import promoModel from "../models/promocode.js";

const setPromo=async (req,res)=>{
  const {promocode,amount}=req.body;
  try{
      const promo=new promoModel({
      promocode,amount
      })
      await promo.save();
      res.status(200).json({success:true,message:'promocode added'});
  }
  catch (err){
   console.log(err);
   res.json({success:false,message:"Error"});
  }

}


const getPromo=async (req,res)=>{
  const {promocode}=req.query;
  try{
      const promo=await promoModel.findOne({promocode});
      res.status(200).json({success:true,amount:promo.amount});
  }
  catch (err){
   console.log(err);
   res.json({success:false,amount:0});
  }

}

export {getPromo,setPromo}