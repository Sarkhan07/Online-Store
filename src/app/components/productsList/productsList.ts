import { Product } from "../../interfaces/products";
import { productsModel } from "../../models/ProductsModel";
import { Store } from "../../store/store";
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
        .finally (() => {
            this.loading = false;
            Store.$render.next(true)
        })
    }

    render() {
        return `<h2 style="background-color: gray; color: white;";>Products list</h2>
        
        <div style="display: flex; flex-wrap: wrap;">
        ${this.products.map((product) => new ProductItem(product))
            .map((product) => product.render()).join('') }
        </div>
      
            <div>
            ${this.loading ? `<p><div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div></p>` : ''}
            </div>
      <div>
      ${this.error ? `<p>${this.error.message}</p>` : ''}
      </div>

        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-primary">prev</button>
            <button type="button" class="btn btn-primary">next</button>
        </div>
        `
    }
}

