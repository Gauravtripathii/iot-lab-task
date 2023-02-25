import path from "path";

var __dirname = "./public";

export const homePage = (req, res) => {
    res.sendFile('index.html', { root: __dirname });
}