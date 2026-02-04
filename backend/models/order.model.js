import mongoose from "mongoose";

const shopOrderItemSchema = new mongoose.Schema({ 
    item:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Item",
        required:true
    },
    name:String,
    price:Number,
    quantity:Number
}, { timestamps: true })

const shopOrderSchema = new mongoose.Schema({ // agar alag alag shop se item lete hai toh sab shop ke pass alag alag apna apna jayega 
    shop: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Shop"
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    subtotal: Number, // sab ke pass apne apne paise jayenge par user toh ek bar hi karenga payment
    shopOrderItems: [shopOrderItemSchema], // ek jagha se alag alag chize or quatity bhi ho sakti hai toh yeh alag se define kar dete hai
    status:{
        type:String,
        enum:["pending","preparing","out of delivery","delivered"],
        default:"pending"
    },
  assignment:{
     type: mongoose.Schema.Types.ObjectId,
    ref: "DeliveryAssignment",
    default:null
  },
  assignedDeliveryBoy:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
deliveryOtp:{
        type:String,
        default:null
    },
otpExpires:{
        type:Date,
        default:null
    },
deliveredAt:{
    type:Date,
    default:null
}

}, { timestamps: true })

const orderSchema = new mongoose.Schema({ // ismain order kara toh uske sath kya kya detail jalyegi
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    paymentMethod: {
        type: String,
        enum: ['cod', "online"],
        required: true
    },
    deliveryAddress: {
        text: String,
        latitude: Number,
        longitude: Number
    },
    totalAmount: {
        type: Number
    }
    ,
    shopOrders: [shopOrderSchema],
    payment:{
        type:Boolean,
        default:false
    },
    razorpayOrderId:{
        type:String,
        default:""
    },
   razorpayPaymentId:{
    type:String,
       default:""
   }
}, { timestamps: true })

const Order=mongoose.model("Order",orderSchema)
export default Order

// controller inmain change backend database main karne ke liye woh sari usmain likhte hai