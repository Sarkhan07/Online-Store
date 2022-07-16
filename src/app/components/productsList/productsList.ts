import { Product } from "../../interfaces/products";
import { productsModel } from "../../models/ProductsModel";
import { ProductItem } from "../productItem"

export class productsList {
    private loading = false;
    private error: Error | null = null;
    // private products: Product[] = [];
    private products: Product[] = [];

    constructor() {
        this.fetchProducts();
    }

    fetchProducts() {
        this.loading = true;
        productsModel.getProducts()
        .then((products) => {
            this.products = products;
        })
        .catch((error) => {
            this.error = error
        })
    }

    render() {
        return `<h2>Products list</h2>
        ${this.products.map((product) => new ProductItem(product))
        .map((product) => product.render()).join('') }
        ${this.loading ? `<p>Loading...</p>` : ''}
        ${this.error ? `<p>${this.error.message}</p>` : ''}
        <p>----</p>
        <div>
        <button>prev</button>
        <button>next</button>
        </div>
        `
    }
}

