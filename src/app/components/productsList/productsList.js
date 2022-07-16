"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsList = void 0;
const ProductsModel_1 = require("../../models/ProductsModel");
const productItem_1 = require("../productItem");
class productsList {
    constructor() {
        this.loading = false;
        this.error = null;
        // private products: Product[] = [];
        this.products = [];
        this.fetchProducts();
    }
    fetchProducts() {
        this.loading = true;
        ProductsModel_1.productsModel.getProducts()
            .then((products) => {
            this.products = products;
        })
            .catch((error) => {
            this.error = error;
        });
    }
    render() {
        return `<h2>Products list</h2>
        ${this.products.map((product) => new productItem_1.ProductItem(product))
            .map((product) => product.render()).join('')}
        ${this.loading ? `<p>Loading...</p>` : ''}
        ${this.error ? `<p>${this.error.message}</p>` : ''}
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