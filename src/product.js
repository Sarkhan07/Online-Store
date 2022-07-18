"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utility_1 = require("./utility");
class Product {
    constructor(name, price) {
        this.id = utility_1.ID.getNewId();
        this.name = name;
        this.price = price;
    }
}
exports.default = Product;
//# sourceMappingURL=product.js.map