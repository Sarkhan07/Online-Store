"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductItem = void 0;
class ProductItem {
    constructor(product) {
        this.product = product;
    }
    render() {
        return `
        <div>
        
        <h3> ${this.product.name}</h3>
        <p><img src="${this.product.image}" alt="${this.product.name}"></p>
        <p>$${this.product.price}</p>
        </div>
       `;
    }
}
exports.ProductItem = ProductItem;
//# sourceMappingURL=productItem.js.map