import ShopDetails from "../models/shops.js";

export const getShops = async (req, res) => {
    try {
        const Shops = await ShopDetails.find();
        res.status(200).json(Shops);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

export const addShop = async (req, res) => {
    const shop_ = req.body;
    const newShop = new ShopDetails(shop_);
    
    try {
        await newShop.save();
        res.status(201).json(newShop);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}