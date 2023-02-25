import path from "path";

var __dirname = "./public";

export const homePage = (req, res) => {
    res.sendFile('index.html', { root: __dirname });
}

export const addShopPage = (req, res) => {
    res.sendFile('add-shop.html', { root: __dirname });
}