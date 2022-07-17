import { Components } from "../../interfaces/component";
import { Product } from "../../interfaces/products";
import { productsModel } from "../../models/ProductsModel";
import { store } from "../../store/store";
import { ProductItem } from "../productItem"

export class ProductsList implements Components {
    private loading = false;
    private error: Error | null = null;
    private products: Product[] = [];
    private productsComponents: ProductItem[] = [];

    constructor() {
        this.fetchProducts();

        store.$state.subscribe(({ products }) => {
            this.products = products; 
            this.productsComponents = this.products.map((product) => new ProductItem(product));
            if (products.length) {
                this.error = null;
                this.loading = false;
            }
        });
    }

    fetchProducts() {
        this.loading = true;
        store.update();
        productsModel.getProducts().catch((error) => {
            this.error = error
            this.loading = false;
        });
    }

    render() {
        return `<h2 style="background-color: gray; color: white;";>Products list</h2>
        
        <div style="display: flex; flex-wrap: wrap;">
        ${this.productsComponents.map((product) => product.render()).join('') }
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

    addEvents () {
        this.productsComponents.forEach((component) => component.addEvents());
    }
}

