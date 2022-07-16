"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsModel = exports.ProductsModel = void 0;
const products_DB_1 = require("../DB/products.DB");
class ProductsModel {
    constructor() {
        if (ProductsModel.isExist) {
            return ProductsModel.instance;
        }
        ProductsModel.isExist = true;
        ProductsModel.instance = this;
    }
    getProducts() {
        return (0, products_DB_1.getProducts)();
    }
}
exports.ProductsModel = ProductsModel;
ProductsModel.isExist = false;
exports.productsModel = new ProductsModel();
//# sourceMappingURL=ProductsModel.js.map