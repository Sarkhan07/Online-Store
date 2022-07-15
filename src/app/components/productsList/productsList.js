"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsList = void 0;
const productItem_1 = require("../productItem");
class productsList {
    constructor() {
        this.products = [
            new productItem_1.ProductItem(),
            new productItem_1.ProductItem(),
            new productItem_1.ProductItem(),
            new productItem_1.ProductItem(),
        ];
    }
    render() {
        return `<h2>Products list</h2>
        ${this.products.map((product) => product.render()).join('')}
        <p>----</p>
        <div>
        <button>prev</button>
        <button>next</button>
        </div>
        `;
    }
}
exports.productsList = productsList;
//# sourceMappingURL=productsList.js.map