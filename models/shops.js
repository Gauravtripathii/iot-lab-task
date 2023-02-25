import mongoose from "mongoose";

const shopSchema = mongoose.Schema({
    name: String,
    cusines: [String],
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const ShopDetails = mongoose.model("ShopDetails", shopSchema);
export default ShopDetails;