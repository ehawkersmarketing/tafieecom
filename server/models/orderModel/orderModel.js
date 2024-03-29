const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema(
    {
        products: [
            {
                productId: {
                    type: mongoose.Types.ObjectId,
                    ref: "Product",
                },
                units: Number,
            },
        ],
        orderId: {
            type: Number,
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: "User",
        },
        transactionId: {
            type: String,
        },
        transactionStatus: {
            type: String,
            default: "PROCESSING",
        },
        orderStatus: {
            type: String,
            default: "PROCESSING",
        },
        shipment_charge: {
            type: Number,
        },
        manifestUrl: {
            type: String,
        },
        length: {
            type: Number,
        },
        bredth: {
            type: Number,
        },
        height: {
            type: Number,
        },
        weight: {
            type: Number,
        },
        invoice: {
            type: String,
        },
        shipment_id: {
            type: Number,
        },
        awb: {
            type: String,
        },
        amount: {
            type: Number,
        },
        userAddress: {
            street:String,
            country:String,
            zipCode:Number,
            state:String,
            landmark:String,
            city:String
        },
        timestamps: {
            type: Date,
            default: Date.now(),
        },
        status:{
            type:String,
        },
        shippingOrderId:{
            type:Number
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);