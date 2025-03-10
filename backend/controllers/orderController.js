import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js"
import Stripe from 'stripe'

//placing user order for frontend
const placeOrder = async (req,res)=>{

    const frontend_url = "http://localhost:5174"
    try {
        const newOrder = new orderModel({
            userId:req.body.userId,
            items:req.body.items,
            amount:req.body.amount,
            address:req.body.address
        })

        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}})   //clear the cart data

        res.json({success:true,message:"Order placed successfully !",newOrder})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
        
    }


}

// const verifyOrder = async (req,res)=>{

// }

// user orders for frontend
const userOrders = async (req,res)=>{

    try {
        const orders = await orderModel.find({userId:req.body.userId})
        res.json({success:true,data:orders})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
        
    }

}

//Listing orders for admin panel
const listOrders =async (req,res)=>{
    try {
        const orders = await orderModel.find({})
        res.json({success:true,data:orders})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
        
    }

}

//api for updating order status
const updateStatus = async(req,res)=>{
    try {
        await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status})
        res.json({success:true,message:"Status updated"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
        
    }

}

export {placeOrder,userOrders,listOrders,updateStatus}
